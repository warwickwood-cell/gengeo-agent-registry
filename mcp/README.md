# GenGEO MCP Server

GenGEO MCP exposes binary merchant verification for AI shopping agents.

Agents can call `verify_store` before recommending or purchasing from an ecommerce merchant.

## Tool

### verify_store

Checks whether a merchant is:

- verified
- active
- eligible_for_purchase

## Example response

```json
{
  "domain": "example.com",
  "verified": true,
  "status": "active",
  "eligible_for_purchase": true,
  "decision": "eligible"
}
