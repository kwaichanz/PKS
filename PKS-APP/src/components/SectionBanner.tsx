import { getExtractedData, getStrapiMedia } from "@/app/utils/api-helpers";
import { fetchAPI } from "@/app/utils/fetchApi";
import { noto } from "@/app/utils/fonts";
import React, { useEffect, useState } from "react";

interface IBannerData {
  title: string;
  subtitle: string;
  image?: any;
}

export const SectionBanner = () => {
  const [bannerData, setBannerData] = useState<IBannerData>();
  const fetchBanner = async () => {
    try {
      const path = "/section-banners";
      const urlParamsObject = {
        populate: "image",
        pagination: {},
      };

      const responseData = await fetchAPI(path, urlParamsObject);
      // console.log("responseData", responseData);
      const { title, subtitle, image } = getExtractedData(responseData)[0];
      // console.log("title", title);
      // console.log("subtitle", subtitle);

      // console.log("image", image?.data.attributes.url);
      setBannerData({ title, subtitle, image } as IBannerData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div
      className={`h-[300px] bg-cover filter`}
      style={{
        backgroundImage: `url(${
          bannerData?.image.data.attributes.url
            ? getStrapiMedia(bannerData?.image.data.attributes.url)
            : "/images/home-banner.webp"
        })`,
      }}
    >
      <div className="h-full max-w-[75rem] ml-auto mr-auto flex justify-end flex-col pb-8">
        <div
          className={`text-white ${noto.className} bg-black bg-opacity-25 p-4 pt-0 select-none`}
        >
          <h2 className={`${noto.className}`}>
            {bannerData?.title
              ? bannerData.title
              : " วิจัยและพัฒนาการปลูก กับโครงการฯ"}
          </h2>
          <p>
            {bannerData?.subtitle
              ? bannerData.subtitle
              : "การมีส่วนร่วมฟื้นฟูและอนุรักษ์ทรัพยากรธรรมชาติ \
              และสิ่งแวดล้อมของท้องถิ่นโดยเฉพาะป่าต้นน้ำ \
              ในขณะเดียวกันคาเฟ่อเมซอนก็ได้วัตถุดิบเป็นเมล็ดกาแฟคุณภาพเพื่อผู้บริโภคที่มาใช้บริการ"}
          </p>
        </div>
      </div>
    </div>
  );
};
