import Link from "next/link";
import React, { Children } from "react";
import { Contact } from "../ui/contact/contact";
import s from "./navbar.module.css";
import { useRouter } from "next/router";

const NavBar = ({ children }) => {
  const { pathname } = useRouter();
  const currPath = useRouter();

  // console.log(pathname);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const routeTo = (url) => {
    if (pathname == url) {
      scrollToTop();
    } else {
      currPath.push(url);
    }
  };

  return (
    <div className={pathname == "/" ? s.navContainer : s.navMainContainer}>
      <div className={s.combo} onClick={() => routeTo("/")}>
        <img className={s.icon} src="ITESM.svg" alt-text="" />
      </div>
      {children}
    </div>
  );
};

const Footer = ({}) => {
  const { pathname } = useRouter();
  const currPath = useRouter();

  // console.log(pathname);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const routeTo = (url) => {
    if (pathname == url) {
      scrollToTop();
    } else {
      currPath.push(url);
    }
  };

  return (
    <div>
      <div className={s.footerSpacer}></div>
      <div className={s.footerCont}>
        <div className={s.footer} onClick={() => routeTo("/")}>
          ITESM © 2023
        </div>
      </div>
    </div>
  );
};

export { NavBar, Footer };
