import { Hero } from "@/components/Hero/Hero";
import { ProductCard } from "@/components/ProductCard/ProductCard";

import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { Feeds } from "@/components/Feeds/Feeds";

import { cardItems, feeds } from "../../mocks/product_card_items";
import { featuredProducts } from "../../mocks/featured_products";

import { Thasadith, Noto_Sans_Thai } from "next/font/google";
const thasadith = Thasadith({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const noto = Noto_Sans_Thai({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <Hero />
      <main className="w-full h-full relative bg-white">
        <section className="relative mr-auto ml-auto max-w-[1000px] mb-36 mt-16">
          <header className="mb-12 block text-center mt-10 mx-2">
            <h1 className={`text-3xl font-extrabold ${noto.className}`}>
              สินค้า <span className="text-blue-500">TGT</span>
            </h1>
            <p className={`mt-4 text-md md:text-md ${thasadith.className}`}>
              มุ่งพัฒนาการเกษตรให้มีความหลากหลายครอบคลุมทุกการใช้งาน
              <br />
              ในภาคเกษตรกรรมเพื่อตอบสนองทุกความต้องการ
            </p>
          </header>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4">
            {cardItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
        <article>
          <FeaturedProducts featured={featuredProducts} />
        </article>
        <article className="h-[300px]  bg-[url('/images/home-banner.jpg')] bg-cover filter hue-rotate-15">
          <div className="h-full max-w-[75rem] ml-auto mr-auto flex justify-end flex-col pb-8">
            <div
              className={`text-white ${noto.className} bg-black bg-opacity-25 p-4 pt-0`}
            >
              <h2 className={`${noto.className}`}>
                วิจัยและพัฒนาการปลูก กับโครงการฯ
              </h2>
              <p>
                การมีส่วนร่วมฟื้นฟูและอนุรักษ์ทรัพยากรธรรมชาติ
                และสิ่งแวดล้อมของท้องถิ่นโดยเฉพาะป่าต้นน้ำ
                ในขณะเดียวกันคาเฟ่อเมซอนก็ได้วัตถุดิบเป็นเมล็ดกาแฟคุณภาพเพื่อผู้บริโภคที่มาใช้บริการ{" "}
              </p>
            </div>
          </div>
        </article>
        <article>
          <Feeds feeds={feeds} />
        </article>
      </main>
    </div>
  );
}
