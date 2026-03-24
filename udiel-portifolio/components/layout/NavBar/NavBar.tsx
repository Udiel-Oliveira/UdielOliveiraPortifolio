"use client";
import Button from "@/components/ui/Button/Button";
import Styles from "./navBar.module.css";
import { useEffect, useState, useRef } from "react";
import {
  Coffee,
  File,
  GithubFill,
  Home,
  LinkedinBoxFill,
  Trophy,
} from "akar-icons";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute("id");
          if (!sectionId) return;

          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHidden(true); // rolando para baixo → esconde
      } else {
        setHidden(false); // rolando para cima → mostra
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navButtonClass = (id: string) =>
    id === activeSection ? "text-green-500" : "bg-[var(--color-dark)]";

  return (
    <nav
      className={`${Styles.navBar} transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={Styles.brand}>
        <Button href="#hero" icon={<GithubFill />} variant="secondary" />
        <Button
          href="https://www.linkedin.com/in/udiel-oliveira"
          icon={<LinkedinBoxFill />}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        />
      </div>

      <div className={Styles.navLinks}>
        <Button href="#hero" icon={<Home />} className={navButtonClass("hero")}>Inicio</Button>
        <Button href="#about" icon={<File />} className={navButtonClass("about")}>Sobre</Button>
        <Button href="#certifications" icon={<Trophy />} className={navButtonClass("certifications")}>
          Certifications
        </Button>
        <Button href="#projects" icon={<Coffee />} className={navButtonClass("projects")}>Projects</Button>
      </div>

      <div className={Styles.languageSwitcher}>
        <Button href="#" variant="outline">EN</Button>
        <img src="/assets/UDIEL[LOGO].svg" alt="" />
      </div>
    </nav>
  );
}
