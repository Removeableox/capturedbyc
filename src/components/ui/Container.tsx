interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** @deprecated Prefer Section for new work */
export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`section-padding px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
