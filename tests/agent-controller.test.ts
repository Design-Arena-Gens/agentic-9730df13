import { describe, it, expect } from "vitest";
import { tenants } from "@/lib/demo-data";
import { AgentController } from "@/server/orchestration/agent-controller";

describe("AgentController", () => {
  it("returns notifications for enabled channels", async () => {
    const tenant = tenants[0];
    const controller = new AgentController();

    const result = await controller.execute({
      tenant,
      language: tenant.localeSupport[0],
      utterances: ["I need to book an appointment"]
    });

    expect(result.outboundNotifications.length).toBeGreaterThan(0);
    expect(result.automationSummary).toContain("LLM Provider");
  });

  it("appends pipeline response to transcript", async () => {
    const tenant = tenants[1];
    const controller = new AgentController();
    const utterances = ["I want to place a catering order"];

    const result = await controller.execute({
      tenant,
      language: "en-US",
      utterances
    });

    expect(result.transcript).toHaveLength(utterances.length + 1);
    expect(result.escalated).toBe(false);
  });
});
