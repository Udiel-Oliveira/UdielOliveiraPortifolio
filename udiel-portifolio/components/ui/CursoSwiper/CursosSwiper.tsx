"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Styles from "./CursosSwiper.module.css";
import Button from "../Button/Button";
import {
  ArrowUpRight,
  Calendar,
  Cross,
  Diamond,
  Enlarge,
  Info,
} from "akar-icons";

// Importa o JSON
import cursosObj from "@/data/courses.json";

const cursos = Object.values(cursosObj);

// separa por destaque
const cursosDestaque = cursos.filter((curso) => curso.destaque);
const cursosRestantes = cursos.filter((curso) => !curso.destaque);

export default function CursoSwiper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedCursoInfo, setSelectedCursoInfo] = useState(null);

  return (
    <div className={Styles.cursoSwiperContainer}>
      {/* Swiper dos destaques */}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={Styles.swiper}
      >
        {cursosDestaque.map((curso, i) => (
          <SwiperSlide key={i} className={Styles.swiperSlide}>
            <img src={curso.imagem} alt={curso.nome} className={Styles.image} />
            <div className={Styles.action}>
              <Button
                icon={<Enlarge />}
                onClick={() => {
                  setSelectedImage(curso.imagem);
                  setSelectedCursoInfo(curso);
                  setIsModalOpen(true);
                }}
                className={Styles.enlargeButton}
              ></Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper dos restantes */}
      <div className={Styles.courserRow}>
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Pagination]}
          className={Styles.scrollWrapper}
        >
          {cursosRestantes.map((curso, i) => (
            <SwiperSlide key={i} className={Styles.slideRow}>
              <img
                src={curso.imagem}
                alt={curso.nome}
                className={Styles.image}
                onClick={() => {
                  setSelectedImage(curso.imagem);
                  setSelectedCursoInfo(curso);
                  setIsModalOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal principal */}
      {isModalOpen && (
        <div className={Styles.overlay} onClick={() => setIsModalOpen(false)}>
          <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={Styles.modalImage}>
              <img
                src={selectedImage}
                alt="Full screen"
                className={Styles.fullImage}
              />
              <div className={Styles.action}>
                <Button
                  icon={<Info />}
                  onClick={() => setIsInfoOpen(true)}
                  className={Styles.detailButton}
                >
                  Detalhes
                </Button>
              </div>
            </div>
            <Button
              className={Styles.closeButton}
              onClick={() => {
                setIsModalOpen(false);
                setIsInfoOpen(false);
                setSelectedCursoInfo(null);
                setSelectedImage("");
              }}
              icon={<Cross />}
              variant="primary"
            />
            {isInfoOpen && selectedCursoInfo && (
              <div
                onClick={() => setIsInfoOpen(false)}
                className={Styles.modalInfoContainer}
              >
                <div className={Styles.modalInfoContent}>
                  <div className={Styles.modalHeader}>
                    <Info />
                    <h2>Detalhes</h2>
                  </div>
                  <h1 className={Styles.modalTitle}>
                    {selectedCursoInfo.nome}
                  </h1>
                  <p className={Styles.modalDescription}>
                    {selectedCursoInfo.descricao}
                  </p>
                  <div className={Styles.detailsInfo}>
                    <p>
                      <strong>Instituição:</strong>{" "}
                      <Button icon={<Diamond />} className={Styles.badgeCurso}>
                        {selectedCursoInfo.instituicao}
                      </Button>
                    </p>
                    <p>
                      <strong>Data</strong>
                      <Button icon={<Calendar />} className={Styles.badgeCurso}>
                        {selectedCursoInfo.data}
                      </Button>
                    </p>
                    <p>
                      <strong>Status:</strong>
                      <Button className={Styles.badgeCurso}>
                        {selectedCursoInfo.status}
                      </Button>
                    </p>
                  </div>
                </div>
                <div className={Styles.detailsActions}>
                  <Button
                    icon={<Cross />}
                    onClick={() => {
                      setIsInfoOpen(false);
                    }}
                    className={Styles.closeButtonDetailInfo}
                  >
                    Fechar
                  </Button>
                  <Button
                    href={selectedCursoInfo.link}
                    icon={<ArrowUpRight />}
                    target="_blank"
                  >
                    Link Certificado
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
