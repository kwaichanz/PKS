import Image from "next/image";
import React from "react";

import "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen "
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
          </ul>
        </div>
        <Image
          src="/TGT_logo.png"
          width={50}
          height={50}
          alt="TGT"
          className="static rounded-full"
        />
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>เช่าซื้อ</summary>
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
