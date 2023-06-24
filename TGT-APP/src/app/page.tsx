import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Hero />
    </main>
  );
}
