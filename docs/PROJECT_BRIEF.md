
### `docs/PROJECT_BRIEF.md` (template)
```markdown
# Project Brief — DocuSense

## Problem
Internal knowledge buried in PDFs slows teams.

## Users
- Analysts, PMs, Finance ops, Support leads.

## Goals
- MVP: Upload a PDF, ask questions, show answers with citations.
- Trust: Show page/section references.

## Non-Goals (Phase 1)
- SSO, RBAC, multi-tenant, analytics dashboards.

## User Stories
1) As an analyst, I can upload a PDF and ask a question.
2) As a PM, I can see citations so I can trust the answer.

## Success Criteria (MVP)
- Answers 3/3 basic questions on a sample PDF with correct citations.
- End-to-end latency under 5s locally for small docs (<10 pages).

## Constraints
- Keep costs low; local vector store first.
- Keep privacy: no document leaves infra outside of embeddings.

## Risks & Mitigations
- Hallucination → strict retrieval + cite chunks; refuse if not found.
- PDF parsing errors → fallback parsers, simple text-mode.
