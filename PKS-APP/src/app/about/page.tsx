"use client";

import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center  relative h-[2000px] select-none">
      <article
        className="about-banner flex justify-center  w-full pt-24 h-[600px] bg-right-bottom bg-yellow-200"
        style={{
          backgroundImage: `url(${
            "" ? "/images/about-banner.jpg" : "images/banana.png"
          })`,
          backgroundSize: "30% 60%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <h1 className="text-7xl font-extrabold uppercase text-center space-y-2">
            <p className="text-white">Indulge in Exceptional Coffee Moments</p>
            <p
              className={`text-transparent bg-clip-text bg-gradient-to-r 
                    from-[#f56e2a] from-20% via-[#ffb759] to-80% to-[#ff790c]
                    text-xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4.2px_1.2px_rgba(255,255,255,0.8)]`}
            >
              we love great tasting coffee
            </p>
            <p className="text-white">
              this is our <span className="text-[#ff9f1c]">story</span>
            </p>
          </h1>
        </div>
      </article>
      <article className="bg-red-400 h-[800px] w-full text-center items-center">
        <div className="about-content-container ">dasad</div>
      </article>
    </div>
  );
}
