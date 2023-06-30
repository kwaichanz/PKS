import {
  Noto_Sans_Thai,
  Thasadith,
  Rampart_One,
  Bubblegum_Sans,
  Kanit,
  Montserrat_Alternates,
  IBM_Plex_Sans_Thai,
  Anuphan,
  Cherry_Bomb_One
} from "next/font/google";


export const noto = Noto_Sans_Thai({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const thasadith = Thasadith({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const rampart = Rampart_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const bubblegum = Bubblegum_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ibm = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700",],
});

export const anuphan = Anuphan({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700",],
});

export const cherry = Cherry_Bomb_One({
  subsets: ["latin"],
  display: "swap",
  weight: [ "400"],
});