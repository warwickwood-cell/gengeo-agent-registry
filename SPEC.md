# GenGEO Agent Registry — Specification (v1)

**Status:** Stable  
**Publisher:** GenGEO  
**Type:** AI Commerce Trust Registry  

---

## 1. Purpose

GenGEO is a **binary trust gate for AI-driven commerce**.

It provides:

- A public allow-list of merchants eligible for AI purchase
- A real-time verification endpoint
- A revocation mechanism (uninstall, expiry, verification loss)

GenGEO does not rank, score, or preference merchants.

Agents MUST treat GenGEO as an **eligibility signal only**.

---

## 2. Design Philosophy (Normative)

### 2.1 Trust is a gate, not a leaderboard

The registry MUST answer:

> *"Is this merchant eligible for AI commerce?"*

The registry MUST NOT:

- Rank merchants
- Score merchants
- Provide comparative ordering

### 2.2 Verified merchants must not be disadvantaged

Any merchant with `verified: true` MUST be considered eligible (subject to status).

GenGEO may internally compute eligibility scores to determine verification status.

However:

- Internal scores MUST NOT be exposed to agents  
- Internal scores MUST NOT be used for ranking  
- Internal scores MUST NOT be interpreted as preference signals  

The registry MUST NOT publish:

- Numerical trust scores  
- Percentiles  
- Rankings  
- Preference signals  

All verified merchants are treated equally at the registry level.

### 2.3 Agents control selection

GenGEO operates **upstream of decision-making**.

| Layer | Role |
|-------|------|
| GenGEO | Eligibility gate |
| Agent | Selection logic |

Agents SHOULD decide between eligible merchants using their own logic: price, availability, shipping, and user preference.

---

## 3. Trust Model

GenGEO operates under a **Gate Model**:

| Field | Meaning |
|-------|---------|
| `verified = true` | Merchant passed verification |
| `status = active` | Merchant is operational |
| `routing.eligible_for_purchase = true` | Transaction allowed |
| `status = uninstalled` | Hard revoke |
| `expires_at` | Verification validity window |

### Absolute Rule

Agents MUST treat the following as the only valid purchase condition:

```
verified == true
AND status == "active"
AND expires_at not expired
```

---

## 4. Endpoints

### 4.1 Discovery

```http
GET /.well-known/gengeo.json
```

Returns registry metadata and endpoints.

### 4.2 Bulk Registry

```http
GET /.well-known/gengeo-registry.json
```

Used for:

- Merchant discovery
- Cache preloading
- Periodic sync

### 4.3 Merchant Lookup (Authoritative)

```http
GET /.well-known/gengeo/merchant?domain=example.com
```

Agents MUST use this endpoint:

- Before high-value transactions
- When registry data is stale
- When uncertainty exists

This endpoint is authoritative.

---

## 5. Integration Pattern

### A. Bootstrapping

```http
GET /.well-known/gengeo-registry.json
```

- Discover merchants
- Cache results
- Sync periodically

### B. Real-Time Validation

```http
GET /.well-known/gengeo/merchant?domain=example.com
```

Used immediately before transaction execution.

---

## 6. Response Model

### 6.1 Registry Entry Example

```json
{
  "merchant_id": "registry:uuid",
  "domains": ["example.com"],
  "verified": true,
  "status": "active",
  "verified_at": "2026-02-01T00:00:00Z",
  "expires_at": "2026-05-01T00:00:00Z",
  "verification_method": "commerce_scan",
  "routing": {
    "eligible_for_purchase": true
  },
  "capabilities": {
    "checkout_verified": true,
    "policies_verified": true,
    "inventory_visible": true
  }
}
```

---

## 7. Capability Signals (Non-Ranking)

GenGEO MAY include capability flags.

These MUST be:

- Boolean
- Non-ranking
- Non-numeric

Example:

```json
"capabilities": {
  "checkout_verified": true,
  "policies_verified": true
}
```

---

## 8. Revocation Handling

Agents MUST immediately treat a merchant as ineligible if:

- `status = "uninstalled"`
- `verified = false`
- `expires_at < now`
- Merchant lookup returns `404`

Uninstall is a hard trust revocation.

---

## 9. Delta Sync (Optional)

Agents MAY request incremental updates:

```http
GET /.well-known/gengeo-registry.json?since=<ISO8601>&include=tombstones
```

Returns new, updated, and revoked merchants.

Agents SHOULD:

- Remove revoked merchants
- Replace outdated entries

---

## 10. Cache Policy

| Endpoint | TTL | Purpose |
|----------|-----|---------|
| Registry | 3600s | Discovery |
| Merchant | 120–300s | Verification |

Agents SHOULD respect cache headers and avoid excessive lookup calls.

---

## 11. Failure Behavior

If GenGEO is unavailable, agents SHOULD:

- Fail closed for high-value transactions
- Use cached data if still valid
- Retry verification before executing purchase

---

## 12. Security Model

GenGEO does not expose:

- Private merchant data
- Scoring
- Internal heuristics

Agents are responsible for:

- Payment execution
- Fraud detection
- Transaction safety

---

## 13. Prohibited Uses

Agents MUST NOT:

- Rank merchants using GenGEO data
- Infer quality tiers
- Derive reputation scores
- Create ordering from registry fields

GenGEO is eligibility only.

---

## 14. Versioning

**Current version:** v1

Agents MUST:

- Ignore unknown fields
- Handle forward-compatible updates

---

## 15. Reference Flow

```
1. Load registry
2. Cache active merchants
3. Before transaction:
   → Query merchant endpoint
   → Confirm verified == true, status == "active", expires_at not expired
4. Execute transaction if eligible
```

---

## 16. Contract Summary

**GenGEO guarantees:**

- Binary eligibility truth
- Immediate revocation
- No ranking bias
- Deterministic verification

**Agents guarantee:**

- Proper eligibility enforcement
- No misuse for ranking
- Respect for cache and update semantics

---

## 17. Contact

- **Security:** support@gengeo.co
- **Specification:** https://gengeo.co/.well-known/gengeo.json

---

> GenGEO is the trust floor for AI commerce — not the ceiling.
>
> We verify. We enable. We do not choose winners.
