"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Styles from "./CursosSwiper.module.css";
import Button from "../Button/Button";
import { Info } from "akar-icons";

// Importa o JSON
import cursosObj from "@/data/courses.json";

const cursos = Object.values(cursosObj);

// separa por destaque
const cursosDestaque = cursos.filter(curso => curso.destaque);
const cursosRestantes = cursos.filter(curso => !curso.destaque);

export default function CursoSwiper() {
  return (
    <div className={Styles.cursoSwiperContainer}>
      {/* Swiper dos destaques */}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay,Navigation, Pagination]}
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
              <Button icon={<Info />} href={curso.link} target="_blank">
                Detalhes
              </Button>
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
              <img src={curso.imagem} alt={curso.nome} className={Styles.image} />
              <div className={Styles.action}>
                <Button icon={<Info />} href={curso.link} target="_blank">
                  Detalhes
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
