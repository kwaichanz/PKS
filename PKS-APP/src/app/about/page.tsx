"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

import { bubblegum } from "../utils/fonts";
import "./about.scss";
import { fetchAPI } from "../utils/fetchApi";
import { getStrapiMedia } from "../utils/api-helpers";
import Hero from "@/components/Hero/Hero";

interface IAboutData {
  id: string;
  title: string;
  description: string;
  image: any;
}

export default function About() {
  const [bannerData, setBannerData] = useState<string[]>([]);
  const [aboutTopData, setAboutTopData] = useState<IAboutData>();
  const [aboutMiddleData, setAboutMiddleData] = useState<IAboutData>();
  const [aboutBottomData, setAboutBottomData] = useState<IAboutData>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAboutBanner = async () => {
    try {
      const path = "/about-page";
      const urlParamsObject = {
        populate: "[About_banner][populate][0]=image",
        pagination: {},
      };
      const responseData = await fetchAPI(path, urlParamsObject);
      console.log("responseData", responseData);

      //  Destructuring and Property Shorthand
      const aboutData = (({
        About_banner,
        About_top_sector,
        About_middle_sector,
        About_bottom_sector,
      }) => ({
        About_banner,
        About_top_sector,
        About_middle_sector,
        About_bottom_sector,
      }))(responseData.data.attributes);
      console.log("aboutData", aboutData);

      setBannerData(
        aboutData.About_banner.image.data.map((element: any) => {
          // console.log("element", element?.attributes!.url);
          return element?.attributes!.url;
        })
      );
      console.log("banner data ", bannerData);

      setAboutTopData(aboutData.About_top_sector);
      setAboutMiddleData(aboutData.About_middle_sector);
      setAboutBottomData(aboutData.About_bottom_sector);
      console.log("About Top Dta : ", aboutData.About_top_sector);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("banner data ", bannerData);
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchAboutBanner();
  }, []);

  return (
    <div className="flex flex-col items-center relative select-none min-h-[1000px]">
      {!isLoading && (
      <Hero isLoading={isLoading} bannerData={bannerData}/>
      )}
      {!isLoading && (
        <main className=" min-h-[400px] max-w-[1392px] my-24 mx-auto w-full text-center items-center h-full">
          <section className="about-top-container max-w-[1274px] min-h-[500px] mx-[4%] ">
            <div
              className={`max-w-[1392px] py-14 px-auto text-lg  tracking-wider sm:tracking-widest leading-relaxed sm:leading-loose ${bubblegum.className} text-left`}
            >
              <h2
                className={`text-4xl text-red-900 font-bold mb-8 ${bubblegum.className}`}
              >
                {aboutTopData?.title
                  ? aboutTopData.title
                  : "Our Story, Our heritage"}
              </h2>
              <p>
                <Image
                  src={
                    aboutTopData?.image
                      ? String(
                          getStrapiMedia(aboutTopData.image.data.attributes.url)
                        )
                      : "/images/about/top_about_image.jpg"
                  }
                  alt="top_image"
                  className="ml-10 float-right grayscale hover:grayscale-0 duration-1000 transition-color  hover:shadow-2xl hover:scale-110 hover:rotate-3 hover:translate-x-2 hover:translate-y-2 w-full lg:w-[48%] xl:w-[389px] mb-6 cursor-pointer"
                  width={389}
                  height={227}
                  unoptimized={true}
                />
              </p>
              <p>
                {aboutTopData?.description
                  ? aboutTopData.description
                  : `Our story begins in 1971 along the cobblestone streets of
                Seattles historic Pike Place Market. It was here where Starbucks
                opened its first store, offering fresh-roasted coffee beans, tea
                and spices from around the world for our customers to take home.
                Our name was inspired by the classic tale, Moby-Dick, evoking
                the seafaring tradition of the early coffee traders. But first,
                let&quot;s start with how every good story should. At the very
                beginning. The story began back in 1971 when Sergio and Bruno
                arrived in London with a burning desire to make great tasting
                coffee a part of everyday life. `}
              </p>
            </div>
          </section>
          <section className="about-middle-container relative my-20 mb-28">
            <div className="max-w-[1392px] flex flex-col-reverse md:flex-row-reverse w-full my-[80px] mx-auto overflow-hidden">
              <div className="right-middle-about py-24 px-[10%] md:py-20 md:px-[6.5%] min-h-[300px] md:min-h-[512px] w-full md:w-1/2 bg-[#771c28] flex flex-col relative text-white">
                <div className="waveBorderWrapper rotate-180 flex items-center justify-center absolute top-[14px] md:left-[14px] z-10">
                  <svg
                    className="WaveSeparator__Icon rotate-90 md:rotate-0 text-[#771c28] absolute w-[100px] h-[1344px]"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M64.1992449,95.5093197 C64.1992449,58.9121251 99.628,37.1568942 99.628,-0.414 L35.6267259,-0.414 C35.6267259,37.1568942 0.114510812,58.9121251 0.114510812,95.5093197 C0.114510812,132.092604 35.6267259,153.847835 35.6267259,191.432639 C35.6267259,229.003534 0.114510812,250.758764 0.114510812,287.355959 C0.114510812,323.953154 35.6267259,345.694475 35.6267259,383.279279 C35.6267259,420.864083 0.114510812,442.619314 0.114510812,479.202598 C0.114510812,515.799793 35.6267259,537.555024 35.6267259,575.125918 C35.6267259,612.710722 0.114510812,634.465953 0.114510812,671.049238 C0.114510812,707.646432 35.6267259,729.401663 35.6267259,766.986468 C35.6267259,804.557362 0.114510812,826.312593 0.114510812,862.909787 C0.114510812,899.493072 35.6267259,921.248303 35.6267259,958.833107 C35.6267259,996.404001 0.114510812,1018.15923 0.114510812,1054.75643 C0.114510812,1091.35362 35.6267259,1113.09494 35.6267259,1150.67975 C35.6267259,1188.26455 0.114510812,1210.01978 0.114510812,1246.60307 C0.114510812,1283.20026 35.6267259,1304.95549 35.6267259,1342.52639 L99.628,1342.52639 C99.628,1304.95549 64.1992449,1283.20026 64.1992449,1246.60307 C64.1992449,1210.01978 99.628,1188.26455 99.628,1150.67975 C99.628,1113.09494 64.1992449,1091.35362 64.1992449,1054.75643 C64.1992449,1018.15923 99.628,996.404001 99.628,958.833107 C99.628,921.248303 64.1992449,899.493072 64.1992449,862.909787 C64.1992449,826.312593 99.628,804.557362 99.628,766.986468 C99.628,729.401663 64.1992449,707.646432 64.1992449,671.049238 C64.1992449,634.465953 99.628,612.710722 99.628,575.125918 C99.628,537.555024 64.1992449,515.799793 64.1992449,479.202598 C64.1992449,442.619314 99.628,420.864083 99.628,383.279279 C99.628,345.694475 64.1992449,323.953154 64.1992449,287.355959 C64.1992449,250.758764 99.628,229.003534 99.628,191.432639 C99.628,153.847835 64.1992449,132.092604 64.1992449,95.5093197 Z"
                        fill="currentColor"
                        transform="translate(49.871255, 671.056193) scale(-1, 1) translate(-49.871255, -671.056193) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className={`text-4xl ${bubblegum.className} mb-8`}>
                    {aboutMiddleData?.title
                      ? aboutMiddleData.title
                      : "Our improved Signature Blend"}
                  </h3>
                </div>
                <div>
                  <p
                    className={`text-lg ${bubblegum.className}  tracking-wider sm:tracking-widest leading-relaxed sm:leading-loose`}
                  >
                    <Balancer>
                      {aboutMiddleData?.description
                        ? aboutMiddleData.description
                        : `Our iconic Signature Blend is the perfect combination and
                  balance of delicate Arabica and strong Robusta beans. In early
                  2023, we improved its strength and taste by roasting our beans
                  for just that little bit longer. This subtle change resulted
                  in a more intense blend without losing its smooth taste we
                  know you love. It's bolder, smoother, tastier, better.`}
                    </Balancer>
                  </p>
                </div>
              </div>
              <div className="left-middle-about w-auto m-0 md:w-1/2 md:h-auto  min-h-[300px] md:min-h-[512px] ">
                <div className="h-full min-h-[300px] sm:min-h-[512px] md:h-full w-full inline-block align-top relative  ">
                  <div className=" max-w-[700px] block"></div>
                  <Image
                    aria-hidden="true"
                    className="opacity-100 transition-opacity duration-500 h-full w-full top-0 right-0 bottom-0 left-0 absolute object-cover object-center"
                    src={
                      aboutMiddleData?.image
                        ? String(
                            getStrapiMedia(
                              aboutMiddleData.image.data.attributes.url
                            )
                          )
                        : "/images/about/middle_about_image.jpg"
                    }
                    alt="middle_about_image"
                    width={690}
                    height={540}
                    loading="lazy"
                    unoptimized={true}
                  />
                  <div></div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-bottom-container max-w-[1274px] min-h-[500px] mx-[4%] relative">
            {" "}
            <div
              className={`max-w-[1392px] py-14 px-auto text-lg tracking-wider sm:tracking-widest leading-relaxed sm:leading-loose ${bubblegum.className} text-left`}
            >
              <h2 className="text-4xl text-red-900 font-bold mb-8">
                {aboutBottomData?.title
                  ? aboutBottomData.title
                  : "Our improved Signature Blend"}
              </h2>
              <p>
                <Image
                  src={
                    aboutBottomData?.image
                      ? String(
                          getStrapiMedia(
                            aboutBottomData?.image.data.attributes.url
                          )
                        )
                      : "/images/about/bottom_about_image.jpg"
                  }
                  alt="bottom_image"
                  className="ml-10 float-right grayscale hover:grayscale-0  duration-1000 transition-color hover:shadow-2xl hover:scale-110 hover:rotate-3 hover:translate-x-2 hover:translate-y-2 w-full lg:w-[48%] xl:w-[389px] mb-6  cursor-pointer"
                  width={389}
                  height={227}
                  loading="lazy"
                  unoptimized={true}
                />
              </p>
              <p>
                {aboutBottomData?.description
                  ? aboutBottomData.description
                  : `We've 50 years' experience of crafting the finest
              quality coffee. From revolutionary methods and commitment to
              quality to unforgettable successes that have made Our Coffee the
              Nation’s Favourite* coffee shop, our story is as unique as our
              coffee. Setting up a small roastery in Fenchurch Street, they
              committed to crafting the finest quality coffee. It was here the
              blind-tested 112 variations of coffee before they tasted one good
              enough to be our signature blend. They named it ‘Mocha Italia’ and
              it remains our signature blend to this day.`}
              </p>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
