"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.scss";
import "./sandbox.css";

export const Hero = () => {
  const options: EmblaOptionsType = {};
  const slide_count = 5;
  const slides = Array.from(Array(slide_count).keys());

  return (
    <section className="relative after-hero">
      <EmblaCarousel slides={slides} options={options} />
    </section>
  );
};
