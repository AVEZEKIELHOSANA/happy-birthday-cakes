interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, className }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="mb-2.5 text-xs font-bold tracking-[0.14em] text-wine uppercase font-body">
        {eyebrow}
      </div>
      <h2 className="text-2xl text-ink">{title}</h2>
    </div>
  );
}