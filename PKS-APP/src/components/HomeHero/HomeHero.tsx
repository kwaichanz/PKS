import React, { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.scss";
import "./sandbox.css";

export const Hero = () => {
  const options: EmblaOptionsType = {};
  const slide_count = 5;
  const slides = Array.from(Array(slide_count).keys());

  // This makes the initial load takes longer due to calling the api for the number of pages
  // fetch(`http://localhost:${process.env.NEXT_PUBLIC_STRAPI_PORT_NUMBER}/api/hero-slide-images?populate=image`)
  //   .then((res) => res.json())
  //   .then((data) => {console.log(data);
  //     console.log('d',data.data[0].attributes.image.data.length);
  //     const countOfSlides = Array.from(Array(data.data[0].attributes.image.data.length).keys());
  //     setslideCount(countOfSlides)
  //     console.log("count", countOfSlides);
  //   });


  return (
    <section className="relative after-hero">
      <EmblaCarousel slides={slides} options={options} />
    </section>
  );
};
