import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "light";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: () => void;
}

interface ButtonSubmitProps extends ButtonBaseProps {
  href?: never;
  type?: "submit" | "button";
  onClick?: () => void;
}

type ButtonProps = ButtonLinkProps | ButtonSubmitProps;

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 sm:px-8 sm:py-3.5 sm:text-base focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20",
  secondary:
    "border border-text/20 bg-transparent text-text hover:border-accent hover:text-accent",
  ghost:
    "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  outline:
    "border border-primary/40 text-primary hover:border-accent hover:text-accent",
  light: "bg-white text-background hover:bg-white/90 shadow-lg shadow-black/25",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
