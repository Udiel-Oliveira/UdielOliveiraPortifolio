"use client";
import Button from "@/components/ui/Button/Button";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/translations";
import Styles from "./LanguageSwitcher.module.css";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "/assets/flags/br.svg" },
  { code: "en", label: "English", flag: "/assets/flags/us.svg" },
  { code: "es", label: "Español", flag: "/assets/flags/es.svg" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={Styles.languageSwitcher}>
      {LANGUAGES.map(({ code, label, flag }) => (
        <Button
          key={code}
          variant={locale === code ? "primary" : "secondary"}
          onClick={() => setLocale(code)}
          ariaLabel={label}
          icon={<img src={flag} alt="" className={Styles.flag} />}
        />
      ))}
    </div>
  );
}
