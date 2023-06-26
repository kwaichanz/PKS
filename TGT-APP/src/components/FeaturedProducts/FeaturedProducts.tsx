import React from "react";
import Image from "next/image";

import "./FeaturedProducts.scss";

import { IProduct } from "@/models/productModel";

interface IFeaturedProp {
  featured: IProduct;
}

export const FeaturedProducts = ({ featured }: IFeaturedProp) => {
  return (
    <div className="tgt-product-recommend w-full">
      <div className="container max-w-[1440px] mr-auto ml-auto pl-[25px] pr-[25px]">
        <div className="row flex flex-wrap -mr-[25px] -ml-[25px]">
          <div className="content-body relative w-full h-full">
            <figure className="content grid ">
              <div className="content-image mr-auto ml-auto relative">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="content-header font-bold font-Rampart">
                <h6 className="super-title-primary">"Our story"</h6>
                <h2 className="uppercase">A Rich Coffee & Traditional Tea</h2>
                <h3 className="uppercase">
                  more than 235 years of coffee and tea experience
                </h3>
              </div>
              <div className="content-text">
                <p>
                  more than 100 developed and emerging markets through a
                  portfolio of over 50 brands that collectively cover the entire
                  category landscape
                </p>
              </div>
              <div className="content-buttons">
                <button
                  type="button"
                  className="btn btn-outline btn-accent hover:!text-white !rounded-none uppercase font-bold"
                >
                  Show more
                </button>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
