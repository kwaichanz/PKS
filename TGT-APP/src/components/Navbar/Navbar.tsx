"use client";

import React from "react";
import { Noto_Sans_Thai } from "next/font/google";

const Noto = Noto_Sans_Thai({ subsets: ["latin"], weight: ["400", "600"] });

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

import "./Navbar.scss";

export const Navbar = () => {
  let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.5,
  };

  const hideNav = () => {
    document.querySelector(".navbar-wrapper")?.classList.toggle("hidden");
  };

  let observer = new IntersectionObserver(hideNav, options);

  return (
    <div className={`navbar-wrapper z-50 relative transition-opacity duration-200 ease-in-out`}>
      <div className={`${Noto.className} navbar-styles font-extrabold `}>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
};
