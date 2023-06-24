"use client";

import React from "react";
import { HeroCorousel } from "./HeroCarousel/HeroCarousel";
import { items } from "../../../mocks/HeroCarouselItems.json";
import Image from "next/image";


export const Hero = () => {
  const { responsive } = items;

  

  return (
    <div className="relative w-full mx-auto my-2 h-[56rem] ">
      <HeroCorousel loop >
        {responsive.map((item) => {
          return (
            <div className="relative  h-screen flex-[0_0_100%]" key={item.id}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="relative object-cover "
                loading="lazy"
                fill
              />
              d
            </div>
          );
        })}
      </HeroCorousel>
    </div>
  );
};
