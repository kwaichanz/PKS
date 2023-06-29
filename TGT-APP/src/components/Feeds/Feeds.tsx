import { IFeed } from "@/models/productModel";
import React from "react";

import "./Feeds.scss";
import Image from "next/image";

interface IFeedProp {
  feeds: IFeed[];
}

export const Feeds = ({ feeds }: IFeedProp) => {
  return (
    <div className="newsfeed-content h-[980px] bg-[#f7eedc] flex-col ">
      <div className="content-header ">
        <h1 className="text-8xl">FEEDS</h1>
      </div>
      <div className="content-text flex justify-center mb-[75px]">
        <section className="content lazy">
          <div className="content-image">
            <Image
              src={feeds[0].image}
              alt="leftfeed"
              className=" rounded-badge"
              width={500}
              height={550}
            />
          </div>
          <div className="content-header"></div>
          <div className="content-button"></div>
        </section>
        <section className="content lazy">
          <div className="content-image">
            <Image
              src={feeds[1].image}
              alt="rightfeed"
              className=" rounded-e-2xl"
              width={500}
              height={550}
            />
          </div>
          <div className="content-header"></div>
          <div className="content-button"></div>
        </section>
      </div>
      <div className="content-button">
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
};
