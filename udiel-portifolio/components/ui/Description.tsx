"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Styles from "./Description.module.css";
import { useLanguage } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Description() {
  const { t, locale } = useLanguage();

  useEffect(() => {
    const quote = document.getElementById("quote");
    if (!quote) return;

    // Split do texto em linhas/palavras
    const split = new SplitText(quote, {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
    });

    // Animação disparada pelo scroll
    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: quote,
        start: "top 80%", 
        toggleActions: "restart pause resume reset",
        markers: false, 
      },
      duration: 0.6,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });

    return () => {
      split.revert();
    };
  }, [locale]);

  return (
    <p key={locale} className={Styles.quote} id="quote">
      {t.about.description}
    </p>
  );
}
