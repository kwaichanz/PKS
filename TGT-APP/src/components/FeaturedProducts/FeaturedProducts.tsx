"use client";

import React from "react";
import { Rampart_One, Bubblegum_Sans, Thasadith } from "next/font/google";

import "./FeaturedProducts.scss";

import { IProduct } from "@/models/productModel";

const rampart = Rampart_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const bubblegum = Bubblegum_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const thasadith = Thasadith({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

interface IFeaturedProp {
  featured: IProduct;
}

export const FeaturedProducts = ({ featured }: IFeaturedProp) => {
  // const handleShow = () => {
  //   document.querySelector(".text")?.classList.toggle("show-less");
  // };

  return (
    <div className="tgt-product-recommend w-full">
      <div className="container max-w-[1440px] mr-auto ml-auto pl-[25px] pr-[25px]">
        <div className="row flex flex-wrap -mr-[25px] -ml-[25px]">
          <div className="content-body relative w-full">
            <figure className="content grid ">
              <div className="content-image mr-auto ml-auto relative">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div
                className={`content-header font-bold ${bubblegum.className}`}
              >
                <h6 className="super-title-primary">"Our story"</h6>
                <h2 className={`uppercase ${rampart.className}`}>
                  A Rich Coffee & Traditional Tea
                </h2>
                <h3 className={`uppercase ${rampart.className}`}>
                  more than 235 years of coffee and tea experience
                </h3>
              </div>
              <div className="content-text ">
                <p className={`text ${thasadith.className}`}>
                  เริ่มต้นจากแนวความคิดที่ว่า
                  ประเทศบราซิลซึ่งเป็นต้นตำรับกาแฟและดินแดนแห่งนี้มีป่า
                  อันเป็นสุดยอดแห่งป่าดงดิบธรรมชาติของโลก
                  ที่อุดมไปด้วยเสน่ห์ของธรรมชาติอันยิ่งใหญ่ ทั้งพืชพรรณแมกไม้
                  สายน้ำ สัตว์ป่านานาชนิด และยังเป็นแหล่งผลิตอากาศอันบริสุทธิ์
                  แนวความคิดนี้จึงถูกนำมาเพื่อสร้างสรรค์เป็นร้านกาแฟที่มีบรรยากาศร่มรื่นเย็นสบายด้วยร่มไม้และน้ำล้อมรอบ
                </p>
              </div>
              <div className="content-buttons xl:mt-0 md:mt-2 mt-4">
                <button
                  type="button"
                  className="btn btn-outline btn-accent hover:!text-white !rounded-none uppercase font-bold btn-sm md:btn-md"
                >
                  อ่านเพิ่มเติม
                </button>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
