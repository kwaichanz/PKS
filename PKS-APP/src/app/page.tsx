"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";

import { Hero } from "@/components/HomeHero/HomeHero";
import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { Feeds } from "@/components/Feeds/Feeds";

import useOnScreen from "@/app/utils/useOnScreen";
import { feeds } from "../../mocks/product_card_items";
import { featuredProducts } from "../../mocks/featured_products";

import Loading from "./loading";
import { ProductCardSection } from "@/components/ProductCard/ProductCardSection";
import { SectionBanner } from "@/components/SectionBanner";

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
    <div className="flex flex-col items-center justify-between  ">
      <Hero />
      <main className="w-full h-full relative bg-white">
        <section
          className="relative mr-auto ml-auto max-w-[1000px] mb-36 mt-16"
          ref={productCardRef}
        >
          {isProductCardRef && <ProductCardSection />}
        </section>
        <article ref={featuredProductsRef}>
          {isFeaturedProductRef && (
            <FeaturedProducts featured={featuredProducts} />
          )}
        </article>
        <article>
          <SectionBanner />
        </article>
        <article ref={feedsRef}>
          {isFeedsRef && <Feeds feeds={feeds} />}
        </article>
      </main>
    </div>
  );
}
