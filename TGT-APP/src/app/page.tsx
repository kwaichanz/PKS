import { Hero } from "@/components/Hero/Hero";
import { ProductCard } from "@/components/ProductCard/ProductCard";

import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";

import { cardItems } from "../../mocks/product_card_items";
import { featuredProducts } from "../../mocks/featured_products";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <Hero />
      <main className="w-full h-full relative bg-white">
        <section className="relative mr-auto ml-auto max-w-[1000px]">
          <header className="mb-12 block text-center mt-10 mx-2">
            <h1 className=" text-3xl font-extrabold">
              สินค้า <span className="text-blue-500">TGT</span>
            </h1>
            <p className="mt-4 text-md md:text-md">
              มุ่งพัฒนาการเกษตรให้มีความหลากหลายครอบคลุมทุกการใช้งาน
              <br />
              ในภาคเกษตรกรรมเพื่อตอบสนองทุกความต้องการ
            </p>
          </header>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-28 px-4">
            {cardItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
        <article>
          <FeaturedProducts featured={featuredProducts} />
        </article>
      </main>
    </div>
  );
}
