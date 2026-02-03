import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-slate-600">{description}</p>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 opacity-0 transition group-hover:opacity-100" />
    </article>
  );
}
