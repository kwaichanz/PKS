import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Navbar.scss";

export const DesktopNav = () => {
  return (
    <div className="navbar hidden lg:flex w-full h-full lg:items-center lg:justify-center p-6 ">
      <div className="navbar-start ">
        <Link href="/" className="mr-6">
          <Image
            src="/brand_logo.png"
            width={70}
            height={70}
            alt="TGT"
            className="static rounded-full"
            loading="lazy"
          />
        </Link>

        <div className="navbar-center ">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>เช่าซื้อ</summary>
                <ul className="p-4">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>สโตร์</a>
            </li>
            <li>
              <a>บริการหลังการขาย</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>สาระความรู้</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>ข้อมูลองค์กร</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>ข่าวสาร</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
