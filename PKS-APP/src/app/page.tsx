"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";

import { Hero } from "@/components/Hero/Hero";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { Feeds } from "@/components/Feeds/Feeds";

import useOnScreen from "@/app/utils/useOnScreen";
import { feeds } from "../../mocks/product_card_items";
import { featuredProducts } from "../../mocks/featured_products";

import {noto } from "@/app/utils/fonts";
import Loading from "./loading";
import { ProductCardSection } from "@/components/ProductCard/ProductCardSection";

export default function Home() {
  const productCardRef = useRef<HTMLDivElement>(null);
  const productCardRefValue = useOnScreen(productCardRef);
  const [isProductCardRef, setIsProductCardRef] = useState(false);

  useEffect(() => {
    if (!isProductCardRef) {
      setIsProductCardRef(productCardRefValue);
    }
  }, [productCardRefValue]);

  const featuredProductsRef = useRef<HTMLDivElement>(null);
  const featuredProductsRefValue = useOnScreen(featuredProductsRef);
  const [isFeaturedProductRef, setIsFeaturedProductRef] = useState(false);

  useEffect(() => {
    if (!isFeaturedProductRef) {
      setIsFeaturedProductRef(featuredProductsRefValue);
    }
  }, [featuredProductsRefValue]);

  const feedsRef = useRef<HTMLDivElement>(null);
  const feedsRefValue = useOnScreen(feedsRef);
  const [isFeedsRef, setIsFeedsRef] = useState(false);

  useEffect(() => {
    if (!isFeedsRef) {
      setIsFeedsRef(feedsRefValue);
    }
  }, [feedsRefValue]);


  return (
    <div className="flex flex-col items-center justify-between ">

      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <main className="w-full h-full relative bg-white">
        <section
          className="relative mr-auto ml-auto max-w-[1000px] mb-36 mt-16"
          ref={productCardRef}
        >
          {isProductCardRef && (
            <ProductCardSection />
          )}
        </section>
        <article ref={featuredProductsRef}>
          {isFeaturedProductRef && (
            <FeaturedProducts featured={featuredProducts} />
          )}
        </article>
        <article className="h-[300px]  bg-[url('/images/home-banner.webp')] bg-cover filter">
          <div className="h-full max-w-[75rem] ml-auto mr-auto flex justify-end flex-col pb-8">
            <div
              className={`text-white ${noto.className} bg-black bg-opacity-25 p-4 pt-0 select-none`}
            >
              <h2 className={`${noto.className}`}>
                วิจัยและพัฒนาการปลูก กับโครงการฯ
              </h2>
              <p>
                การมีส่วนร่วมฟื้นฟูและอนุรักษ์ทรัพยากรธรรมชาติ
                และสิ่งแวดล้อมของท้องถิ่นโดยเฉพาะป่าต้นน้ำ
                ในขณะเดียวกันคาเฟ่อเมซอนก็ได้วัตถุดิบเป็นเมล็ดกาแฟคุณภาพเพื่อผู้บริโภคที่มาใช้บริการ{" "}
              </p>
            </div>
          </div>
        </article>
        <article ref={feedsRef}>
        {isFeedsRef && (<Feeds feeds={feeds} /> )}
        </article>
      </main>
    </div>
  );
}
