import { IFeed } from "@/models/productModel";
import React from "react";

import { bubblegum, kanit, montserrat, noto } from "@/utils/fonts";

import "./Feeds.scss";

interface IFeedProp {
  feeds: IFeed[];
}

export const Feeds = ({ feeds }: IFeedProp) => {
  return (
    <div className="newsfeed-content h-full bg-[#f7eedc] flex-col pt-28 ">
      <div className="content-header mb-16 block text-center">
        <h6
          className={`text-[#f3b58c] super-title-primary text-xl ${bubblegum.className}`}
        >
          news and stories
        </h6>
        <h1
          className={` ${bubblegum.className} font-extrabold text-red-500 text-4xl  md:text-5xl lg:text-6xl drop-shadow-[0_2.2px_1.2px_rgba(255,255,100,0.8)]`}
        >
          The latest coffee and tea news
        </h1>
      </div>
      <div className="content-text flex justify-center mb-[7.5rem] flex-col lg:flex-row items-center ">
        <section className="content lazy">
          <div className="content-image">
            <img
              src={feeds[0].image}
              alt="leftfeed"
              className="rounded-badge "
            />
          </div>
          <div className="content-header">
            <h3 className={`uppercase ${kanit.className}`}>
              โออาร์ เปิดร้าน คาเฟ่ ฟอร์ แช้นส์ สาขาที่ 8
            </h3>
          </div>
          <div className="content-button">
            <a href="" className="btn btn-accent btn-outline min-h-6 px-8">
              <p className={`  ${montserrat.className}`}>read story</p>
            </a>
          </div>
        </section>
        <section className="content lazy">
          <div className="content-image">
            <img
              src={feeds[1].image}
              alt="rightfeed"
              className=" rounded-e-2xl"
            />
          </div>
          <div className="content-header">
            <h3 className={`uppercase ${kanit.className}`}>
              เปิด Café สาขาแรกในมาเลเซีย ขยายตลาดเอเชียเป็นประเทศที่ 9
            </h3>
          </div>
          <div className="content-button">
            <a href="" className="btn btn-accent btn-outline px-8 ">
              <p className={`   ${montserrat.className} `}>read story</p>
            </a>
          </div>
        </section>
      </div>
      <div className="content-button text-center pb-[7.5rem]">
        <button
          className={`btn btn-primary uppercase btn-outline font-extrabold  ${noto.className} rounded-none`}
        >
          More News
        </button>
      </div>
    </div>
  );
};
