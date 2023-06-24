import { Hero } from "@/components/Hero/Hero";
import { ProductCard } from "@/components/ProductCard";

import { cardItems } from "../../mocks/product_card_items";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <Hero />
      <main className="w-full h-full relative bg-white">
        <div className="relative  mr-auto ml-auto max-w-[1200px]">
          <div className="mt-0 mb-10 block text-center lg:mt-20">
            <h1 className=" text-3xl font-extrabold">
              สินค้า <span className="text-blue-500">TGT</span>
            </h1>
            <p>
              มุ่งพัฒนาการเกษตรให้มีความหลากหลายครอบคลุม
              <br />
              ในภาคเกษตรกรรมเพื่อตอบสนองทุกความต้องการ
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {cardItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
