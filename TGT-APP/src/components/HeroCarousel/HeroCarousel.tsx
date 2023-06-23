"use client";

import React, { PropsWithChildren } from "react";
import { items } from "../../../mocks/HeroCarouselItems.json";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type Props = PropsWithChildren & EmblaOptionsType;

export const HeroCorousel = ({ children, ...options }: Props) => {
  // Use the `useEmblaCarousel` hook to create an embla API instance.
  // Returnns a emblaRef and attach the ref to a containers element.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};
