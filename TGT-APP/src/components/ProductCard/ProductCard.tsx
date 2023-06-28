import { ICardItem } from "@/models/productModel";
import "./ProductCard.scss";
import React from "react";

interface IProductCardProp {
  product: ICardItem;
}

export const ProductCard = ({ product }: IProductCardProp) => {
  return (
    <div className="tgt-product-category hover:cursor-pointer">
      <div className="shadow-lg group flex flex-col justify-center mx-auto relative content-div rounded-md">
        <div className="fd-cl group-hover:opacity-25 h-[150px] bg-white border-r-4 overflow-hidden shadow-lg relative transition-all duration-200 ease-in rounded-lg">
          <a href="" className="flex flex-col text-center h-full p-5">
            <i className=" h-16 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt="product"
                className="w-full h-full object-cover max-h-16 m-auto"
              />
            </i>
            <p className=" h-9 text-md">{product.title}</p>
          </a>
        </div>
        <div className="h-[150px] w-full absolute opacity-0 fd-sh group-hover:opacity-100 flex flex-col justify-center items-center text-center font-serif">
          <span className="select-none  text-lg sm:text-xl font-bold text-white tracking-wider leading-relaxed font-sans">
            {product.flavorText}
          </span>
          <div className="pt-6 text-center">
            <button className=" rounded-lg  p-2 bg-white " type="button">
              <a
                href=""
                className="text-center text-gray-700 font-bold text-sm"
              >
                ดูเพิ่มเติม
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};