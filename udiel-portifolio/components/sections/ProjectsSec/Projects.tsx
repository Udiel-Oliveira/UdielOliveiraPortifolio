"use client";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import Styles from "./Projects.module.css";
import { Trophy } from "akar-icons";
import Button from "@/components/ui/Button/Button";

export default function Projects() {
  return (
    <section id="Projects" className={Styles.section}>
      <Button icon={<Trophy />} variant="title">
        Projetos
      </Button>
      <ProjectCard />
    </section>
  );
}
