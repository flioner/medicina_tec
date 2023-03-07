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
  Nosotros,
} from "../components/opciones/datos/datos";

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
    "Contacta a un Profesionnal",
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
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
    {
      name: "Sofía",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Soy estudiante de medicina, junto con mi equipo, hemos investigado sobre las infecciones posparto, un tema relevante pero poco discutido en la sociedad. Esperamos compartir la información recolectada para ayudar a las mujeres en su proceso de recuperación.",
    },
    {
      name: "Valeria",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Soy estudiante de ciencias de la salud, decidí formar parte de este proyecto porque considero importante que se traten más abiertamente los temas de salud materna después del parto, ya que ayudaría a prevenir incontables pacientes afectadas por infecciones durante el post parto.",
    },
    {
      name: "Liz",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
    {
      name: "Carlo",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Soy estudiante de Biociencias. Este tema me llamó la atención ya que desconocía de lo que trataba y me dio mucha curiosidad investigar sobre él y conocerlo a fondo. Mi rol dentro del equipo fue proporcionar ideas, realizar documentos y apoyar en dentro del cortometraje :)",
    },
  ];

  const opcionesFull = [
    <Objetivo />,
    <Infeccion />,
    <Sintomas />,
    <></>,
    <Nosotros personas={personas} />,
    <></>,
  ];

  return (
    <Layout>
      <NavBar>
        {opcionesCondensed.map((item, index) => (
          <div
            key={index}
            className={
              currentSelection[index] == 1
                ? s.navBarButtonSelected
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
        <Swiper className={s.slider}>
          <SwiperSlide className={s.slide}>
            <video
              width={"100vw"}
              className={s.video}
              src="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642810303/3D_Music_Visualizer_2_zvqubj.mp4"
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <div> owo</div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={s.mainCont}>
        <div className={s.left}>
          {opciones.map((item, index) => (
            <div
              key={index}
              className={
                currentSelection[index] == 1
                  ? s.leftButtonSelected
                  : s.leftButton
              }
              onClick={() => updateSelection(index)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className={s.right}>
          <div className={s.rightContent}>{opcionesFull[selected]}</div>
        </div>
      </div>
    </Layout>
  );
}
