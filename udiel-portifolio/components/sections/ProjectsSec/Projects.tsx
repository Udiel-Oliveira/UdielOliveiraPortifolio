"use client";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import Styles from "./Projects.module.css";
import { Coffee } from "akar-icons";
import Button from "@/components/ui/Button/Button";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={Styles.section}>
      <Button icon={<Coffee />} variant="title">
        {t.projects.title}
      </Button>
      <ProjectCard />
    </section>
  );
}
