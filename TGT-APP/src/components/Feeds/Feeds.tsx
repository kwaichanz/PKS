'use client'
import { IFeed } from "@/models/productModel";
import React from "react";

interface IFeedProp {
  feeds: IFeed;
}

export const Feeds = ({ feeds }: IFeedProp) => {
  return (
    <div className="newsfeed-content h-[1000px] bg-orange-200 text-center flex justify-center items-center flex-col">
      <div className="content-header ">
        <h1 className="text-8xl">FEEDS</h1>
      </div>
      <div className="content-text flex justify-between w-full">
        <section>
          <img
            src={feeds[0].image}
            alt="feed-left"
            className=" rounded-badge"
          />
        </section>
        <section>
          <img
            src={feeds[1].image}
            alt="feed-left"
            className=" rounded-badge"
          />
        </section>
      </div>
      <div className="content-button">
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
};
