import type { AgentAnalytics } from "@/lib/types";
import { formatPercent, formatSeconds } from "@/lib/utils";

interface MetricsGridProps {
  analytics: AgentAnalytics[];
}

export function MetricsGrid({ analytics }: MetricsGridProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {analytics.map((tenant) => (
        <div
          key={tenant.tenantId}
          className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card"
        >
          <h3 className="text-sm font-semibold text-slate-500">
            {tenant.tenantId}
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <dt>CSAT</dt>
              <dd className="font-semibold text-slate-900">
                {tenant.csatScore.toFixed(1)} / 5
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Containment</dt>
              <dd className="font-semibold text-slate-900">
                {formatPercent(tenant.containmentRate, 0)}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Avg Handle</dt>
              <dd className="font-semibold text-slate-900">
                {formatSeconds(tenant.avgHandleSeconds)}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Booking Conv.</dt>
              <dd className="font-semibold text-slate-900">
                {formatPercent(tenant.bookingConversion, 0)}
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </section>
  );
}
