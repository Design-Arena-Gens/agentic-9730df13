import type { TenantConfig } from "@/lib/types";
import { VoicePipeline } from "../voice/pipeline";
import { IntegrationRegistry } from "../services/integration-registry";

export interface AgentControllerParams {
  tenant: TenantConfig;
  language: string;
  utterances: string[];
  intentHint?: string;
}

export interface AgentControllerResult {
  transcript: string[];
  automationSummary: string;
  escalated: boolean;
  outboundNotifications: Array<{ channel: string; templateId?: string }>;
}

export class AgentController {
  private readonly pipeline = new VoicePipeline();
  private readonly registry = IntegrationRegistry.bootstrap();

  async execute(params: AgentControllerParams): Promise<AgentControllerResult> {
    const { tenant, language, utterances } = params;
    const result = await this.pipeline.run({
      tenant,
      language,
      transcript: utterances
    });

    const integrations = this.registry.resolveForTenant(tenant.tenantId);
    const notifications = tenant.notifications
      .filter((entry) => entry.enabled)
      .map((entry) => ({
        channel: entry.channel,
        templateId: entry.templateId
      }));

    return {
      transcript: [...utterances, result.response],
      automationSummary: [
        `LLM Provider: ${this.pipeline.provider}`,
        `Integrated Services: ${integrations.map((i) => i.displayName).join(", ")}`,
        `Triggered Actions: ${result.actions.map((action) => action.type).join(", ")}`
      ].join(" | "),
      escalated: result.escalate,
      outboundNotifications: notifications
    };
  }
}
