import Link from "next/link";
import React, { Children } from "react";
import s from "./datos.module.css";

const Objetivo = () => {
  return (
    <div className={s.padding}>
      <div className={s.title}> Objetivo</div>
      <div className={`${s.desc} ${s.paddingTop}`}>
        Informar a las mujeres embarazadas sobre el riesgo de las infecciones
        posparto para reducir el número de Casos en México , a través de
        recursos disponibles online para todas las personas cursando su embarazo
        o que conviven activamente con personas embarazadas.
      </div>
    </div>
  );
};

const Infeccion = () => {
  return (
    <div className={s.padding}>
      <div className={s.title}> Infección Post-Parto</div>
      <div className={`${s.desc} ${s.paddingTop}`}>
        Se trata de la respuesta del cuerpo a una infección en el área genital,
        que puede producirse desde el parto hasta 42 días después. algunos de
        los síntomas más comunes pueden ser el dolor en el vientre y flujo
        vaginal no común o con olor no agradable, de igual forma puede darse una
        inflamación en diferentes áreas del cuerpo.
      </div>
    </div>
  );
};

const Sintomas = () => {
  return (
    <div className={s.padding}>
      <div className={s.title}> Señales de Alerta </div>
      <ul className={s.list}>
        <li>Fiebre alta y continua DESPUÉS DEL PARTO</li>
        <li>Dolor pélvico intenso que se extiende a las zonas cercanas.</li>
        <li>
          Dolor a la palpación de la zona abdomnial baja, entre el ombligo y el
          pubis.
        </li>
        <li>Palpación del abdomen endurecida.</li>
        <li>Mal estado general.</li>
        <li>Flujo vaginal anormal</li>
      </ul>

      <div className={s.title}> Recomendaciones </div>
      <div className={s.desc}>
        Si bien el embarazo debe ser una experiencia grata tanto para la madre
        como para el padre, es importante recordar que el médico tiene un rol
        vital en esta experiencia. Por lo tanto, si estás cercana a tu fecha de
        parto habla con tu médico sobre el manejo que debes llevar después de
        haber tenido a tu bebé, tales como:
      </div>

      <ul className={s.list}>
        <li>El cuidado de tus heridas (ya sea por cesárea o parto vaginal)</li>
        <li>
          Cuidar tu alimentación, ya que El sobrepeso y la obesidad son factores
          de riesgo para infecciones. en este caso es mejor que te asesore un
          nutriólogo certificado.
        </li>
        <li>
          Si tu embarazo no es de alto riesgo y te es cómodo, procura hacer 30
          minutos de actividad física Leve como salir a caminar.
        </li>
        <li>
          Si mantienes relaciones sexuales durante tu embarazo, usa condón para
          protegerte de infecciones de transmisión sexual (ITS). En caso de
          tener una ITS acude con tu médico para que pueda darte tratamiento.
        </li>
        <li>
          En caso de que necesites tomar medicamento para una enfermedad crónica
          o que simplemente estés sintiendo malestares, consulta con tu médico
          el tipo de medicamento adecuado mientras estés embarazada.
        </li>
      </ul>

      <div>
        Si necesitas más orientación o tienes alguna duda sobre el manejo de tu
        embarazo u otros padecimientos durante el mismo, consulta a tu
        ginecólogo de confianza. Recuerda, tu derecho a la información y derecho
        a la salud es irrevocable, por lo que mereces tomar decisiones
        informadas sobre tu embarazo.
      </div>
    </div>
  );
};

const Nosotros = ({ personas }) => {
  return (
    <div className={s.customPadding}>
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
export { Objetivo, Infeccion, Sintomas, Nosotros };
