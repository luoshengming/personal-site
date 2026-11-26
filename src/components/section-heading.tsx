type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        <span className="text-brand">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
