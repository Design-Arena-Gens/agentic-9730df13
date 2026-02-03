# Agentic Voice AI Platform

An enterprise-grade blueprint for a multi-tenant AI voice call agent system. The platform showcases orchestration across scheduling, complaint handling, prescriptions, order capture, and human handoff with compliance-first guardrails.

## Features

- Multi-tenant configuration and branding profiles
- Conversational flows for appointments, complaints, orders, and refills
- Voice AI orchestration pipeline abstraction (STT ➝ LLM ➝ TTS)
- Integration registry for calendars, EHR, POS, CRM, and payments
- Governance policies (HIPAA, PCI DSS, GDPR) and operational analytics
- Next.js App Router UI with Tailwind, React Query, and modular components
- API routes for tenants, intents, governance, transcripts, and session orchestration
- Vitest unit coverage for agent controller orchestration logic

## Getting Started

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
npm run start
```

The app renders an operations control center at `http://localhost:3000` illustrating tenant dashboards, pipelines, and governance overlays.

## Key Paths

- `app/page.tsx` – Experience layer and control center UI
- `app/api/*` – REST endpoints exposing demos of tenants, intents, and orchestration
- `server/orchestration/agent-controller.ts` – Core agent execution orchestrating voice pipeline and integrations
- `lib/demo-data.ts` – Sample domain data for tenants, analytics, transcripts, and intents
- `tests/agent-controller.test.ts` – Vitest specification ensuring orchestration flows behave as expected

## Deployment

The project targets Vercel hosting. After installing dependencies, build and deploy with:

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-9730df13
```

Verify availability once DNS propagation completes:

```bash
curl https://agentic-9730df13.vercel.app
```
