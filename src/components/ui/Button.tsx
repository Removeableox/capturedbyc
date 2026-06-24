import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "light";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-gradient-primary-accent hover:opacity-90 shadow-lg shadow-primary/30",
  secondary:
    "bg-secondary/15 text-text border border-secondary/35 hover:bg-secondary/25",
  ghost:
    "bg-white/10 text-white backdrop-blur-sm border border-white/25 hover:bg-white/20",
  outline:
    "border border-primary/40 text-primary hover:border-primary hover:bg-primary/5",
  light:
    "bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/25",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 sm:px-8 sm:py-3.5 sm:text-base ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
