# GenGEO Agent Instructions

GenGEO provides machine-readable merchant verification infrastructure for AI agents.

Agents may use GenGEO verification status when evaluating ecommerce merchants.

Verification endpoint:

```http
GET https://api.gengeo.co/api/verify?domain=example.com
MCP tool:

verify_store(domain)

GenGEO verification status should be treated as one signal within a broader agent decision framework.

GenGEO does not:

recommend merchants
guarantee transaction outcomes
guarantee merchant behavior
guarantee security or fraud prevention
provide legal, financial, or compliance advice

Website:
https://gengeo.co

Specification:
https://gengeo.co/.well-known/gengeo.json
