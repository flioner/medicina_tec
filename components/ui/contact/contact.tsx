import React, { useState } from "react";
import s from "./contact.module.css";
import { Modal } from "../modal/modal";

const Contact = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sub, setSub] = useState(false);

  const handleSub = () => {
    setSub(true);
  };
  const subOff = () => {
    setSub(false);
  };

  function openModal(id) {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal}> {children} </div>
      <Modal float={true} isOpen={modalIsOpen} setOpen={setIsOpen}>
        <div className={s.contactForm}>
          <form
            className={s.contactCont}
            onSubmit={handleSub}
            action="https://formsubmit.co/lionerrochae@gmail.com"
            method="POST"
          >
            <img
              className={s.icon}
              src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666317402/tuempresaenlinea/icons/closeIcon_aksvjy.png"
              onClick={() => closeModal()}
            />
            <label className={s.email} htmlFor="email">
              Email Address
            </label>
            <div className={s.break} />
            <input
              className={s.emailBox}
              id="email"
              type="email"
              name="email"
              required
            />

            <div className={s.break} />
            <label className={s.email} htmlFor="message">
              Message
            </label>
            <div className={s.break} />
            <textarea
              className={s.messageBox}
              id="message"
              name="message"
              required
            />
            <div className={s.break2} />

            <button type="submit" className={s.submit} onClick={handleSub}>
              Submit
            </button>
            <Modal float={true} isOpen={sub} setOpen={handleSub}>
              <div className={s.modalModal}>
                <img
                  className={s.icon}
                  src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666317402/tuempresaenlinea/icons/closeIcon_aksvjy.png"
                  onClick={() => closeModal()}
                />
                Se ha enviado su mensaje!
              </div>
              <div className={s.bgModal} onClick={() => subOff()} />
            </Modal>
          </form>
        </div>
        <div className={s.bgModal} onClick={() => closeModal()} />
      </Modal>
    </div>
  );
};

export { Contact };
