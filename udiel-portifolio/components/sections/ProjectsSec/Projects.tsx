"use client";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import Styles from "./Projects.module.css";
import { Coffee } from "akar-icons";
import Button from "@/components/ui/Button/Button";

export default function Projects() {
  return (
    <section id="projects" className={Styles.section}>
      <Button icon={<Coffee />} variant="title">
        Projetos
      </Button>
      <ProjectCard />
    </section>
  );
}
