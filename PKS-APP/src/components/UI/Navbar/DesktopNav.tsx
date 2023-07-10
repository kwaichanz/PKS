import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Navbar.scss";
import { noto } from "@/app/utils/fonts";

export const DesktopNav = () => {
  return (
    <div
      className={`navbar hidden lg:flex w-full h-full lg:items-center lg:justify-center p-8 `}
    >
      <div className="navbar-start ">
        <Link href="/" className="mr-6">
          <Image
            src="/brand_logo.png"
            width={70}
            height={70}
            alt="PKS"
            className="static rounded-2xl"
            loading="lazy"
          />
        </Link>

        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 ">
            <li tabIndex={0}>
              <details>
                <summary>
                  <a className={`${noto.className}`}>สินค้า</a>
                </summary>
                <ul className="p-4">
                  <li>
                    <a>กาแฟ</a>
                  </li>
                  <li>
                    <a>ชา</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className={`${noto.className}`}>สโตร์</a>
            </li>
            <li>
              <a className={`${noto.className}`}>พีเคเอสแคร์</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className={`${noto.className}`}>ข่าวสาร</a>
          </li>
          <li>
            <a className={`${noto.className}`}>สาระความรู้</a>
          </li>
          <li tabIndex={0}>
            <a className={`${noto.className}`}>ข้อมูลองค์กร</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
