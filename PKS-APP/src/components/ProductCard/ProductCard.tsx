import { ICardItem, ICards } from "@/models/productModel";

import "./ProductCard.scss";
import React, { useEffect } from "react";
import { cherry, prompt } from "@/app/utils/fonts";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";

interface IProductCardProp {
  product: ICards;
}

export const ProductCard = ({ product }: IProductCardProp) => {
  useEffect(() => {
    document.querySelectorAll(".fd-cl")?.forEach((el) => {
      el.classList.remove("opacity-0");
      el.classList.add("fd-cl-fadein");
    });
  }, []);

  // console.log("product :", product);

  return (
    <div className="pks-product-category hover:cursor-pointer">
      <div className="shadow-lg group flex flex-col justify-center mx-auto relative content-div rounded-md">
        <div className="fd-cl group-hover:opacity-25 h-[150px] bg-white border-r-4 overflow-hidden shadow-lg relative transition-all duration-200 ease-in rounded-lg opacity-0">
          <a href="" className="flex flex-col text-center h-full p-5">
            <i className=" h-16 flex items-center justify-center mb-4">
              <Image
                src={
                  product.image
                    ? String(getStrapiMedia(product.image))
                    : "/images/hero-slide-1.webp"
                }
                alt="product"
                className="w-full h-full object-cover max-h-16 m-auto"
                width={127}
                height={127}
                sizes="(max-width: 100%) 127px"
                unoptimized={true}
              />
              {/* <BlurImage image={product.image} /> */}
            </i>
            <p className={` h-9 text-md ${cherry.className} text-[#4d4d4d]`}>
              {product.name}
            </p>
          </a>
        </div>
        <div className="h-[150px] w-full absolute opacity-0 fd-sh group-hover:opacity-100 flex flex-col justify-center items-center text-center font-serif">
          <span
            className={`select-none text-lg sm:text-xl font-bold text-orange-600 tracking-wider leading-relaxed ${cherry.className}`}
          >
            {product.description}
          </span>
          <div className="pt-6 text-center">
            <button
              className=" rounded-lg py-2 bg-white btn btn-secondary transition-colors duration-200 ease-in-out "
              type="button"
            >
              <Link
                href={product.urlPath || ""}
                className={`text-center font-bold text-sm ${prompt.className}`}
              >
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
