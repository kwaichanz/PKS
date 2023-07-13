import React, { useEffect, useState } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { IFeed } from "@/models/productModel";

import { bubblegum, kanit, montserrat, noto } from "@/app/utils/fonts";
import "./Feeds.scss";
import { fetchAPI } from "@/app/utils/fetchApi";
import { getExtractedData, getStrapiMedia } from "@/app/utils/api-helpers";

interface IFeedProp {
  feeds: IFeed[];
}

interface IFeedData {
  id: number;
  title: string;
  image: any;
  urlPath: string;
}

export const Feeds = ({ feeds }: IFeedProp) => {
  const [feedsData, setFeedsData] = useState<IFeedData[]>([]);
  const fetchFeeds = async () => {
    try {
      const path = `/Home-page`;
      const urlParamsObject = {
        populate: "image",
        pagination: {},
      };

      const responseData = await fetchAPI(path, urlParamsObject);
      // console.log("responseData Feeds", responseData);

      if (!responseData?.data.attributes.Home_feed) {
        console.error("Cannot get Home feeds data");
        return;
      }

      const extractedData = responseData?.data?.attributes.Home_feed.map((data: IFeedData) => {
        return data
      })
      // console.log("extractedData feeds", extractedData);
      // const [leftFeed, rightFeed] = getExtractedData(responseData);
      // console.log("feed1", leftFeed);
      // console.log("feed2", rightFeed);

      // setLeftFeed(leftFeed);
      // setRightFeed(rightFeed);
      setFeedsData(extractedData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <div className="newsfeed-content h-full bg-[#f7eedc] flex-col pt-28 ">
      <div className="content-header mb-16 block text-center select-none">
        <h6
          className={`text-[#f3b58c] super-title-primary text-xl ${bubblegum.className}`}
        >
          news and stories
        </h6>
        <h1
          className={` ${bubblegum.className} font-extrabold text-red-600 text-4xl  md:text-5xl lg:text-6xl drop-shadow-[0_2.2px_1.2px_rgba(255,255,100,0.8)]`}
        >
          The latest coffee and tea news
        </h1>
      </div>
      <div className="content-text flex justify-center mb-[7.5rem] flex-col lg:flex-row items-center ">
        <section className="content lazy hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer opacity-90 hover:opacity-100">
          <div className="content-image ">
            <img
              src={
                feedsData[0]?.image.data.attributes.url
                  ? String(getStrapiMedia(feedsData[0]?.image.data.attributes.url))
                  : feeds[0]?.image
              }
              alt="leftfeed"
              className="rounded-s-[120px] "
            />
          </div>
          <div className="content-header select-none">
            <h3 className={`uppercase ${kanit.className}`}>
              <Balancer>
                {feedsData[0]?.title
                  ? feedsData[0].title
                  : "โออาร์ เปิดร้าน คาเฟ่ ฟอร์ แช้นส์ สาขาที่ 8"}
              </Balancer>
            </h3>
          </div>
          <div className="content-button">
            <Link
              href={feedsData[0]?.urlPath || ""}
              prefetch
              className="btn btn-accent btn-outline min-h-6 px-8 hover:shadow-2xl"
            >
              <p className={`  ${montserrat.className}`}>read story</p>
            </Link>
          </div>
        </section>
        <section className="content lazy hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer opacity-90 hover:opacity-100">
          <div className="content-image ">
            <img
              src={
                feedsData[1]?.image.data.attributes.url
                  ? String(getStrapiMedia(feedsData[1]?.image.data.attributes.url))
                  : feeds[1]?.image
              }
              alt="rightfeed"
              className=" rounded-e-[120px] "
            />
          </div>
          <div className="content-header select-none">
            <h3 className={`uppercase ${kanit.className}`}>
              <Balancer>
                {feedsData[1]?.title
                  ? feedsData[1].title
                  : "เปิด Café สาขาแรกในมาเลเซีย ขยายตลาดเอเชียเป็นประเทศที่ 9"}
              </Balancer>
            </h3>
          </div>
          <div className="content-button">
            <Link
              href={feedsData[1]?.urlPath || ""}
              prefetch
              className="btn btn-accent btn-outline px-8 "
            >
              <p className={`${montserrat.className} `}>read story</p>
            </Link>
          </div>
        </section>
      </div>
      <div className="content-button text-center pb-[7.5rem]">
        <Link href="/feeds" replace={false}>
          <button
            className={`btn btn-primary uppercase btn-outline font-extrabold  ${noto.className} rounded-none`}
          >
            More News
          </button>
        </Link>
      </div>
    </div>
  );
};
