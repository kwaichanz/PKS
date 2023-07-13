"use client";

import React, { useEffect } from "react";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header
      className={`navbar-wrapper z-50 relative transition-opacity duration-1000 ease-in-out`}
    >
      <nav className={` navbar-styles `}>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
};
