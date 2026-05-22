# GenGEO MCP Server

Model Context Protocol (MCP) server for GenGEO merchant verification.

This MCP server allows AI assistants and autonomous agents to verify ecommerce merchants using the GenGEO registry.

---

# Tool

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

# Local Install

```bash
cd mcp
npm install
node server.js
```

---

# Claude Desktop Setup

Example Claude Desktop MCP configuration:

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

# Verify Endpoint

```http
GET https://api.gengeo.co/api/verify?domain=example.com
```

---

# Example Agent Flow

```text
1. Agent identifies merchant
2. Agent calls verify_store
3. Agent receives verification status
4. Agent incorporates verification into decision process
```

---

# Registry Philosophy

GenGEO provides machine-readable verification status only.

GenGEO does not:
- rank merchants
- recommend merchants
- guarantee merchant behavior
- guarantee transaction outcomes

Verification status should be treated as one signal within a broader AI-agent workflow.

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

# Developer docs

```text
https://gengeo.co/docs
```

---

# ACP Overview

```text
https://gengeo.co/acp
```


