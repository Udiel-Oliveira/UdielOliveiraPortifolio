"use client";
import Button from "@/components/ui/Button/Button";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import Styles from "./navBar.module.css";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Coffee,
  Cross,
  File,
  GithubFill,
  Home,
  LinkedinBoxFill,
  ThreeLineHorizontal,
  Trophy,
} from "akar-icons";

export default function NavBar() {
  const { t } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobileMenuOpenRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsNavOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    isMobileMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.style.overflow = "hidden";

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

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
      if (isMobileMenuOpenRef.current) return;
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
      ref={navRef}
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
        className={`${Styles.navLinks} ${isNavOpen ? Styles.open : ""} ${isMobileMenuOpen ? Styles.mobileOpen : ""}`}
      >
        <div
          className={Styles.mobileNavItems}
          onClick={() => setIsMobileMenuOpen(false)}
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
        <div className={Styles.mobileBottomRow}>
          <LanguageSwitcher variant="inline" />
          <Logo className="text-[var(--color-dark)]" />
        </div>
      </div>

      <div className={Styles.rightGroup}>
        <LanguageSwitcher />
        <Logo />
      </div>

      <Button
        className={Styles.hamburgerButton}
        variant="primary"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        ariaExpanded={isMobileMenuOpen}
        ariaLabel={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        icon={isMobileMenuOpen ? <Cross /> : <ThreeLineHorizontal />}
      />
      
    </nav>
  );
}
