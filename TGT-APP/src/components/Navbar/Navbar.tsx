import React from "react";
import { Noto_Sans_Thai } from "next/font/google";

const Noto = Noto_Sans_Thai({ subsets: ["latin"], weight: ["400", "600"] });

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className={`navbarwrapper z-50 relative`}>
      <div className={`${Noto.className} navbarStyles`}>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
};
