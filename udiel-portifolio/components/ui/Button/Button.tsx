import { ReactNode } from "react";
import Styles from "./Button.module.css";

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
  onClick?: () => void;
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
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-evenly px-4 gap-2 py-4 rounded-full font-medium transition-colors uppercase text-x";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-white)] text-[var(--color-dark)] hover:bg-[var(--color-gray-light)] hover:text-[var(--color-dark)]",
    secondary:
      "bg-[var(--color-dark)] text-white hover:bg-[var(--color-gray-light)] hover:text-[var(--color-dark)]",
    outline:
      "border border-[var(--color-dark)] text-[var(--color-dark)] hover:bg-[var(--color-gray-light)]",
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
      className={`${Styles.base} ${baseStyles} ${variants[variant]} ${className ?? ""}`.trim()}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </a>
  );
}
