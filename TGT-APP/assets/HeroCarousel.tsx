"use client";

import React, { PropsWithChildren, useRef } from "react";
import { items } from "../../../../mocks/HeroCarouselItems.json";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Props = PropsWithChildren & EmblaOptionsType;

export const HeroCorousel = ({ children, ...options }: Props) => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  // Use the `useEmblaCarousel` hook to create an embla API instance.
  // Returnns a emblaRef and attach the ref to a containers element.
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};
