import React, { useState, useEffect, useCallback, useRef } from "react";
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
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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
                  <div className="w-3/4 sm:w-3/4 lg:max-w-2xl lg:h-1/4 bg-black bg-opacity-5 rounded-tl-3xl rounded-br-3xl p-3">
                    <h1
                      className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br 
                    from-[#3eb35f] from-10% via-[#aacc00] via-50% to-[#9b5d33] to-70% 
                    text-xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2.2px_1.2px_rgba(255,255,100,0.8)]"
                    >
                      UNLEASHING THE POSSIBILITIES OF TEA
                    </h1>
                    <div className="text-lg sm:text-2xl text-gray-50 font-semibbold mt-2">
                      <p className="">
                        The world's leading pure-play coffee and tea company,
                      </p>
                      <p>serving approximately 4,200 cups of tea per second</p>
                    </div>
                  </div>
                  {/* <button
                    type="button"
                    className="btn btn-accent uppercase mt-3 ml-1 text-xs sm:text-base"
                  >
                    Discover More
                  </button> */}
                </div>
                <Image
                  className="embla__slide__img relative object-cover -z-10"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                  fill
                />
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
