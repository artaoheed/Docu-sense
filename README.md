# DocuSense — AI-Powered Document Q&A

Upload a PDF → ask a question → get grounded answers with citations.

## Tech
- Frontend: Next.js (App Router, TS)
- Backend: FastAPI (Python)
- Vector Store: Chroma (local dev)
- AI: OpenAI (embeddings + LLM)

## Monorepo
- `apps/frontend` — web UI
- `apps/backend` — API

## Local Dev
Backend:
```bash
cd apps/backend
source .venv/bin/activate
uvicorn main:app --reload --port 8000
