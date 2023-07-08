import { redirect } from "next/navigation";
import React from "react";

export default function NotFound() {
    redirect("/");
  return (
    <div className="flex justify-center items-center text-center h-[800px] w-full">
      <p className="text-8xl font-serif">Page Not Found</p>
    </div>
  );
}
