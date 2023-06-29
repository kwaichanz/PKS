import { IFeed } from "@/models/productModel";
import React from "react";

import { bubblegum } from "@/utils/fonts";

import "./Feeds.scss";

interface IFeedProp {
  feeds: IFeed[];
}

export const Feeds = ({ feeds }: IFeedProp) => {
  return (
    <div className="newsfeed-content h-[980px] bg-[#f7eedc] flex-col pt-28 h-full">
      <div className="content-header mb-24 block text-center">
        <h6 className="text-[#f3b58c] super-title-primary">news and stories</h6>
        <h1
          className={` ${bubblegum.className} font-extrabold text-transparent bg-clip-text text-red-500
                    text-xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2.2px_1.2px_rgba(255,255,100,0.8)]`}
        >
          The latest coffee and tea news
        </h1>
      </div>
      <div className="content-text flex justify-center mb-[7.5rem] flex-col lg:flex-row items-center">
        <section className="content lazy">
          <div className="content-image">
            <img
              src={feeds[0].image}
              alt="leftfeed"
              className="rounded-badge "
            />
          </div>
          <div className="content-header">
            <h3 className="uppercase">
              โออาร์ เปิดร้าน คาเฟ่ ฟอร์ แช้นส์ สาขาที่ 7
            </h3>
          </div>
          <div className="content-button">
            <a href="" className="btn btn-primary btn-outline">
            <p className="!text-white">"read news"</p>
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
            <h3 className=" uppercase">
              โออาร์ เปิดร้าน คาเฟ่ ฟอร์ แช้นส์ สาขาที่ 7
            </h3>
          </div>
          <div className="content-button">
            <a href="" className="btn btn-primary btn-outline">
              <p className="!text-white">"read story"</p>
            </a>
          </div>
        </section>
      </div>
      <div className="content-button">
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
};
