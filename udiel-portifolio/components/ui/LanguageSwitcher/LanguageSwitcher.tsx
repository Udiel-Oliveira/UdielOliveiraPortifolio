"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button/Button";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/translations";
import { ChevronDown } from "akar-icons";
import Styles from "./LanguageSwitcher.module.css";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "/assets/flags/br.png" },
  { code: "en", label: "English", flag: "/assets/flags/us.svg" },
  { code: "es", label: "Español", flag: "/assets/flags/es.svg" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={Styles.languageSwitcher} ref={containerRef}>
      <Button
        variant="secondary"
        ariaLabel={`Idioma: ${current.label}. Selecionar idioma`}
        ariaExpanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        icon={
          <span className={Styles.trigger}>
            <img src={current.flag} alt="" className={Styles.flag} />
          </span>
        }
      />
      {isOpen && (
        <div className={Styles.dropdown} role="menu">
          {LANGUAGES.map(({ code, label, flag }) => (
            <Button
              key={code}
              variant={code === locale ? "primary" : "secondary"}
              ariaLabel={label}
              onClick={() => {
                setLocale(code);
                setIsOpen(false);
              }}
              icon={<img src={flag} alt="" className={Styles.flag} />}
            />
          ))}
        </div>
      )}
    </div>
  );
}
