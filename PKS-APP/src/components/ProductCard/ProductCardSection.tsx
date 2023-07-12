import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

import { ProductCard } from "./ProductCard";
import { cardItems } from "../../../mocks/product_card_items";
import { cherry, noto, thasadith } from "@/app/utils/fonts";
import { fetchAPI } from "@/app/utils/fetchApi";
// import { ICards } from "@/models/productModel";

interface ICards {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const ProductCardSection = () => {
  const [cards, setCards] = useState<ICards[] | null>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const fetchCards = async () => {
    try {
      const path = `/product-categories`;
      const urlParamsObject = {
        populate: "image",
        pagination: {},
      };
      const responseData = await fetchAPI(path, urlParamsObject);
      //   console.log("responseData", responseData);

      // Could refactor later with a utility function
      const cards = await responseData?.data?.map((data: any, index: number) => {
        // console.log("data", data);
        // console.log("index", index);
        return {
          id: index,
          name: data?.attributes.Name,
          description: data?.attributes.Description,
          image: data?.attributes.image.data.attributes.formats.small.url,
          urlPath: data?.attributes.urlPath,
        };
      });
      // console.log("cards :", cards);
      setCards(cards as ICards[]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <>
      <header className="mb-12 block text-center mt-10 mx-2 select-none">
        <h1 className={`text-3xl font-extrabold ${noto.className}`}>
          สินค้า{" "}
          <span className={`text-amber-600 ${cherry.className} `}>PKS</span>
        </h1>
        <p className={`mt-4 text-md md:text-md ${thasadith.className}`}>
          <Balancer>
            มุ่งพัฒนาการเกษตรให้มีความหลากหลายครอบคลุมทุกการใช้งาน
            ในภาคเกษตรกรรมเพื่อตอบสนองทุกความต้องการ
          </Balancer>
        </p>
      </header>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols--2 md:grid-cols-3 lg:grid-cols-4  px-4">
        {/* Failed safe in case the server went down */}
        {cards!.length > 0 ? (
          <>
            {!isLoading && (
              <>
                {cards?.map((item) => (
                  <>
                    <ProductCard key={item.id} product={item} />
                  </>
                ))}
              </>
            )}
          </>
        ) : (
          <>
            {!isLoading &&
              cardItems.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </>
        )}
      </div>
    </>
  );
};
