import Styles from "./ProjectCard.module.css";
import badges from "@/data/badges.json"; // JSON com as informações dos badges
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button/Button";
import projectData from "@/data/projects.json"; // JSON com as informações do projeto
import { ArrowUpRight, GithubFill } from "akar-icons";

export default function ProjectCard() {
  return (
    <div id="projects" className={Styles.section}>
    {projectData.projects.map((project) => (
      <div key={project.id} className={Styles.projectCard}>
        <div className={Styles.grid}>
          <div className={Styles.video}>
            <iframe
                src={project.video.replace("watch?v=", "embed/")}
                title={project.title}
                className={Styles.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
          <div className={Styles.images}>
            {project.Imagens.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
            ))}
          </div>

        {/* Coluna direita: informações */}
        </div>
        <div className={Styles.projectInfo}>
          <div className={Styles.projectHeader}>
            <div className={Styles.projectTitle}>
              <span className={Styles.projectCategory}>{project.category}</span>
              <h1 className={Styles.projectName}>{project.title}</h1>
            </div>
            <div className={Styles.projectIcon}>
              <img src={project.iconProject} alt="Project Icone" />
            </div>
          </div>

          <p className={Styles.projectDescription}>
            {project.description}
          </p>
          <div className={Styles.projectTech}>
            <h3>Tecnologias</h3>
            <div className={Styles.badges}>
                {project.tecnologias.map((techId) => {
                    return <Badge key={techId} id={techId}/>;
                })}
            </div>
          </div>

          <div className={Styles.projectLinks}>
            <Button icon={<ArrowUpRight />} href={project.link} target="_blank" rel="noopener noreferrer" variant="primary">
              ver no git hub
            </Button>
            <Button
              icon={<GithubFill />}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Código Fonte
            </Button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
