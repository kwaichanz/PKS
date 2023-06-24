import { ICardItem } from "@/models/cardModel";
import React from "react";

interface IProductCardProp {
  product: ICardItem;
}

export const ProductCard = ({ product }: IProductCardProp) => {
  return (
    <div className=" h-[150px] bg-white border-r-4 overflow-hidden  shadow-md relative transition-all duration-200  ease-in">
      <a href="" className="block h-full p-5">
        <i className=" h-16 flex items-center  justify-center mb-4">
          <img
            src={product.image}
            alt="product"
            className="w-full h-full object-cover max-h-16 m-auto"
          />
        </i>
        <p className=" h-9 text-md">{product.title}</p>
      </a>
    </div>
  );
};
