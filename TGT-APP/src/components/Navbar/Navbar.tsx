"use client";

import React, { useEffect } from "react";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

import "./Navbar.scss";

import {noto} from "@/utils/fonts";


export const Navbar = () => {
  // const ref = { current: null };
  // let options = {
  //   root: document.querySelector(".navbar-wrapper"),
  //   rootMargin: "0px",
  //   threshold: 0.7,
  // };

  // const hideNav = () => {
  //   document.querySelector(".navbar-wrapper")?.classList.toggle("opacity-0");
  // };

  // let observer = new IntersectionObserver(hideNav, options);

  // useEffect(() => {
  //   observer.observe(document.querySelector(".navbar-wrapper")!);
  //   document.querySelector(".navbar-wrapper")?.classList.toggle("opacity-0");
    
  // }, []);

  return (
    <header
      className={`navbar-wrapper z-50 relative transition-opacity duration-1000 ease-in-out`}
    >
      <nav className={` navbar-styles`}>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
};
