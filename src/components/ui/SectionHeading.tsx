interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  inverted = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 ${alignClass}`}>
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          inverted ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            inverted ? "text-white/75" : "text-secondary-tier"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
