const nodes = [
  {
    id: "ingress",
    title: "Telephony Ingress",
    description:
      "SIP trunks, PSTN carriers, WebRTC, and omni-channel contact points.",
    detail: "BYOC with Twilio, Plivo, or direct SBCs."
  },
  {
    id: "audio",
    title: "Audio Intelligence",
    description:
      "VAD, echo cancellation, and multi-lingual speech recognition.",
    detail: "Adaptive models: Deepgram Nova-2, Whisper v3."
  },
  {
    id: "orchestration",
    title: "LLM Orchestration",
    description:
      "Intent routing, memory, safety guardrails, and business policy enforcement.",
    detail: "Primary: GPT-4o; fallback: Claude 3.5 Sonnet."
  },
  {
    id: "business",
    title: "Business Services",
    description:
      "Calendars, EHR, CRM, POS, and payment services layered per tenant.",
    detail: "Connected via integration adapters."
  },
  {
    id: "response",
    title: "Generative Response",
    description:
      "Response synthesis, tone modulation, and multi-lingual TTS streaming.",
    detail: "ElevenLabs neural pipeline with low-latency caching."
  },
  {
    id: "observability",
    title: "Observability",
    description: "Full traceability, analytics, and compliance logging.",
    detail: "Correlated with call recordings and transcripts."
  }
];

export function PipelineDiagram() {
  return (
    <div className="relative grid gap-4 lg:grid-cols-3">
      {nodes.map((node, index) => (
        <div
          key={node.id}
          className="relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-card"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
            {index + 1}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            {node.title}
          </h3>
          <p className="mt-3 text-sm text-slate-600">{node.description}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-primary-500">
            {node.detail}
          </p>
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="grid h-full grid-cols-3 gap-4">
          {nodes.slice(0, 3).map((_, columnIndex) => (
            <div
              key={`col-${columnIndex}`}
              className="relative flex items-center justify-center"
            >
              {columnIndex < 2 ? (
                <div className="h-1 w-10/12 rounded-full bg-gradient-to-r from-primary-200 to-primary-500" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
