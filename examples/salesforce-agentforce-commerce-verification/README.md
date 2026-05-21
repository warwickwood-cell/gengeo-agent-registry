# Salesforce Agentforce Commerce Verification Example

This example demonstrates how Salesforce Agentforce or autonomous commerce agents can use GenGEO merchant verification before executing transactional workflows.

As AI agents begin conducting autonomous commerce actions, there is currently no standardized trust layer for verifying whether a merchant is operationally ready and safe to transact with.

GenGEO provides a machine-readable verification signal that can be integrated into MCP-enabled commerce agents.

---

# The Problem Nobody Is Talking About

There is currently no standard way for an AI agent to verify whether a merchant is safe to transact with.

Legitimate AI transactions are increasingly being blocked by fraud and bot-detection systems that cannot distinguish autonomous AI agents from malicious automation.

The trust infrastructure that agentic commerce depends on does not yet exist.

---

# Why This Matters

Traditional ecommerce trust systems were designed for humans:
- branding
- visual design
- reviews
- SEO
- reputation

AI agents evaluate commerce differently.

Agents:
- parse structured data
- analyze operational signals
- inspect machine-readable policies
- evaluate transaction readiness
- assess trust infrastructure before taking action

As autonomous commerce grows, machine-readable merchant verification becomes increasingly important.

---

# Example Workflow

```text
User request
    ↓
Salesforce Agentforce commerce agent
    ↓
Identifies merchant candidate
    ↓
Calls GenGEO MCP verification tool
    ↓
Receives verification status
    ↓
Uses verification signal within broader transaction decision process
    ↓
Continues autonomous commerce workflow
GenGEO MCP Verification
```

---

Remote MCP endpoint:
```
https://mcp.gengeo.co/mcp
```
---

Verification tool:
```
verify_store(domain)
```
---

Example:
```
{
  "domain": "example.com"
}
```

Example response:
```
{
  "verified": true,
  "status": "active",
  "decision": "verified",
  "eligible_for_ai_agent_purchase": "yes"
}
```
---

Enterprise Relevance

This infrastructure may help support:

autonomous commerce safety
merchant verification
transaction assurance
fraud reduction
operational trust evaluation
AI-agent transaction confidence

Verification status should be treated as one signal within a broader enterprise decision framework.

---

GenGEO

Website:
```
https://gengeo.co
```

Verification API:
```
https://api.gengeo.co/api/verify
```

MCP Endpoint:
```
https://mcp.gengeo.co/mcp
```

Developer docs:
```
https://gengeo.co/docs
```

