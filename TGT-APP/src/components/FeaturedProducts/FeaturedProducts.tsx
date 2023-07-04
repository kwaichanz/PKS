"use client";

import React, { useEffect } from "react";

import "./FeaturedProducts.scss";

import { IProduct } from "@/models/productModel";

import { noto, bubblegum, thasadith } from "@/app/utils/fonts";

interface IFeaturedProp {
  featured: IProduct;
}

export const FeaturedProducts = ({ featured }: IFeaturedProp) => {
  // const handleShow = () => {
  //   document.querySelector(".text")?.classList.toggle("show-less");
  // };
  useEffect(() => {
    document
      .querySelectorAll(".content-body .content .content-image img")
      ?.forEach((el) => {
        el.classList.remove("opacity-0");
        el.classList.add("content-image-fadein");
      });
    document
      .querySelectorAll(".content-body .content .content-image")
      ?.forEach((el) => {
        el.classList.remove("opacity-0");
        el.classList.add("content-image-fadein");
      });
  }, []);

  return (
    <div className="tgt-product-recommend w-full">
      <div className="container max-w-[1440px] mr-auto ml-auto pl-[25px] pr-[25px]">
        <div className="row flex flex-wrap -mr-[25px] -ml-[25px]">
          <div className="content-body relative w-full">
            <figure className="content grid select-none">
              <div className="content-image mr-auto ml-auto relative opacity-0">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="opacity-0"
                  unselectable="on"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div
                className={`content-header font-bold ${bubblegum.className}`}
              >
                <h6 className="super-title-primary">&quot;Our story&quot;</h6>
                <h2
                  className={`uppercase text-3xl sm:text-2xl md:text-4xl lg:text-6xl text-extrabold ${bubblegum.className}`}
                >
                  A Rich Coffee & Traditional Tea
                </h2>
                <h3
                  className={`uppercase text-xs sm:text-sm md:text-lg ${noto.className} mt-1`}
                >
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
                  className={`${noto.className} btn btn-outline btn-accent hover:!text-white !rounded-none uppercase font-bold btn-sm md:btn-md`}
                >
                  Read More
                </button>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
