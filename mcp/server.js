#!/usr/bin/env node

import fetch from "node-fetch";
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
      "Check whether an ecommerce merchant is verified in the GenGEO trust registry.",
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

    try {
      const url = `${GENGEO_VERIFY_ENDPOINT}?domain=${encodeURIComponent(cleanDomain)}`;
      const response = await fetch(url);

      if (!response.ok) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                domain: cleanDomain,
                verified: false,
                status: "lookup_error",
                eligible_for_ai_agent_purchase: "unknown",
                decision: "verification_unavailable",
                reason: "GenGEO verification lookup was unavailable."
              })
            }
          ]
        };
      }

      const data = await response.json();

      const verified = data.verified === true;
      const active = data.status === "active" || data.status === "verified";

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              domain: cleanDomain,
              verified,
              status: verified && active ? "active" : "not_found",
              eligible_for_ai_agent_purchase: verified && active ? "yes" : "unknown",
              decision: verified && active ? "verified" : "verification_required",
              registry: "GenGEO"
            })
          }
        ]
      };
    } catch (error) {
  console.error("FETCH ERROR:", error);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              domain: cleanDomain,
              verified: false,
              status: "lookup_error",
              eligible_for_ai_agent_purchase: "unknown",
              decision: "verification_unavailable",
              reason: "GenGEO verification lookup could not be completed."
            })
          }
        ]
      };
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
