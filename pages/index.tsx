import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/ui/slider/slider";
import s from "../styles/Home.module.css";
import React, { useState } from "react";
import { NavBar } from "../components/navigation/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Contact } from "../components/ui/contact/contact";
import {
  Objetivo,
  Infeccion,
  Sintomas,
  Ayuda,
  Nosotros,
} from "../components/opciones/datos/datos";
import { Quiz } from "../components/quiz/quiz";
import CommentSection from "../components/ui/comments/comments";

export default function Home() {
  const [visibleDot, setDots] = useState(false);
  const [currentSelection, setSelection] = useState([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [selected, updatedSelected] = useState(0);

  const updateSelection = (index) => {
    let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    temp[index] = 1;
    updatedSelected(index);
    setSelection(temp);
  };

  const opciones = [
    "Objetivo",
    "Infección Post-parto",
    "Síntomas y Prevención",
    "Ayuda Profesionnal",
    "Acerca de Nosotros",
    "Donaciones",
  ];

  const opcionesCondensed = [
    "Objetivo",
    "Infección",
    "Síntomas",
    "Ayuda",
    "Nosotros",
    "Donaciones",
  ];

  const personas = [
    {
      name: "Ivana",
      src: "Ivana.jpg",
      desc: "Soy un estudiante de Psicología Clínica enfocado en el área de la salud. Decidí unirme a este proyecto porque creo que es importante para las mujeres embarazadas conocer las posibles infecciones que pueden ocurrir en el puerperio durante las primeras seis semanas después del parto.",
    },
    {
      name: "Sofía",
      src: "Sofia.jpg",
      desc: "Soy estudiante de medicina, junto con mi equipo, hemos investigado sobre las infecciones posparto, un tema relevante pero poco discutido en la sociedad. Esperamos compartir la información recolectada para ayudar a las mujeres en su proceso de recuperación.",
    },
    {
      name: "Valeria",
      src: "Vale.jpg",
      desc: "Soy estudiante de ciencias de la salud, decidí formar parte de este proyecto porque considero importante que se traten más abiertamente los temas de salud materna después del parto, ya que ayudaría a prevenir incontables pacientes afectadas por infecciones durante el post parto.",
    },
    {
      name: "Liz",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
    {
      name: "Carlo",
      src: "Carlo.jpg",
      desc: "Soy estudiante de Biociencias. Este tema me llamó la atención ya que desconocía de lo que trataba y me dio mucha curiosidad investigar sobre él y conocerlo a fondo. Mi rol dentro del equipo fue proporcionar ideas, realizar documentos y apoyar en dentro del cortometraje :)",
    },
  ];

  const opcionesFull = [
    <Objetivo key="objetivo" />,
    <Infeccion key="infeccion" />,
    <Sintomas key="sintomas" />,
    <Ayuda key="ayuda" />,
    <Nosotros key="nosotros" personas={personas} />,
    <div key="empty2"></div>,
  ];

  return (
    <Layout>
      <NavBar>
        {opcionesCondensed.map((item, index) => (
          <div
            key={index}
            className={
              currentSelection[index] == 1
                ? `${s.navBarButton} ${s.navSelected}`
                : s.navBarButton
            }
            onClick={() => updateSelection(index)}
          >
            {item}
          </div>
        ))}
        <Contact>
          <div className={s.navBarContact}>Contacto</div>
        </Contact>
      </NavBar>

      <div className={s.mainCont}>
        <Swiper autoHeight={true} className={s.slider}>
          <SwiperSlide className={s.slide}>
            <video
              width={"100vw"}
              className={s.video}
              src="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642810303/3D_Music_Visualizer_2_zvqubj.mp4"
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <div className={s.owo}> owo</div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={s.contCont}>
        <div className={s.mainCont}>
          <div className={s.left}>
            {opciones.map((item, index) => (
              <div
                key={index}
                className={
                  currentSelection[index] == 1
                    ? `${s.leftButton} ${s.leftButtonSelected}`
                    : s.leftButton
                }
                onClick={() => updateSelection(index)}
              >
                {item}
              </div>
            ))}
            <div className={s.filler}>
              <div className={s.fillerFiller}></div>
            </div>
          </div>

          <div className={s.right}>
            <div className={s.rightContent}>{opcionesFull[selected]}</div>
          </div>
        </div>
      </div>

      <form action="https://formsubmit.co/lionerrochae@gmail.com" method="POST">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>

      <div className={s.mainCont}>
        <Quiz />
      </div>

      <CommentSection />
    </Layout>
  );
}
