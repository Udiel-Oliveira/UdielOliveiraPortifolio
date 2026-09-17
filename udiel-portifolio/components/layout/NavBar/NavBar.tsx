"use client";
import Button from "@/components/ui/Button/Button";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import Styles from "./navBar.module.css";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Coffee,
  File,
  GithubFill,
  Home,
  LinkedinBoxFill,
  Trophy,
} from "akar-icons";

export default function NavBar() {
  const { t } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsNavOpen(true));
    return () => cancelAnimationFrame(frame);
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
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
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
    id === activeSection ? "primary" : "secondary";

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
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Abrir perfil no GitHub"
        />
        <Button
          href="https://www.linkedin.com/in/udiel-oliveira"
          icon={<LinkedinBoxFill />}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          ariaLabel="Abrir perfil no LinkedIn"
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
          {t.nav.home}
        </Button>
        <Button
          href="#about"
          icon={<File />}
          variant={navButtonVariant("about")}
          className={navButtonClass("about")}
        >
          {t.nav.about}
        </Button>
        <Button
          href="#certifications"
          icon={<Trophy />}
          variant={navButtonVariant("certifications")}
          className={navButtonClass("certifications")}
        >
          {t.nav.certifications}
        </Button>
        <Button
          href="#projects"
          icon={<Coffee />}
          variant={navButtonVariant("projects")}
          className={navButtonClass("projects")}
        >
          {t.nav.projects}
        </Button>
      </div>

      <div className={Styles.rightGroup}>
        <LanguageSwitcher />
        <Logo />
      </div>
    </nav>
  );
}
