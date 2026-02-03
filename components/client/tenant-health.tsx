"use client";

import { useQuery } from "@tanstack/react-query";

interface IntegrationHealth {
  tenantId: string;
  healthy: number;
  degraded: number;
  failed: number;
}

export function TenantHealth() {
  const { data, isLoading, isError, refetch } = useQuery<{
    status: string;
    integrations: IntegrationHealth[];
  }>({
    queryKey: ["tenant-health"],
    queryFn: async () => {
      const response = await fetch("/api/health");
      if (!response.ok) {
        throw new Error("Failed to load health data");
      }
      return response.json();
    },
    refetchInterval: 15000
  });

  if (isLoading) {
    return (
      <div className="h-48 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-card">
        <p className="text-sm text-slate-500">Loading integration health…</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="h-48 rounded-2xl border border-rose-200 bg-rose-50/80 p-6 shadow-card">
        <p className="text-sm font-semibold text-rose-900">
          Unable to fetch integration health status.
        </p>
        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Integration Health
        </h3>
        <span className="text-xs font-semibold text-slate-400">
          Auto-refresh 15s
        </span>
      </div>
      <div className="mt-4 grid gap-4 text-sm">
        {data.integrations.map((integration) => (
          <div
            key={integration.tenantId}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
          >
            <span className="font-semibold text-slate-700">
              {integration.tenantId}
            </span>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">
                Healthy {integration.healthy}
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">
                Degraded {integration.degraded}
              </span>
              <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-700">
                Failed {integration.failed}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
