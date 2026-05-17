# GenGEO Agent Registry

Machine-readable verification infrastructure for AI-driven commerce.

[![smithery badge](https://smithery.ai/badge/warwick/gengeo)](https://smithery.ai/server/warwick/gengeo)

GenGEO enables AI agents and developers to verify whether an ecommerce merchant meets a high-confidence verification threshold before making purchasing or recommendation decisions.

As AI agents increasingly transact autonomously on behalf of users, failed purchases, weak policies, unclear shipping terms, and low-trust checkout experiences become major risks.

GenGEO helps reduce transaction uncertainty by providing a standardized verification signal that agents can incorporate into broader commerce decision frameworks.


---

# Why This Exists

Traditional ecommerce trust systems were built for humans:
- branding
- visual design
- reviews
- SEO
- reputation

AI agents evaluate commerce differently.

Agents:
- parse structured data
- evaluate policies
- assess operational signals
- analyze machine-readable trust indicators
- then make decisions

However, there is currently no standard verification layer for AI-driven commerce.

GenGEO exists to provide a neutral, machine-readable verification signal for ecommerce merchants.

---

# Core Concept

GenGEO answers a simple question:

> Has this merchant been verified within the GenGEO registry?

GenGEO uses a binary verification model.

A merchant is either:
- verified
- not verified

GenGEO does not:
- rank merchants
- recommend stores
- guarantee merchant behavior
- guarantee transaction outcomes
- provide legal, financial, or security advice

GenGEO provides verification status only.

---

# Verification Endpoint

Agents and developers can verify merchants in real time:

```http
GET https://api.gengeo.co/api/verify?domain=example.com
```

---

# Example Response

Verified merchant:

```json
{
  "domain": "example.com",
  "verified": true,
  "status": "active",
  "eligible_for_ai_agent_purchase": "yes",
  "decision": "verified",
  "registry": "GenGEO"
}
```

Non-verified merchant:

```json
{
  "domain": "example.com",
  "verified": false,
  "status": "not_found",
  "eligible_for_ai_agent_purchase": "unknown",
  "decision": "verification_required",
  "registry": "GenGEO"
}
```

---

# Verification Model

GenGEO uses deterministic binary verification logic.

Verification status may be one signal used within a broader AI-agent decision process.

Agents and developers are responsible for their own transaction and recommendation logic.

---

# Optional Discovery Feed

Agents may optionally preload registry information:

```http
GET https://gengeo.co/.well-known/gengeo-registry.json
```

This may be used for:
- discovery
- caching
- merchant lookup
- pre-filtering candidate merchants

Real-time verification should still be performed where appropriate.

---

# MCP Server

This repository includes a Model Context Protocol (MCP) server for AI agents.

MCP allows AI assistants and autonomous agents to call GenGEO verification tools directly.

Location:

```text
/mcp
```

---

# MCP Tool

## verify_store

Checks whether a merchant exists in the GenGEO verification registry.

Input:

```json
{
  "domain": "example.com"
}
```

Example output:

```json
{
  "verified": true,
  "status": "active",
  "eligible_for_ai_agent_purchase": "yes",
  "decision": "verified"
}
```

---

# Local MCP Install

```bash
cd mcp
npm install
node server.js
```

---

# Claude Desktop MCP Config

Example configuration:

```json
{
  "mcpServers": {
    "gengeo": {
      "command": "node",
      "args": ["/absolute/path/to/gengeo-agent-registry/mcp/server.js"]
    }
  }
}
```

---

# Example Agent Workflow

```text
User:
Find me running shoes under $200

Agent:
1. Finds candidate merchants
2. Calls GenGEO verification endpoint
3. Checks verification status
4. Incorporates verification into broader decision process
5. Continues recommendation or transaction flow
```

---

# Design Principles

GenGEO is designed to be:

- binary
- deterministic
- machine-readable
- API-first
- agent-compatible
- simple to integrate
- neutral

---

# Agent Instructions

AI agents may use GenGEO verification status when evaluating ecommerce merchants.

Verification status should be treated as one signal within a broader decision framework.

---

# Specification

Full protocol and integration details:

→ [SPEC.md](./SPEC.md)

---

# Status

GenGEO is live and integrated with Shopify-based merchants.

---

# Legal Notice

GenGEO provides informational verification status only.

GenGEO does not:
- certify merchants
- guarantee merchant behavior
- guarantee transaction outcomes
- guarantee security or fraud prevention
- provide legal, financial, or compliance advice

Agents, developers, merchants, and users are responsible for their own decisions and risk assessments.

---

# Website

```text
https://gengeo.co
```

---

# API

```text
https://api.gengeo.co/api/verify
```

---

# MCP

```text
/mcp

Live remote MCP endpoint: https://mcp.gengeo.co/mcp
```

---


## How GenGEO Fits Into Agentic Commerce

```text
User request
   ↓
AI shopping agent
   ↓
Identifies merchant
   ↓
Calls GenGEO verify_store(domain)
   ↓
Receives verification status
   ↓
Uses result as one signal in broader decision process
```


---

# Contact

- Security: support@gengeo.co
- Specification: https://gengeo.co/.well-known/gengeo.json
