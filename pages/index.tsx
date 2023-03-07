import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/ui/slider/slider";
import s from "../styles/Home.module.css";
import React, { useState } from "react";
import { NavBar } from "../components/navigation/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Contact } from "../components/ui/contact/contact";
import { Nosotros } from "../components/opciones/nosotros/nosotros";

export default function Home() {
  const [visibleDot, setDots] = useState(false);
  const [currentSelection, setSelection] = useState([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const updateSelection = (index) => {
    let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    temp[index] = 1;
    setSelection(temp);
  };

  const opciones = [
    "Objetivo",
    "Infección Post-parto",
    "Señales de Alerta",
    "Recomendaciones",
    "Contacta a un Profesionnal",
    "Acerca de Nosotros",
    "Donaciones",
  ];

  const opcionesCondensed = [
    "Objetivo",
    "Infección",
    "Prevención",
    "Acciones",
    "Ayuda",
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
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
    {
      name: "Valeria",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
    {
      name: "Liz",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
    {
      name: "Carlo",
      src: "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet lorem.",
    },
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
          <div className={s.rightContent}>
            <Nosotros personas={personas} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
