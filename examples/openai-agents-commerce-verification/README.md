# OpenAI Agents Commerce Verification Example

This example demonstrates an optional pre-transaction merchant verification pattern for ACP-style agentic commerce workflows.

Reference implementation repository:
https://github.com/warwickwood-cell/gengeo-agent-registry

The example shows how an OpenAI-style autonomous commerce agent can call a merchant verification tool before continuing a transactional workflow.

The goal is not to gatekeep transactions or require a single provider. Instead, this explores whether agentic commerce systems may benefit from interoperable trust and merchant readiness signals prior to autonomous purchasing actions.

---

# ACP Compatibility

This implementation is designed to be compatible with ACP-style commerce flows and MCP-enabled agent architectures.

Example flow:

```text id="v9z7bo"
1. Agent identifies merchant
2. Agent checks merchant verification signal
3. Agent evaluates trust response
4. Agent proceeds through ACP transaction flow
```

Architecture overview:

```text id="5ebayp"
User Request
    ↓
OpenAI Autonomous Commerce Agent
    ↓
ACP Merchant Discovery / Commerce Flow
    ↓
GenGEO Verification Check
    ↓
Verification Response
    ↓
Agent Decision Process
    ↓
ACP Cart / Order / Payment Flow
```

Verification is treated as one signal within a broader agent decision framework.

---

# Why This Matters

Traditional ecommerce trust systems were designed primarily for humans:

* branding
* reviews
* visual trust
* SEO
* reputation

Autonomous agents evaluate commerce differently.

AI agents increasingly rely on:

* structured data
* machine-readable policies
* operational readiness
* transaction reliability
* trust infrastructure
* verification signals

At the same time, legitimate AI-agent transactions are beginning to encounter friction from fraud and bot-detection systems that cannot distinguish autonomous AI agents from malicious automation.

This creates a new infrastructure challenge for agentic commerce:

How should autonomous agents evaluate merchant trust and transaction readiness before taking autonomous commerce actions?

---

# MCP Verification Flow

Remote MCP endpoint:

```text id="m0n0l5"
https://mcp.gengeo.co/mcp
```

(Requires an MCP-compatible client)

Verification tool:

```text id="3n6g48"
verify_store(domain)
```

Example request:

```json id="44u3s6"
{
  "domain": "example.com"
}
```

Example response:

```json id="kjc49m"
{
  "verified": true,
  "status": "active",
  "decision": "verified",
  "eligible_for_ai_agent_purchase": "yes",
  "registry": "gengeo"
}
```

---

# Verification Model

GenGEO uses a deterministic verification model designed to evaluate whether merchants meet a high operational verification threshold before autonomous agents proceed with commerce actions.

Verification may include signals such as:

* machine-readable policies
* operational completeness
* structured commerce metadata
* storefront verification state
* transaction readiness
* agent compatibility checks

The goal is not to guarantee transaction outcomes, but to provide autonomous systems with stronger machine-readable trust signals that may improve transaction confidence within broader agent decision frameworks.

---

# Design Principles

This example intentionally follows several principles:

* verification should remain optional
* agents should retain decision autonomy
* verification should be vendor-neutral
* trust signals should be machine-readable
* verification providers should remain interoperable
* ACP transaction flows should remain fully backward compatible

---

# Enterprise Relevance

This infrastructure may help support:

* autonomous commerce safety
* merchant verification
* transaction confidence infrastructure
* AI-agent transaction assurance
* operational trust evaluation
* autonomous commerce interoperability
* fraud differentiation for legitimate AI agents

Verification status should always be treated as one signal within a broader agent decision framework.

---

# Related ACP Discussion

We have also opened a separate ACP Discussion exploring whether ACP should support optional pre-transaction merchant verification hooks as part of future extension or interoperability models.

Discussion link:
https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/discussions/257

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


# GenGEO

Website:
https://gengeo.co

Verification API:
https://api.gengeo.co/api/verify

MCP Endpoint:
https://mcp.gengeo.co/mcp
