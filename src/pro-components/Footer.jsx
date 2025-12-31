import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#111827] w-full h-[68px] flex items-center justify-center">
      <div className="w-[320px] h-[20px] flex flex-row   items-center justify-center gap-[16px] text-[#D1D5DB] text-[14px] font-normal">
        <img className="w-[16px] h-[16px]" src="last.png" alt="" />
        <div className="w-[304] h-[20px]">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </div>
      </div>
    </div>
  );
};
