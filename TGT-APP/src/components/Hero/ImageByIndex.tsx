import { StaticImageData } from "next/image";
import image1 from "../../../public/images/hero-slide-1.jpg";
import image2 from "../../../public/images/hero-slide-4.jpg";
import image3 from "../../../public/images/hero-slide-2.jpg";
import image4 from "../../../public/images/hero-slide-3.jpg";
import image5 from "../../../public/images/hero-slide-5.jpg";

console.log(image1, image2, image3, image4, image5);

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
