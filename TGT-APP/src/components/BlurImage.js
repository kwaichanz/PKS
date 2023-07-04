import Image, { StaticImageData } from "next/image";
import React from "react";

export default function BlurImage({ image }) {
  const [isLoading, setIsLoading] = React.useState(true);


// console.log('image : ',image);
  return (
    <Image
      className={`embla__slide__img relative object-cover -z-10 duration-700 ease-in-out               ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      })`}
      unoptimized={true}
      src={image}
      alt="hero image" 
      fill
      priority
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
}
