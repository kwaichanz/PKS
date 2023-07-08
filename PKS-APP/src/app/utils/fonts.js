import {
  Noto_Sans_Thai,
  Thasadith,
  Bubblegum_Sans,
  Kanit,
  Montserrat_Alternates,
  Cherry_Bomb_One,
  Prompt,
} from "next/font/google";

export const noto = Noto_Sans_Thai({
  subsets: ["latin"],
  display: "auto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const thasadith = Thasadith({
  subsets: ["latin"],
  display: "auto",
  weight: ["400", "700"],
});

export const bubblegum = Bubblegum_Sans({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
  preload: true,
});

export const kanit = Kanit({
  subsets: ["latin"],
  display: "auto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  display: "auto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const cherry = Cherry_Bomb_One({
  subsets: ["latin"],
  display: "auto",
  weight: ["400"],
});

export const prompt = Prompt({
  subsets: ["latin"],
  display: "auto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
