import React, { useState, useEffect, useCallback, useRef, Suspense } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";
import imageByIndex from "./ImageByIndex";
import Autoplay from "embla-carousel-autoplay";
import { kanit,  prompt } from "@/app/utils/fonts";
import { fetchAPI } from "@/app/utils/fetchApi";
import BlurImage from "../BlurImage";
import { getStrapiMedia } from "@/app/utils/api-helpers";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
var imgUrl: string | null = 'http://localhost:1337/uploads/hero_slide_1_032ea78295.jpg'
  const fetchImages = async () => {
    try {
      const path = `/hero-slide-images`;
      const urlParamsObject = {
        populate: "image",
        pagination: {
          // start: start,
          // limit: limit
        }
      };

      console.log('slides', slides);
      console.log('imgbyidx', imageByIndex(1))

      // const options = {headers: { Authorization: `Bearer ${token}`}}

      const responseData = await fetchAPI(path, urlParamsObject);
      console.log('response data : ', responseData);

      const images = responseData.data[0].attributes.image.data;
      console.log('images: ',images[0].attributes.url);

      imgUrl = getStrapiMedia(images[0]?.attributes?.url)
      console.log('imgUrl : ',imgUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  },[])

  return (
    <>
      <div className="embla select-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container relative mx-auto w-screen">
            {slides.map((index) => (
              <div
                className="embla__slide relative  flex-[0_0_100%]"
                key={index}
              >
                <div className="embla__slide__text w-full h-full">
                  <div className="w-3/4 sm:w-3/4 lg:max-w-2xl lg:h-1/4 rounded-tl-3xl rounded-br-3xl p-3">
                    <h1
                      className={`${prompt.className} text-amber-700
                    text-xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold`}
                    >
                      ขายส่งเมล็ดกาแฟคั่ว เกรดสำหรับร้านกาแฟ
                    </h1>
                    <div
                      className={`${kanit.className} text-lg sm:text-2xl text-gray-50 font-semibbold mt-2 drop-shadow-[0_4.2px_1.2px_rgba(33,33,33,0.8)]`}
                    >
                      <p className="">
                        The industry leading pure-play coffee company,
                      </p>
                      <p>serving approximately 4,200 cups of tea per second</p>
                    </div>
                  </div>
                </div>
                <BlurImage image={imgUrl}  />
              </div>
                      

            ))}{" "}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
