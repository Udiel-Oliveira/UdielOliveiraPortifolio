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
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(true);
  }, []);

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
        setHidden(true); 
      } else {
        setHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navButtonVariant = (id: string) =>
    id === activeSection ? "secondary" : "primary";

  const navButtonClass = (id: string) =>
    id === activeSection
      ? "text-[var(--color-white)]"
      : "text-[var(--color-dark)]";

  return (
    <nav
      className={`${Styles.navBar} transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={Styles.brand}>
        <Button
          href="https://github.com/Udiel-Oliveira"
          icon={<GithubFill />}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Button
          href="https://www.linkedin.com/in/udiel-oliveira"
          icon={<LinkedinBoxFill />}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        />
      </div>

      <div
        className={`${Styles.navLinks} ${isNavOpen ? Styles.open : ""} ${isNavOpen ? Styles.animate : ""}`}
      >
        <Button
          href="#hero"
          icon={<Home />}
          variant={navButtonVariant("hero")}
          className={navButtonClass("hero")}
        >
          Inicio
        </Button>
        <Button
          href="#about"
          icon={<File />}
          variant={navButtonVariant("about")}
          className={navButtonClass("about")}
        >
          Sobre
        </Button>
        <Button
          href="#certifications"
          icon={<Trophy />}
          variant={navButtonVariant("certifications")}
          className={navButtonClass("certifications")}
        >
          Certificações
        </Button>
        <Button
          href="#Projects"
          icon={<Coffee />}
          variant={navButtonVariant("projects")}
          className={navButtonClass("projects")}
        >
          Projetos
        </Button>
      </div>

      <div className={Styles.languageSwitcher}>
        <svg
          width="125"
          height="35"
          viewBox="0 0 125 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H26.6902V15.646H0V0Z" fill="currentColor" />
          <path
            d="M0 19.3274H26.6902V20.7079C26.6902 28.0782 20.7154 34.053 13.3451 34.053C5.97481 34.053 0 28.0782 0 20.7079V19.3274Z"
            fill="currentColor"
          />
          <path
            d="M30.3716 15.646L30.3716 7.62939e-06L41.4158 7.14664e-06C50.0569 6.76892e-06 57.0618 7.00495 57.0618 15.646L30.3716 15.646Z"
            fill="currentColor"
          />
          <path
            d="M30.3716 34.053L30.3716 19.3273L57.0618 19.3273C57.0618 27.4601 50.4689 34.053 42.3362 34.053L30.3716 34.053Z"
            fill="currentColor"
          />
          <rect
            x="60.7432"
            y="15.646"
            width="15.646"
            height="12.8849"
            transform="rotate(-90 60.7432 15.646)"
            fill="currentColor"
          />
          <rect
            x="60.7432"
            y="34.053"
            width="14.7256"
            height="12.8849"
            transform="rotate(-90 60.7432 34.053)"
            fill="currentColor"
          />
          <rect
            x="105.897"
            y="21.1794"
            width="21.1793"
            height="12.8737"
            transform="rotate(-90 105.897 21.1794)"
            fill="currentColor"
          />
          <rect
            x="105.897"
            y="34.0532"
            width="9.55146"
            height="19.1029"
            transform="rotate(-90 105.897 34.0532)"
            fill="currentColor"
          />
          <rect
            x="77.3096"
            width="24.8495"
            height="10.1239"
            fill="currentColor"
          />
          <rect
            x="77.3096"
            y="13.8054"
            width="18.407"
            height="7.36282"
            fill="currentColor"
          />
          <rect
            x="77.3096"
            y="24.8494"
            width="24.8495"
            height="9.20352"
            fill="currentColor"
          />
        </svg>
      </div>
    </nav>
  );
}
