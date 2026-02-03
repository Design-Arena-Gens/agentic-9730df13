interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-3">
      <p className="text-sm uppercase tracking-[0.2em] text-primary-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      {description ? (
        <p className="text-base text-slate-600">{description}</p>
      ) : null}
    </header>
  );
}
