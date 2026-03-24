import Button from "@/components/ui/Button/Button";
import Style from "./HeroSec.module.css";
import { Download, Phone } from "akar-icons";

export default function Hero() {
  return (
    <section id="hero" className={Style.hero}>
      <h2>👋Olá, meu nome é Udiel! E eu sou um...</h2>
      <h1>
        Desenvolvedor
        <br /> Front End
      </h1>
      <div className={Style.buttonContainer}>
        <Button
          href="https://www.linkedin.com/in/udiel-oliveira"
          icon={<Phone />}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em contato
        </Button>
        <Button href="#about" icon={<Download />} variant="secondary">
          Baixar CV
        </Button>
      </div>
    </section>
  );
}
