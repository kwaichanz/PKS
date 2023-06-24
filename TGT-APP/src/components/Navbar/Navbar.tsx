"use client";

import React, { useEffect } from "react";
import { Noto_Sans_Thai } from "next/font/google";

const Noto = Noto_Sans_Thai({ subsets: ["latin"], weight: ["400", "600"] });

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

import "./Navbar.scss";

export const Navbar = () => {
  const ref = { current: null };
  let options = {
    root: document.querySelector(".navbar-wrapper"),
    rootMargin: "0px",
    threshold: 0.7,
  };

  const hideNav = () => {
    document.querySelector(".navbar-wrapper")?.classList.toggle("opacity-0");
  };

  let observer = new IntersectionObserver(hideNav, options);

  useEffect(() => {
    observer.observe(document.querySelector(".navbar-wrapper")!);
  }, []);

  return (
    <header
      className={`navbar-wrapper z-50 relative opacity-0 transition-opacity duration-1000 ease-in-out`}
    >
      <nav className={`${Noto.className} navbar-styles font-extrabold `}>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
};
