import { bubblegum } from "./utils/fonts";

export default function Loading() {
  return (
    <div className="min-h-[700px] w-full  flex justify-center items-center">
      <h1 className={`text-5xl ${bubblegum.className} text-amber-500`}>Loading... </h1>
      <h1 className="text-4xl loading loading-spinner loading-lg"></h1>
    </div>
  );
}
