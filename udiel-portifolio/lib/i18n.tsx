"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Locale, Dictionary, LocalizedText } from "./translations";

const STORAGE_KEY = "udiel-portfolio-locale";

const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en" || stored === "es") {
        setLocaleState(stored);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return ctx;
}

export function pickLocale(field: LocalizedText, locale: Locale): string {
  return field[locale] ?? field.pt;
}
