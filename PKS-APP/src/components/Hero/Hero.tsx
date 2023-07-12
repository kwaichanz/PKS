import { getStrapiMedia } from "@/app/utils/api-helpers";
import React from "react";

import "./Hero.scss";

type HeroProps = {
  bannerData: string[];
  isLoading?: boolean;
};

export default function Hero({ bannerData, isLoading }: HeroProps) {
  // console.log("hero bannerData", bannerData);
  // console.log("hero isLoading", isLoading);
  return (
    <header className="hero-banner flex justify-center w-full pt-24 h-[600px]">
      <div
        className="actor "
        style={{
          backgroundImage:
            // bannerData && !isLoading
            //   ? bannerData[0] && !isLoading
            //     ? `url(${String(getStrapiMedia(bannerData[0]))})`
            "url(images/about/about_banner.jpg)",
          // : "url(images/about/about_banner.jpg)",
        }}
      ></div>
      <div
        className="actor"
        style={{
          backgroundImage:
            bannerData && !isLoading
              ? bannerData[1] && !isLoading
                ? `url(${String(getStrapiMedia(bannerData[1]))})`
                : "url(images/about/about_banner_2.jpg)"
              : "url(images/about/about_banner_2.jpg)",
        }}
      ></div>
      <div
        className="actor"
        style={{
          backgroundImage:
            bannerData && !isLoading
              ? bannerData[2] && !isLoading
                ? `url(${String(getStrapiMedia(bannerData[2]))})`
                : "url(images/about/about_banner_3.jpg)"
              : "url(images/about/about_banner_3.jpg)",
        }}
      ></div>
    </header>
  );
}
