"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Button from "@/components/ui/Button/Button";
import Style from "./HeroSec.module.css";
import { Download, Phone } from "akar-icons";

gsap.registerPlugin(SplitText);

export default function Hero() {
  useEffect(() => {
    document.fonts.ready.then(() => {
      const h2 = document.querySelector("h2.animate-me");
      const h1 = document.querySelector("h1.animate-me");

      if (h2) {
        const splitH2 = new SplitText(h2, { type: "words", aria: "hidden" });
        gsap.from(splitH2.words, {
          opacity: 0,
          duration: 1.5,
          ease: "sine.out",
          stagger: 0.01,
          y: 40,
        });
      }

      if (h1) {
        const splitH1 = new SplitText(h1, { type: "words", aria: "hidden" });
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
  }, []);

  return (
    <section id="hero" className={Style.hero}>
      <h2 className="animate-me">👋Olá, meu nome é Udiel! E eu sou um...</h2>
      <h1 className="animate-me">
        Desenvolvedor
        <br /> Front End
      </h1>
      <div className={Style.buttonContainer}>
        <Button href="#footer" icon={<Phone />} variant="primary">
          Entre em contato
        </Button>
        <Button
          href="Download/Curriculo_Udiel_Oliveira.pdf"
          download="Download/Curriculo_Udiel_Oliveira.pdf"
          icon={<Download />}
          variant="secondary"
        >
          Baixar CV
        </Button>
      </div>
    </section>
  );
}
