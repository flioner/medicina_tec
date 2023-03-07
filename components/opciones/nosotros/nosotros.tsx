import Link from "next/link";
import React, { Children } from "react";
import s from "./nosotros.module.css";

const Nosotros = ({ personas }) => {
  return (
    <div className={s.nosotros}>
      {personas.map((item, index) => (
        <div className={s.cont} key={index}>
          <img className={s.img} src={item.src} />
          <div className={s.wrap}>
            <div className={s.name}>{item.name}</div>
            <div className={s.desc}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export { Nosotros };
