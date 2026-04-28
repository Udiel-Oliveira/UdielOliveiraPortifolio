"use client";
import badges from "@/data/badges.json";
import Image from "next/image";

type BadgeVariants = "primary" | "secondary";
type BadgeProps = {
  id: keyof typeof badges;
  variant?: BadgeVariants;
};

export default function Badge({ id, variant = "primary" }: BadgeProps) {
  const badge = badges[id];
  if (!badge) {
    return null; // ou um fallback, se preferir
  }

  const variants: Record<BadgeVariants, string> = {
    primary: "bg-[var(--color-white)] text-[var(--color-dark)]",
    secondary: "bg-[var(--color-dark)] text-[var(--color-white)]",
  };

  return (
    <span
      className={` ${variants[variant]} inline-flex items-center justify-center px-4 py-4 gap-2 rounded-full font-medium transition-colors uppercase text-x`}
    >
      <Image
        width={20}
        height={20}
        src={`assets/tech-Icons/${badge.icon}`}
        alt={badge.name}

      />

      <h2 >{badge.name}</h2>
    </span>
  );
}
