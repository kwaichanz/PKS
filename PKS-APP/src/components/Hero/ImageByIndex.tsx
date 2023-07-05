      // Unused

import { StaticImageData } from "next/image";
import image1 from "../../../public/images/hero-slide-1.webp";
import image2 from "../../../public/images/hero-slide-2.webp";
import image3 from "../../../public/images/hero-slide-3.webp";
import image4 from "../../../public/images/hero-slide-4.webp";
import image5 from "../../../public/images/hero-slide-5.webp";

export const images: string[] | StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const imageByIndex = (index: number): string | StaticImageData =>
  images[index % images.length];

export default imageByIndex;
