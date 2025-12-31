// import React from "react";
// import { App } from "./App";

// export const Fifth = () => {
//   return (
//     <div className="w-full h-[1848px] bg-[#030712] flex justify-center items-center">
//       <div className="w-[1280px] h-[1656px] flex flex-col items-center gap-[48px]">
//         <div className="h-[72px] flex items-center w-[1216px] flex-col gap-[16px]">
//           <div className="bg-[#374151] h-[28px] w-[75px] flex justify-center items-center rounded-[12px] text-white text-[14px] font-medium">
//             Work
//           </div>
//           <div className="text-[#D1D5DB] text-[20px] font-normal">
//             Some of the noteworthy projects I have built:
//           </div>
//         </div>
//         <div className="w-[1152px] h-[480px] rounded-xl flex flex-row  bg-[#1F2937]">
//           <div className="w-[576px] h-[480px] bg-[#374151]  rounded-l-xl rounded-r-[1px] flex justify-center items-center">
//             <img className="w-[480px] h-[384px]" src="ub.png" alt="" />
//           </div>
//           <div className="w-[576px] h-[480px] flex flex-col p-[48px] gap-[24px]">
//             <div className="text-[20px] text-white font-semibold">UBCab</div>
//             <div className="text-[#D1D5DB] text-16px font-normal">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
//               in faucibus orci luctus et ultrices posuere cubilia curae.
//             </div>
//             <div className="flex flex-wrap w-[480px] h-[100px] gap-[8px]">
//               {App.map((item) => (
//                 <div className="w-fit h-[28px] rounded-xl bg-[#374151] flex items-center justify-center pt-1 pb-1 pr-5 pl-5">
//                   <div className="j-[20px] font-normal text-[14px] text-[#d1d5db] ">
//                     {item.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <img className="w-[36px] h-[36px]" src="share.png" alt="" />
//           </div>
//         </div>
//         <div className="w-[1152px] h-[480px] rounded-xl flex flex-row">
//           <div className="w-[576px] h-[480px] flex flex-col gap-[24px] p-[48px] bg-[#1F2937] rounded-l-xl">
//             <div className="text-[20px] text-white font-semibold">
//               Mentorhub
//             </div>
//             <div className="text-[#D1D5DB] text-16px font-normal">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
//               in faucibus orci luctus et ultrices posuere cubilia curae.
//             </div>
//             <div className="flex flex-wrap w-[480px] h-[100px] gap-[8px]">
//               {App.map((item) => (
//                 <div className="w-fit h-[28px] rounded-xl bg-[#374151] flex items-center justify-center pt-1 pb-1 pr-5 pl-5">
//                   <div className="j-[20px] font-normal text-[14px] text-[#d1d5db] ">
//                     {item.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <img className="w-[36px] h-[36px]" src="share.png" alt="" />
//           </div>
//           <div className="w-[576px] h-[480px] bg-[#374151] rounded-r-xl flex justify-center items-center">
//             <img className="w-[480px] h-[384px]" src="2.png" alt="" />
//           </div>
//         </div>
//         <div className="w-[1152px] h-[480px] rounded-xl flex flex-row">
//           <div className="w-[576px] h-[480px] bg-[#374151] rounded-l-xl flex justify-center items-center">
//             <img className="w-[480px] h-[384px]" src="3.png" alt="" />
//           </div>
//           <div className="w-[576px] h-[480px] flex flex-col p-[48px] gap-[24px] bg-[#1F2937]">
//             <div className="text-[20px] text-white font-semibold">IToim</div>
//             <div className="text-[#D1D5DB] text-16px font-normal">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
//               in faucibus orci luctus et ultrices posuere cubilia curae.
//             </div>
//             <div className="flex flex-wrap w-[480px] h-[100px] gap-[8px]">
//               {App.map((item) => (
//                 <div className="w-fit h-[28px] rounded-xl bg-[#374151] flex items-center justify-center pt-1 pb-1 pr-5 pl-5">
//                   <div className="j-[20px] font-normal text-[14px] text-[#d1d5db] ">
//                     {item.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <img className="w-[36px] h-[36px]" src="share.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { App } from "./App";

export const Fifth = () => {
  return (
    <div className="w-full bg-[#030712] flex justify-center px-4 py-16">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-[#374151] h-7 px-5 flex items-center rounded-xl text-white text-sm font-medium">
            Work
          </div>
          <div className="text-[#D1D5DB] text-lg md:text-xl">
            Some of the noteworthy projects I have built:
          </div>
        </div>

        {/* Project 1 */}
        <div className="w-full flex flex-col lg:flex-row bg-[#1F2937] rounded-xl overflow-hidden">
          <div className="w-full lg:w-1/2 bg-[#374151] flex justify-center items-center p-6">
            <img className="w-full max-w-[480px] h-auto" src="ub.png" alt="" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col p-6 md:p-12 gap-6">
            <div className="text-xl text-white font-semibold">UBCab</div>
            <div className="text-[#D1D5DB] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra.
            </div>

            <div className="flex flex-wrap gap-2">
              {App.map((item) => (
                <div
                  key={item.name}
                  className="h-7 px-4 rounded-xl bg-[#374151] flex items-center text-sm text-[#D1D5DB]"
                >
                  {item.name}
                </div>
              ))}
            </div>

            <img className="w-9 h-9" src="share.png" alt="" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full flex flex-col-reverse lg:flex-row bg-[#1F2937] rounded-xl overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col p-6 md:p-12 gap-6">
            <div className="text-xl text-white font-semibold">Mentorhub</div>
            <div className="text-[#D1D5DB] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra.
            </div>

            <div className="flex flex-wrap gap-2">
              {App.map((item) => (
                <div
                  key={item.name}
                  className="h-7 px-4 rounded-xl bg-[#374151] flex items-center text-sm text-[#D1D5DB]"
                >
                  {item.name}
                </div>
              ))}
            </div>

            <img className="w-9 h-9" src="share.png" alt="" />
          </div>

          <div className="w-full lg:w-1/2 bg-[#374151] flex justify-center items-center p-6">
            <img className="w-full max-w-[480px] h-auto" src="2.png" alt="" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full flex flex-col lg:flex-row bg-[#1F2937] rounded-xl overflow-hidden">
          <div className="w-full lg:w-1/2 bg-[#374151] flex justify-center items-center p-6">
            <img className="w-full max-w-[480px] h-auto" src="3.png" alt="" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col p-6 md:p-12 gap-6">
            <div className="text-xl text-white font-semibold">IToim</div>
            <div className="text-[#D1D5DB] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra.
            </div>

            <div className="flex flex-wrap gap-2">
              {App.map((item) => (
                <div
                  key={item.name}
                  className="h-7 px-4 rounded-xl bg-[#374151] flex items-center text-sm text-[#D1D5DB]"
                >
                  {item.name}
                </div>
              ))}
            </div>

            <img className="w-9 h-9" src="share.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
