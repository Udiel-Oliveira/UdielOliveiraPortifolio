"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Styles from "./Description.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Description() {
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
  }, []);

  return (
    <p className={Styles.quote} id="quote">
      Desenvolvedor em formação com foco em front-end, em constante evolução
      técnica. Tenho conhecimentos em HTML&CSS, JavaScript, React, Next.js e
      Node.js. Atualmente estou cursando Análise e Desenvolvimento de Sistemas
      na Universidade Cruzeiro do Sul e busco estágio para aplicar meus
      conhecimentos em projetos reais e crescer na área.
    </p>
  );
}
