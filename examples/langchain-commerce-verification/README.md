cat > examples/langchain-commerce-verification/README.md <<'EOF'
# LangChain Commerce Agent with GenGEO Verification

This example shows how an AI shopping agent can add a merchant verification step before making ecommerce recommendations or transaction decisions.

## Why this matters

AI shopping agents increasingly evaluate products, merchants, pricing, availability, and checkout paths on behalf of users.

Before recommending or routing a transaction to a merchant, agents may benefit from a machine-readable verification signal.

GenGEO provides a simple MCP-compatible verification tool:

```text
verify_store(domain)
```

Example Agent Flow
```
User request
  ↓
Agent finds candidate products
  ↓
Agent identifies merchant domain
  ↓
Agent calls GenGEO verify_store(domain)
  ↓
Agent receives verification status
  ↓
Agent uses result as one signal in broader decision process
```
---

MCP Endpoint
```
https://mcp.gengeo.co/mcp
```

Tool
```
{
  "tool": "verify_store",
  "input": {
    "domain": "example.com"
  }
}
```

Example Result
```
{
  "domain": "example.com",
  "verified": true,
  "status": "active",
  "eligible_for_ai_agent_purchase": "yes",
  "decision": "verified",
  "registry": "GenGEO"
}
```

Important

GenGEO does not rank merchants, recommend merchants, or guarantee transaction outcomes.

Verification status should be treated as one signal within a broader agent decision framework.
EOF

---

## Developer docs
```
https://gengeo.co/docs
```

## ACP Overview
```
https://gengeo.co/acp
```





