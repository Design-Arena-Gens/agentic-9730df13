import { tenants } from "@/lib/demo-data";
import type { BusinessIntegration } from "@/lib/types";

export class IntegrationRegistry {
  private constructor(private readonly integrations: Record<string, BusinessIntegration[]>) {}

  static bootstrap() {
    const map = Object.fromEntries(
      tenants.map((tenant) => [tenant.tenantId, tenant.integrations])
    );
    return new IntegrationRegistry(map);
  }

  resolveForTenant(tenantId: string): BusinessIntegration[] {
    return this.integrations[tenantId] ?? [];
  }

  healthSummary() {
    return Object.entries(this.integrations).map(([tenantId, services]) => ({
      tenantId,
      healthy: services.filter((service) => service.status === "connected").length,
      degraded: services.filter((service) => service.status === "pending").length,
      failed: services.filter((service) => service.status === "error").length
    }));
  }
}
