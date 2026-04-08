import Styles from "./ProjectCard.module.css";
import badges from "@/data/badges.json";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button/Button";
import projectData from "@/data/projects.json";
import { ArrowUpRight, Cross, FaceSad, GithubFill } from "akar-icons";
import { useState } from "react";
import Image from "next/image";

export default function ProjectCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const getVideoSrc = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return url.replace('watch?v=', 'embed/');
    }
    return url;
  };

  const renderVideo = (project: any) => {
    if (project.video.startsWith('/')) {
      return (
        <video
          src={project.video}
          title={project.title}
          className={Styles.iframe}
          controls
        ></video>
      );
    } else {
      return (
        <iframe
          src={getVideoSrc(project.video)}
          title={project.title}
          className={Styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
  };

  return (
    <div className={Styles.section}>
      {projectData.projects.map((project) => (
        <div key={project.id} className={Styles.projectCard}>
          <div className={Styles.grid}>
            <div className={Styles.video}>
              {renderVideo(project)}
            </div>

            <div className={Styles.images}>
              {project.Imagens.map((image, index) => {
                const [error, setError] = useState(false);

                return (
                  <div key={index} className={Styles.imgContainer}>
                    {!error ? (
                      <Image
                        width={1000}
                        height={1000}
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedImage(image);
                          setIsModalOpen(true);
                        }}
                        onError={() => setError(true)}
                      />
                    ) : (
                      <div className={Styles.fallback}>
                        <FaceSad/>
                        <span>Imagem  Indisponível</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna direita: informações */}
          <div className={Styles.projectInfo}>
            <div className={Styles.projectHeader}>
              <div className={Styles.projectTitle}>
                <span className={Styles.projectCategory}>
                  {project.category}
                </span>
                <h2 className={Styles.projectName}>{project.title}</h2>
              </div>
              <div className={Styles.projectIcon}>
                <Image
                  width={50}
                  height={50}
                  src={project.iconProject}
                  alt="Project Icone"
                />
              </div>
            </div>

            <p className={Styles.projectDescription}>{project.description}</p>
            <div className={Styles.projectTech}>
              <h3>Tecnologias</h3>
              <div className={Styles.badges}>
                {project.tecnologias.map((techId) => (
                  <Badge key={techId} id={techId as keyof typeof badges} />
                ))}
              </div>
            </div>

            <div className={Styles.projectLinks}>
              <Button
                icon={<ArrowUpRight />}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Visitar Projeto
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

      {isModalOpen && (
        <div className={Styles.overlay} onClick={() => setIsModalOpen(false)}>
          <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>
            <Image
              width={1500}
              height={1500}
              src={selectedImage}
              alt="Full screen"
              className={Styles.fullImage}
            />
            <Button
              className={Styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              icon={<Cross />}
              variant="primary"
            />
          </div>
        </div>
      )}
    </div>
  );
}
