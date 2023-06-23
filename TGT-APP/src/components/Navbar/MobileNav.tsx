"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MobileNav = () => {
  //   function changeSvgStyle() {
  //     try {
  //       const svg = document.querySelector("svg");

  //       svg?.classList.toggle("hidden");

  //       console.log(svg?.parentElement.tabIndex === 0);
  //       svg.parentElement.tabIndex = "1";

  //       const hamburger = document.querySelector(".hamburger-x");
  //       hamburger.classList.toggle("hidden");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <div className=" navbar lg:hidden flex w-full h-full items-center justify p-6">
      <div className="navbar-start">
        <Link href="/" className="mr-2">
          <Image
            src="/TGT_logo.png"
            width={70}
            height={70}
            alt="TGT"
            className="static rounded-full"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="dropdown navbar-end flex">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <svg
            className="h-8 w-8 text-gray-600 hamburger-x hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-lg left-0 top-20 !fixed  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen "
        >
          <li>
            <a>สินค้า</a>
            <ul className="p-2">
              <li>
                <a>สินค้า 1</a>
              </li>
              <li>
                <a>สินค้า 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>ข่าวสาร</a>
          </li>
          <li>
            <a>โปรโมชั่น</a>
          </li>
          <li>
            <a>ข้อมูลองค์กร</a>
          </li>
          <li>
            <a>สาระความรู้</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
