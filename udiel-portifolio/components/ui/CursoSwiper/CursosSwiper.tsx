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
  ChevronLeft,
  ChevronRight,
  Cross,
  Diamond,
  Enlarge,
  Info,
} from "akar-icons";

// Importa o JSON
import cursosObj from "@/data/courses.json";
import Image from "next/image";

const cursos = Object.values(cursosObj);

// separa por destaque
const cursosDestaque = cursos.filter((curso) => curso.destaque);
const cursosRestantes = cursos.filter((curso) => !curso.destaque);

export default function CursoSwiper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedCursoInfo, setSelectedCursoInfo] = useState<
    (typeof cursosDestaque)[0] | null
  >(null);

  return (
    <div className={Styles.cursoSwiperContainer}>
      {/* Swiper dos destaques */}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
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
            <Image
              width={500}
              height={500}
              src={curso.imagem}
              alt={curso.nome}
              className={Styles.image}
            />
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
        <div className={Styles.navButtons}>
          <Button
            className="custom-prev cursor-pointer"
            variant="primary"
            icon={<ChevronLeft />}
          ></Button>
          <Button
            className="custom-next cursor-pointer"
            variant="primary"
            icon={<ChevronRight />}
          ></Button>
        </div>
      </Swiper>

      {/* Swiper dos restantes */}
      <div className={Styles.courserRow}>
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
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
              <Image
                width={1000}
                height={100}
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
              <Image
                width={1000}
                height={1000}
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
                    variant="secondary"
                  >
                    Fechar
                  </Button>
                  <Button
                    href={selectedCursoInfo.link}
                    icon={<ArrowUpRight />}
                    target="_blank"
                    variant="secondary"
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
