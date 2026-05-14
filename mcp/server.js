#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const GENGEO_VERIFY_ENDPOINT = "https://api.gengeo.co/api/verify";

const server = new McpServer({
  name: "gengeo-agent-registry",
  version: "0.1.0"
});

server.registerTool(
  "verify_store",
  {
    title: "Verify Store",
    description:
      "Check whether an ecommerce merchant is verified and eligible for AI-agent purchase using the GenGEO binary trust registry.",
    inputSchema: {
      domain: z.string().min(3).describe("Merchant domain, e.g. example.com")
    }
  },
  async ({ domain }) => {
    const cleanDomain = domain
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .split("/")[0]
      .trim()
      .toLowerCase();

    console.log("Verifying:", cleanDomain);

    const url = `${GENGEO_VERIFY_ENDPOINT}?domain=${encodeURIComponent(cleanDomain)}`;

    const response = await fetch(url);

    if (!response.ok) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                domain: cleanDomain,
                verified: false,
                status: "error",
                eligible_for_purchase: false,
                decision: "ineligible",
                reason: "GenGEO verification lookup failed."
              },
              null,
              2
            )
          }
        ]
      };
    }

    const data = await response.json();

    const verified = data.verified === true;
    const active = data.status === "active" || data.status === "verified";
    const eligible = data.eligible_for_purchase === true || (verified && active);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              domain: cleanDomain,
              verified,
              status: active ? "active" : "inactive",
              eligible_for_purchase: eligible,
              decision: eligible ? "eligible" : "ineligible"
            },
            null,
            2
          )
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
