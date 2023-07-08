"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import "./FeaturedProducts.scss";

import { IProduct } from "@/models/productModel";

import { noto, bubblegum, thasadith } from "@/app/utils/fonts";
import { fetchAPI } from "@/app/utils/fetchApi";
import { getStrapiMedia } from "@/app/utils/api-helpers";

interface IFeaturedProp {
  featured: IProduct;
}

interface IFeaturedData {
  title: string;
  subtitle: string;
  description: string;
  urlPath: string;
  image: any;
}

export const FeaturedProducts = ({ featured }: IFeaturedProp) => {
  const [featuredData, setFeaturedData] = useState<IFeaturedData>();

  const fetchFeaturedProducts = async () => {
    try {
      const path = "/featured-products";
      const urlParamsObject = {
        populate: "image",
        pagination: {},
      };
      const responseData = await fetchAPI(path, urlParamsObject);
      // console.log("responseData", responseData);

      const data = responseData?.data[0].attributes;
      // console.log("data :", data);

      const featuredInfo = {
        title: data?.title,
        subtitle: data?.subtitle,
        description: data?.description,
        urlPath: data?.urlPath,
        image: data?.image,
      };

      // console.log("featuredInfo :", featuredInfo);

      setFeaturedData(featuredInfo as IFeaturedData);
      // console.log("featuredData :", featuredData);
    } catch (error) {
      console.error(error);
    } finally {
      // console.log("featuredData", featuredData);
    }
  };

  const fadeInImage = () => {
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
  };

  useEffect(() => {
    fetchFeaturedProducts();
    fadeInImage();
  }, []);

  return (
    <div className="pks-product-recommend w-full">
      <div className="container max-w-[1440px] mr-auto ml-auto pl-[25px] pr-[25px]">
        <div className="row flex flex-wrap -mr-[25px] -ml-[25px]">
          <div className="content-body relative w-full">
            <figure className="content grid select-none">
              <div className="content-image mr-auto ml-auto relative opacity-0">
                <img
                  src={
                    featuredData?.image
                      ? String(
                          getStrapiMedia(
                            featuredData?.image?.data?.attributes?.url
                          )
                        )
                      : featured.image
                  }
                  alt={featuredData?.title}
                  className="opacity-0"
                  unselectable="on"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div
                className={`content-header font-bold ${bubblegum.className}`}
              >
                <h6 className="super-title-primary text-lg">
                  &quot;Our story&quot;
                </h6>
                <h2
                  className={`uppercase text-3xl sm:text-2xl md:text-4xl lg:text-6xl text-extrabold ${bubblegum.className}`}
                >
                  {featuredData?.title ? (
                    <span className="text-red-950">{featuredData?.title}</span>
                  ) : (
                    <>
                      A <span className="text-red-900"> Rich </span>Coffee &{" "}
                      <span className="text-red-900"> Traditional </span> Tea{" "}
                    </>
                  )}
                </h2>
                <h3
                  className={`uppercase text-xs sm:text-sm md:text-lg ${noto.className} mt-1`}
                >
                  <Balancer>
                    {featuredData?.subtitle ? (
                      featuredData?.subtitle
                    ) : (
                      <>more than 235 years of coffee and tea experience</>
                    )}
                  </Balancer>
                </h3>
              </div>
              <div className="content-text ">
                <p className={`text ${thasadith.className}`}>
                  <Balancer>
                  {featuredData?.description ? (
                    featuredData?.description
                  ) : (
                    <>
                      เริ่มต้นจากแนวความคิดที่ว่า
                      ประเทศบราซิลซึ่งเป็นต้นตำรับกาแฟและดินแดนแห่งนี้มีป่า
                      อันเป็นสุดยอดแห่งป่าดงดิบธรรมชาติของโลก
                      ที่อุดมไปด้วยเสน่ห์ของธรรมชาติอันยิ่งใหญ่
                      ทั้งพืชพรรณแมกไม้ สายน้ำ สัตว์ป่านานาชนิด
                      และยังเป็นแหล่งผลิตอากาศอันบริสุทธิ์
                      แนวความคิดนี้จึงถูกนำมาเพื่อสร้างสรรค์เป็นร้านกาแฟที่มีบรรยากาศร่มรื่นเย็นสบายด้วยร่มไม้และน้ำล้อมรอบ
                    </>
                  )}</Balancer>
                </p>
              </div>
              <div className="content-buttons xl:mt-0 md:mt-2 mt-4">
                <Link href="/about" prefetch>
                  <button
                    type="button"
                    className={`${noto.className} btn btn-outline btn-accent hover:!text-white !rounded-none uppercase font-bold btn-sm md:btn-md`}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
