"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import "./sandbox.css";

export const Hero = () => {
  const options: EmblaOptionsType = { loop: true };
  const slide_count = 5;
  const slides = Array.from(Array(slide_count).keys());

  return (
    <section className="relative">
      <EmblaCarousel slides={slides} options={options} />
    </section>
  );
};
