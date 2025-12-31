// import React from "react";

// export const Fourth = () => {
//   return (
//     <div className="bg-[#111827] w-full h-[1140px] flex justify-center items-center">
//       <div className="w-[1280px] h-[948px] flex flex-col items-center gap-[48px]">
//         <div className="h-[72px] flex items-center w-[1216px] flex-col gap-[16px]">
//           <div className="bg-[#374151] h-[28px] w-[115px] flex justify-center items-center rounded-[12px] text-white text-[14px] font-medium">
//             Experience
//           </div>
//           <div className="text-white text-[20px] font-normal">
//             Here is a quick summary of my most recent experiences:
//           </div>
//         </div>
//         <div className="w-[896px] h-[288px] bg-[#1F2937] flex justify-center items-center rounded-xl">
//           <div className="flex flex-row justify-between w-[832px] h-[224px] ">
//             <img className="w-[206px] h-[28px]" src="upwork.png" alt="" />
//             <div className="w-[384px] h-[224px] text-white flex flex-col gap-[16px]">
//               <div className="font-semibold text-[20px]">
//                 Sr. Frontend Developer
//               </div>
//               <div className="flex flex-col gap-[4px] text-[16px] font-normal text-[#D1D5DB]">
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </div>
//                 <div>
//                   Ut pretium arcu et massa semper, id fringilla leo semper.
//                 </div>
//                 <div>Sed quis justo ac magna.</div>
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </div>
//               </div>
//             </div>
//             <div className="text-[#E5E7EB] w-[146px] flex justify-end">
//               Nov 2021 - Present
//             </div>
//           </div>
//         </div>
//         <div className="w-[896px] h-[264px] bg-[#1F2937] flex justify-center items-center rounded-xl">
//           <div className="flex flex-row justify-between w-[832px] h-[224px] ">
//             <img className="w-[206px] h-[28px]" src="upwork.png" alt="" />
//             <div className="w-[384px] h-[224px] text-white flex flex-col gap-[16px]">
//               <div className="font-semibold text-[20px]">Team Lead</div>
//               <div className="flex flex-col gap-[4px] text-[16px] font-normal text-[#D1D5DB]">
//                 <div>Sed quis justo ac magna.</div>
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </div>
//                 <div>Sed quis justo ac magna.</div>
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </div>
//               </div>
//             </div>
//             <div className="text-[#E5E7EB] w-[146px] flex justify-end">
//               Jul 2017 - Oct 2021
//             </div>
//           </div>
//         </div>
//         <div className="w-[896px] h-[180px] bg-[#1F2937] flex justify-center items-center rounded-xl">
//           <div className="flex flex-row justify-between w-[832px] h-[116px] ">
//             <img className="w-[206px] h-[28px]" src="upwork.png" alt="" />
//             <div className="w-[384px] h-[224px] text-white flex flex-col gap-[16px]">
//               <div className="font-semibold text-[20px]">
//                 Full Stack Developer
//               </div>
//               <div className="flex flex-col gap-[4px] text-[16px] font-normal text-[#D1D5DB]">
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
//                   ipsum dolor sit amet, consectetur adipiscing elit.
//                 </div>
//               </div>
//             </div>
//             <div className="text-[#E5E7EB] w-[146px] flex justify-end">
//               Dec 2015 - May 2017
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Fourth = () => {
  return (
    <section className="w-full bg-[#111827] flex justify-center px-4 py-16">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-[#374151] px-6 py-1 rounded-xl text-white text-sm font-medium">
            Experience
          </div>
          <p className="text-[#D1D5DB] text-base sm:text-lg">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        {/* Experience Cards */}
        <div className="w-full flex flex-col gap-6">
          {/* Card */}
          <div className="bg-[#1F2937] rounded-xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-start lg:justify-between">
              <img src="upwork.png" alt="" className="w-[160px] h-auto" />

              <div className="flex-1 text-white flex flex-col gap-4">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Sr. Frontend Developer
                </h3>

                <ul className="text-[#D1D5DB] text-sm sm:text-base space-y-1 list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>

              <div className="text-[#E5E7EB] text-sm sm:text-base whitespace-nowrap">
                Nov 2021 – Present
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#1F2937] rounded-xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-start lg:justify-between">
              <img src="upwork.png" alt="" className="w-[160px] h-auto" />

              <div className="flex-1 text-white flex flex-col gap-4">
                <h3 className="font-semibold text-lg sm:text-xl">Team Lead</h3>

                <ul className="text-[#D1D5DB] text-sm sm:text-base space-y-1 list-disc list-inside">
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>

              <div className="text-[#E5E7EB] text-sm sm:text-base whitespace-nowrap">
                Jul 2017 – Oct 2021
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#1F2937] rounded-xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-start lg:justify-between">
              <img src="upwork.png" alt="" className="w-[160px] h-auto" />

              <div className="flex-1 text-white flex flex-col gap-4">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Full Stack Developer
                </h3>

                <p className="text-[#D1D5DB] text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="text-[#E5E7EB] text-sm sm:text-base whitespace-nowrap">
                Dec 2015 – May 2017
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
