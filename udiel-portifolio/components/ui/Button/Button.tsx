import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children?: ReactNode;
  href: string;
  download?: boolean;
  icon?: ReactNode;
  variant?: ButtonVariant;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({
  children,
  href,
  download = false,
  icon,
  variant = "primary",
  target,
  rel,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-evenly px-4 gap-2 py-4 rounded-full font-medium transition-colors";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-white)] text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-[var(--color-white)]",
    secondary:
      "bg-[var(--color-dark)] text-white hover:bg-[var(--color-white)] hover:text-[var(--color-dark)]",
    outline:
      "border border-[var(--color-dark)] text-[var(--color-dark)] hover:bg-[var(--color-offwhite)]",
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]} ${className ?? ""}`.trim()}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </a>
  );
}
