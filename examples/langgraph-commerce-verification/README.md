# LangGraph Commerce Agent with GenGEO MCP Verification

This example shows how a LangGraph/LangChain agent can add merchant verification before making ecommerce recommendations or transaction decisions.

## Why this matters

There is currently no standard way for AI shopping agents to verify whether a merchant is operationally ready and safe to transact with.

As AI agents begin making recommendations and purchases on behalf of users, merchant verification becomes an important trust step.

GenGEO provides a remote MCP tool:

```text
verify_store(domain)

Agents can use the verification result as one signal in a broader commerce decision process.

Flow
User request
  ↓
Agent identifies candidate merchant
  ↓
Agent calls GenGEO verify_store(domain)
  ↓
Agent receives verification status
  ↓
Agent incorporates result into recommendation or transaction logic

MCP Endpoint
https://mcp.gengeo.co/mcp

Install
pip install langchain langgraph langchain-mcp-adapters

Run
python example.py

Important

GenGEO does not rank merchants, recommend stores, or guarantee transaction outcomes.

Verification status should be treated as one signal within a broader agent decision framework.