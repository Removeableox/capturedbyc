interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  fullBleed = false,
}: SectionProps) {
  if (fullBleed) {
    return (
      <section id={id} className={`section-padding ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`section-padding px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
