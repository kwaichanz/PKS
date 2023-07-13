import Hero from "@/components/Hero/Hero";
import React from "react";

type ProductProps = {};

const Products = (props: ProductProps) => {
  const bannerData: string[] = [];
  return (
    <div className="flex flex-col items-center relative select-none min-h-[1000px] ">
      <Hero bannerData={bannerData} isLoading={false} />
      <div>Products</div>
    </div>
  );
};

export default Products;
  