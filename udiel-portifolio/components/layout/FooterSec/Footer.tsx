"use client";
import Button from "@/components/ui/Button/Button";
import Styles from "./Footer.module.css";
import { Mention, WhatsappFill } from "akar-icons";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = ("mailto:udiel.inacio@outlook.com?subject=Oportunidade%20de%20projeto&body=Olá%20Udiel,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.");
  const whatsapp = ("https://api.whatsapp.com/send?phone=5511968964690&text=Ol%C3%A1,%20Udiel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20trabalho"); 

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('udiel.inacio@outlook.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar email:', err);
    }
  };

  useEffect(() => {
    const quotes = document.getElementById("quotes");
    if (!quotes) return;

    // Split do texto em linhas/palavras
    const split = new SplitText(quotes, {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
    });

    // Animação disparada pelo scroll
    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: quotes,
        start: "top 100%", 
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
      split.revert(); // limpa o DOM ao desmontar
    };
  }, []);
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <img
          src="/assets/udiellogo.svg"
          alt="uma logo com as seguintes letras: Udiel"
        />
        <h1 id="quotes">
          Vamos Construir Algo
          <br />
          Incrivel Juntos
        </h1>
        <div className={Styles.contactInfo}>
          <Button href={email} icon={<Mention />}>
            Email
          </Button>
          <Button href={whatsapp} icon={<WhatsappFill />} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Button>
        </div>
        &copy; {new Date().getFullYear()} Udiel Oliveira. Todos os direitos reservados.
      </div>
    </footer>
  );
}