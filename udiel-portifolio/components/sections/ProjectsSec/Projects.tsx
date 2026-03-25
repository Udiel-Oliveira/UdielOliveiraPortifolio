"use client";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import Styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={Styles.section}>
        <ProjectCard/>
    </section>
  );
}
