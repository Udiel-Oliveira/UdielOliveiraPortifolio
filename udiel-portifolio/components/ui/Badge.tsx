'use client';
import badges from "@/data/badges.json";

type BadgeVariants = "primary" | "secondary";
type BadgeProps={
    id: keyof typeof badges;
    variant?: BadgeVariants;
}

export default function Badge({ id, variant = "primary" }: BadgeProps) {
  const badge = badges[id];
  if (!badge) {
    return null; // ou um fallback, se preferir
  }

  const variants: Record<BadgeVariants, string> = {
    primary:
    "bg-[var(--color-dark)] text-white",
    secondary:
    "bg-[var(--color-white)] text-[var(--color-dark)]",
  };


  return (
    <span className={`inline-flex px-4 gap-2 py-2 ${variants[variant]} items-center rounded-full text-x font-bold uppercase`}>
      <img src={`assets/tech-Icons/${badge.icon}`} alt={badge.name}  className="w-5"/>
      {badge.name}
    </span>
  );
}