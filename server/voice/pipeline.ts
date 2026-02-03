import type { TenantConfig } from "@/lib/types";

export interface VoicePipelineInput {
  tenant: TenantConfig;
  language: string;
  transcript: string[];
  metadata?: Record<string, unknown>;
}

export interface VoicePipelineOutput {
  response: string;
  escalate: boolean;
  confidence: number;
  actions: Array<{
    type: "schedule" | "payment" | "notify" | "transfer" | "custom";
    payload: Record<string, unknown>;
  }>;
}

export class VoicePipeline {
  constructor(private readonly providerName = "gpt-4o") {}

  get provider() {
    return this.providerName;
  }

  async run(input: VoicePipelineInput): Promise<VoicePipelineOutput> {
    const baseResponse =
      "Thanks for calling. Let me look into that for you right now.";
    // In a production pipeline this method would orchestrate STT, NLU, LLM,
    // and TTS subsystems. For this blueprint, return a deterministic payload.
    return {
      response: `${baseResponse} (tenant=${input.tenant.tenantId}, lang=${input.language})`,
      escalate: false,
      confidence: 0.91,
      actions: [
        {
          type: "notify",
          payload: {
            channels: input.tenant.notifications
              .filter((entry) => entry.enabled)
              .map((entry) => entry.channel),
            message: "Automation executed successfully."
          }
        }
      ]
    };
  }
}
