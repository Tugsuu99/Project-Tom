import React from "react";
import { Rubik_Mono_One } from "next/font/google";
const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export const Supports = () => {
  return (
    <div className="w-full h-[68px] flex justify-between items-center bg-[#030712] p-[32px] max-sm">
      <div
        className={`text-3xl h-[36px] w-[76px] font-normal text-white ${rubik.className}`}
      >
        TOM
      </div>
      <div className="flex gap-[24px] w-[554px]  text-white max-sm:hidden">
        <div className="text-[16px] font-medium  text-white">About</div>
        <div className="text-[16px] font-medium  text-white">Work</div>
        <div className="text-[16px] font-medium  text-white">Testimonials</div>
        <div className="text-[16px] font-medium  text-white">Contact</div>
        <div className="border-[1px] w-[0px] h-[24px] rotate-[90] bg-[#1F2937]"></div>
        <img className="w-[24px] h-[24px]" src="Icon.png" alt="" />
        <button className="w-[136px] h-[36px] font-medium text-[16px] text-[#030712] bg-white rounded-xl">
          Download CV
        </button>
      </div>
    </div>
  );
};
