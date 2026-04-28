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
  const email =
    "mailto:udiel.inacio@outlook.com?subject=Oportunidade%20de%20projeto&body=Olá%20Udiel,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.";
  const whatsapp =
    "https://api.whatsapp.com/send?phone=5511968964690&text=Ol%C3%A1,%20Udiel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20trabalho";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("udiel.inacio@outlook.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar email:", err);
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
    <footer className={Styles.footer} id="footer">
      <div className={Styles.footerContainer}>
        <svg
          width="125"
          height="35"
          viewBox="0 0 125 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="2"
                dy="2"
                stdDeviation="2"
                floodColor="black"
                floodOpacity="0.4"
              />
            </filter>
          </defs>

          <g filter="url(#shadow)" fill="currentColor">
            <path d="M0 0H26.6902V15.646H0V0Z" />
            <path d="M0 19.3274H26.6902V20.7079C26.6902 28.0782 20.7154 34.053 13.3451 34.053C5.97481 34.053 0 28.0782 0 20.7079V19.3274Z" />
            <path d="M30.3716 15.646L30.3716 7.62939e-06L41.4158 7.14664e-06C50.0569 6.76892e-06 57.0618 7.00495 57.0618 15.646L30.3716 15.646Z" />
            <path d="M30.3716 34.053L30.3716 19.3273L57.0618 19.3273C57.0618 27.4601 50.4689 34.053 42.3362 34.053L30.3716 34.053Z" />
            <rect
              x="60.7432"
              y="15.646"
              width="15.646"
              height="12.8849"
              transform="rotate(-90 60.7432 15.646)"
            />
            <rect
              x="60.7432"
              y="34.053"
              width="14.7256"
              height="12.8849"
              transform="rotate(-90 60.7432 34.053)"
            />
            <rect
              x="105.897"
              y="21.1794"
              width="21.1793"
              height="12.8737"
              transform="rotate(-90 105.897 21.1794)"
            />
            <rect
              x="105.897"
              y="34.0532"
              width="9.55146"
              height="19.1029"
              transform="rotate(-90 105.897 34.0532)"
            />
            <rect x="77.3096" width="24.8495" height="10.1239" />
            <rect x="77.3096" y="13.8054" width="18.407" height="7.36282" />
            <rect x="77.3096" y="24.8494" width="24.8495" height="9.20352" />
          </g>
        </svg>
        <h1 id="quotes">
          Vamos Construir Algo
          <br />
          Incrivel Juntos
        </h1>
        <div className={Styles.contactInfo}>
          <Button href={email} icon={<Mention />}>
            Email
          </Button>
          <Button
            href={whatsapp}
            icon={<WhatsappFill />}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Button>
        </div>
        &copy; {new Date().getFullYear()} Udiel Oliveira. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
