"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Button from "@/components/ui/Button/Button";
import Style from "./HeroSec.module.css";
import { Download, Phone } from "akar-icons";
import { useLanguage } from "@/lib/i18n";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const { t, locale } = useLanguage();

  useEffect(() => {
    let splitH1: SplitText | undefined;
    let splitH2: SplitText | undefined;

    document.fonts.ready.then(() => {
      const h2 = document.querySelector("h2.animate-me");
      const h1 = document.querySelector("h1.animate-me");

      if (h2) {
        splitH2 = new SplitText(h2, { type: "words", aria: "hidden" });
        gsap.from(splitH2.words, {
          opacity: 0,
          duration: 1.5,
          ease: "sine.out",
          stagger: 0.01,
          y: 40,
        });
      }

      if (h1) {
        splitH1 = new SplitText(h1, { type: "words", aria: "hidden" });
        gsap.from(splitH1.words, {
          opacity: 0,
          duration: 1.8,
          ease: "sine.out",
          stagger: 0.1,
          y: 50,
          delay: 0.5,
        });
      }
    });

    return () => {
      splitH1?.revert();
      splitH2?.revert();
    };
  }, [locale]);

  return (
    <section id="hero" className={Style.hero}>
      <h2 key={`greeting-${locale}`} className="animate-me">{t.hero.greeting}</h2>
      <h1 key={`title-${locale}`} className="animate-me">{t.hero.title}</h1>
      <div className={Style.buttonContainer}>
        <Button href="#footer" icon={<Phone />} variant="primary">
          {t.hero.contactButton}
        </Button>
        <Button
          href="/Download/Curriculo_UdielOliveira.pdf"
          download="Curriculo_UdielOliveira.pdf"
          icon={<Download />}
          variant="secondary"
        >
          {t.hero.downloadCvButton}
        </Button>
      </div>
    </section>
  );
}
