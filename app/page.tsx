import {
  Brain,
  CalendarCheck,
  CircleUserRound,
  ClipboardList,
  CreditCard,
  Languages,
  Layers3,
  PhoneCall,
  ShieldCheck,
  Waves
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";
import { PipelineDiagram } from "@/components/pipeline-diagram";
import { MetricsGrid } from "@/components/metrics-grid";
import { TranscriptTable } from "@/components/transcript-table";
import { analytics, intents, tenants, transcripts } from "@/lib/demo-data";
import { TenantHealth } from "@/components/client/tenant-health";

const heroFeatures = [
  {
    title: "Omni-lingual Voice Intelligence",
    description:
      "Low-latency speech pipeline with tonal mirroring, interruption handling, and granular confidence scoring.",
    icon: <Languages className="h-5 w-5" />
  },
  {
    title: "Multi-tenant Control Plane",
    description:
      "Isolated data domains with shared infrastructure, configurable guardrails, and tenant-scoped policies.",
    icon: <Layers3 className="h-5 w-5" />
  },
  {
    title: "Operational Observability",
    description:
      "Real-time dashboards, voice quality analytics, and audit-grade transcripts with PCI/HIPAA redaction.",
    icon: <ShieldCheck className="h-5 w-5" />
  }
];

const flows = [
  {
    title: "Appointment Lifecycle",
    description:
      "Checks availability across calendars, validates patient/guest identity, secures confirmations, and triggers omnichannel notifications.",
    icon: <CalendarCheck className="h-5 w-5" />
  },
  {
    title: "Complaint Intelligence",
    description:
      "Captures detailed complaints with sentiment tags, escalates based on severity rules, and synchronizes with CRM ticket queues.",
    icon: <ClipboardList className="h-5 w-5" />
  },
  {
    title: "Payments & Deposits",
    description:
      "Tokenizes payment details, runs authorization via Stripe/Adyen, and updates ledger services with full audit trail.",
    icon: <CreditCard className="h-5 w-5" />
  },
  {
    title: "Human Handoff",
    description:
      "Routes complex interactions to workforce management queues with full transcript context and real-time whisper coaching.",
    icon: <CircleUserRound className="h-5 w-5" />
  }
];

const governance = [
  {
    title: "Secure Session Layer",
    description:
      "End-to-end encryption, token-aware SIP routing, consent recording, and governance aligned with SOC2/HIPAA.",
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "Voice Quality Service Level",
    description:
      "Adaptive jitter buffers, MOS monitoring, and predictive alerting before call quality degradation occurs.",
    icon: <Waves className="h-5 w-5" />
  },
  {
    title: "Cognitive Guardrails",
    description:
      "Prompt firewall, policy evaluator, and regulator-specific checkpoints (GDPR, PHIPA, TCPA) enforced per tenant.",
    icon: <Brain className="h-5 w-5" />
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-12 shadow-card lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <PhoneCall className="h-4 w-4" />
            Voice AI Command Center
          </span>
          <h1 className="text-4xl font-bold text-slate-950 lg:text-5xl">
            Deploy enterprise-ready AI voice agents with full-stack orchestration
            power.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Architected for restaurants, clinics, salons, and service providers
            that demand reliability, compliance, and measurable outcomes. Build
            once, personalize per tenant, and operate with confidence.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {heroFeatures.map(({ title, description, icon }) => (
              <FeatureCard
                key={title}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </div>
          <div className="flex flex-col justify-between gap-4 rounded-3xl border border-primary-200 bg-white p-6 shadow-inner">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
              Real-time call snapshot
            </p>
            <div className="mt-3 space-y-3 rounded-2xl bg-slate-900 p-5 text-slate-50 shadow-lg">
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-primary-200">
                <span>Tenant</span>
                <span>Status</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>Aurora Health Clinics</span>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-[10px] font-bold uppercase text-green-300">
                  Live
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                &quot;Hi, this is the Aurora Health virtual assistant. I can help you
                schedule appointments, refill prescriptions, or connect you with
                our care team.&quot;
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
              <span>Voice QoS</span>
              <span>Automation</span>
            </div>
            <div className="grid gap-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Mean Opinion Score</span>
                <span className="font-semibold text-slate-900">4.6 / 5</span>
              </div>
              <div className="flex justify-between">
                <span>Containment rate</span>
                <span className="font-semibold text-slate-900">92%</span>
              </div>
              <div className="flex justify-between">
                <span>Fallback to human</span>
                <span className="font-semibold text-slate-900">8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Orchestration"
          title="Full-stack voice automation flows"
          description="Pre-built, configurable workflows covering bookings, onboarding, complaints, order taking, and healthcare use-cases."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flows.map(({ title, description, icon }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Tenants"
          title="Multi-tenant control plane"
          description="Isolated tenant configurations with per-client business rules, compliance scopes, and branded personality profiles."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {tenants.map((tenant) => (
            <div
              key={tenant.tenantId}
              className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">
                  {tenant.brand.name}
                </h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-widest text-slate-500">
                  {tenant.tenantId}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                {tenant.brand.toneGuide.join(" • ")}
              </p>
              <div className="mt-5 grid gap-3 text-xs uppercase tracking-wider text-slate-500">
                <div>
                  <span className="text-slate-400">Locales:</span>{" "}
                  {tenant.localeSupport.join(" / ")}
                </div>
                <div>
                  <span className="text-slate-400">Payment Providers:</span>{" "}
                  {tenant.paymentProviders.join(", ")}
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold text-slate-500">
                  Integrations
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  {tenant.integrations.map((integration) => (
                    <span
                      key={integration.displayName}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600"
                    >
                      {integration.displayName} · {integration.status}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <h4 className="text-sm font-semibold text-slate-500">
                  Intents
                </h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {intents.map((intent) => (
                    <li key={intent.id} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                      <span>
                        <strong>{intent.name}:</strong> {intent.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Intelligence Stack"
          title="Voice AI pipeline"
          description="Carrier-grade telephony ingress, adaptive audio AI, LLM orchestration, and observability stitched into a single platform."
        />
        <PipelineDiagram />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Governance"
          title="Security & compliance engineered in"
          description="Guardrails across every layer ensure safe automation in regulated industries with human oversight when necessary."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {governance.map(({ title, description, icon }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Operations"
          title="Live operations dashboard"
          description="Monitor KPIs, drill into transcripts, and continuously tune the AI agent with analytics feedback loops."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <MetricsGrid analytics={analytics} />
          <TenantHealth />
        </div>
        <TranscriptTable transcripts={transcripts} />
      </section>
    </div>
  );
}
