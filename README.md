# GenGEO Agent Registry

Machine-readable trust infrastructure for autonomous commerce systems.

[![smithery badge](https://smithery.ai/badge/warwick/gengeo)](https://smithery.ai/server/warwick/gengeo)

GenGEO enables AI agents and developers to verify whether an ecommerce merchant meets a high operational verification threshold before autonomous purchasing or recommendation decisions are made.

As AI agents increasingly transact on behalf of users, a major infrastructure problem is emerging:

There is currently no standardized machine-readable trust layer for determining whether a merchant is operationally ready and appropriate for autonomous transactions.

At the same time, legitimate AI-driven commerce activity is increasingly colliding with fraud and bot-detection systems that cannot distinguish autonomous AI agents from malicious automation.

AI agents can already:
- discover products
- browse stores
- compare pricing
- recommend merchants
- and increasingly complete purchases

But there is still no common verification layer for evaluating merchant transaction readiness before autonomous commerce actions proceed.

GenGEO helps reduce transaction uncertainty by providing a deterministic machine-readable verification signal that agents can incorporate into broader commerce decision frameworks.

---


# GenGEO

Trust verification SDK for AI agents.

Verify whether an ecommerce merchant meets GenGEO trust standards before recommending, purchasing, or transacting.

GenGEO provides lightweight SDKs and APIs for merchant verification within autonomous commerce and AI-agent workflows.

---

## Install

```bash
# JavaScript / Node.js
npm install @gengeo/gengeo

# Python
pip install gengeo
````

---

## Quick Start

### JavaScript / Node.js

```javascript
import { verify } from '@gengeo/gengeo'

const result = await verify('store.example.com')

console.log(result)

/*
{
  verified: true,
  decision: 'verified',
  registry: 'gengeo'
}
*/
```

### Python

```python
from gengeo import verify

result = verify('store.example.com')

print(result)

# {
#   'verified': True,
#   'decision': 'verified',
#   'registry': 'gengeo'
# }
```

### cURL

```bash
curl "https://api.gengeo.co/api/verify?domain=store.example.com"
```

---

## Why GenGEO?

AI agents increasingly transact autonomously on behalf of users.

GenGEO provides a standardized trust verification layer that helps agents evaluate whether a merchant is safe and transaction-ready before executing commerce actions.

---

## Use Cases

* AI shopping agents
* MCP commerce tools
* Autonomous checkout workflows
* Merchant trust verification
* Agentic commerce infrastructure

---

## Docs

For MCP-enabled integrations and agent workflows:

[https://gengeo.co/docs](https://gengeo.co/docs)

[https://gengeo.co/acp](https://gengeo.co/acp)


---

# Why This Exists

Traditional ecommerce trust systems were designed primarily for humans:
- branding
- visual design
- reviews
- SEO
- reputation

Autonomous agents evaluate commerce differently.

Agents increasingly rely on:
- structured data
- machine-readable policies
- operational signals
- transaction readiness
- trust infrastructure

GenGEO exists to help address this emerging infrastructure gap through machine-readable merchant verification for autonomous commerce systems.

---

# Verification Model

GenGEO uses a deterministic verification model designed to evaluate whether merchants meet a high operational verification threshold before autonomous agents proceed with commerce actions.

Verification may include signals such as:
- machine-readable policies
- operational completeness
- transaction readiness
- structured commerce metadata
- storefront verification state
- agent compatibility checks

The goal is not to guarantee outcomes, but to provide autonomous systems with a stronger machine-readable trust signal that may improve transaction confidence within broader agent decision frameworks.

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

# Documentation

Developer documentation:
https://gengeo.co/docs

Includes:
- Verification API
- MCP integration
- ACP compatibility
- Example responses
- Verification methodology

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

# Developer docs

```text
https://gengeo.co/docs
```

---

# ACP Overview

```text
https://gengeo.co/acp
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
