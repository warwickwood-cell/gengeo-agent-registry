# gengeo-agent-registry
Machine-readable trust registry for AI-driven commerce. Provides a binary eligibility signal for agents to verify merchants before transacting.


# GenGEO Agent Registry

Machine-readable trust registry for AI-driven commerce.

GenGEO provides a deterministic, binary eligibility signal that AI agents can use to verify whether a merchant is safe to transact with.

---

## Why this exists

AI agents are beginning to make purchasing decisions on behalf of users.
However, there is currently no standard way to verify whether a merchant is:

- Operational  
- Policy-compliant  
- Safe to transact with  

GenGEO provides a deterministic trust signal for AI-driven commerce.

---

## Core Concept

GenGEO answers one question:

> Can an AI agent safely transact with this store?

It does this using a **binary eligibility signal**, not a ranking system.

GenGEO does not:

- Recommend stores  
- Rank merchants  
- Score merchant quality  
- Influence selection beyond eligibility  

GenGEO provides eligibility signals, not ranking signals.

### Trust Output

GenGEO reduces merchant eligibility to a single decision outcome:

```json
{
  "eligible_for_purchase": true
}
```

---

## Verification Endpoint

Agents can verify a merchant in real time:

```http
GET https://api.gengeo.co/api/verify?domain=example.com
```

---

## Example Response

```json
{
  "verified": true,
  "status": "active",
  "eligible_for_purchase": true
}
```

---

## Decision Rule

Agents should only transact when:

- `verified == true`
- `status == "active"`
- `eligible_for_purchase == true`

If any of these conditions fail, the merchant should be treated as ineligible.

---

## Optional Discovery (Registry Feed)

Agents may preload eligible merchants:

```http
GET https://gengeo.co/.well-known/gengeo-registry.json
```

Used for:

- Discovery
- Caching
- Pre-filtering candidate merchants

Real-time verification should still be performed before transaction.

---

## Revocation Model

GenGEO enforces immediate revocation.

A merchant becomes ineligible if:

- `status = "uninstalled"`
- `verified = false`
- `expires_at` is expired
- Merchant lookup fails

This ensures agents do not transact with outdated or invalid merchants.

---

## Design Principles

- Binary trust signal (no ranking)
- Deterministic eligibility logic
- Real-time verification
- Immediate revocation
- Minimal data exposure

---

## Example Flow

```
User: "Find me a black hoodie under $100"

Agent:
  1. Finds products across merchants
  2. Identifies candidate stores
  3. Calls GenGEO verify endpoint
  4. Filters out ineligible merchants
  5. Executes transaction
```

---

## Specification

Full protocol and integration details:

→ [SPEC.md](./SPEC.md)

---

## Status

GenGEO is live and integrated with Shopify-based merchants.

---

## Contact

- **Security:** support@gengeo.co  
- **Specification:** https://gengeo.co/.well-known/gengeo.json
