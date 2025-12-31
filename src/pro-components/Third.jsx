// import React from "react";
// import { Data } from "./Data";

// export const Third = () => {
//   return (
//     <div className="w-full h-[560px] bg-[#030712] flex justify-center items-center">
//       <div className="w-[1280px] h-[368px] flex flex-col justify-center gap-[48px]">
//         <div className="w-[1216px] h-[72px] flex justify-center items-center flex-col gap-[16px]">
//           <div className="bg-[#374151] w-[75px] h-[28px] rounded-xl text-[#D1D5DB] text-[12px] flex items-center justify-center">
//             Skills
//           </div>
//           <div className="text-[#D1D5DB] text-[20px]">
//             The skills, tools and technologies I am really good at:
//           </div>
//         </div>
//         <div className="w-[1216px] h-[248px] grid grid-cols-8 gap-x-[86px] gap-y-12">
//           {Data.map((item) => (
//             <div className="flex flex-col justify-center items-center gap-2">
//               <img src={item.image} alt="" />
//               <p className="font-normal text-[18px] text-[#D1D5DB]">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Data } from "./Data";

export const Third = () => {
  return (
    <section className="w-full bg-[#030712] flex justify-center px-4 py-16">
      <div className="w-full max-w-[1280px] flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-[#374151] px-5 py-1 rounded-xl text-[#D1D5DB] text-sm">
            Skills
          </div>
          <p className="text-[#D1D5DB] text-base sm:text-lg">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-8
            gap-x-8
            gap-y-10
            justify-items-center
          "
        >
          {Data.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <p className="text-sm sm:text-base text-[#D1D5DB]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
