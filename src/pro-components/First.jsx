// import React from "react";

// export const First = () => {
//   return (
//     <div className="bg-[#030712] flex items-center justify-center  w-full h-[556px] max-sm:h-[904px] max-sm:flex max-sm:flex-col-reverse">
//       <div className="h-[364px] w-[1280px] gap-[48px] flex flex-row max-sm:h-[428px] max-sm:flex">
//         <div className="w-[600px] h-[364px] flex flex-col  gap-[48px] max-sm:w-full max-sm:h-[240px] max-sm:flex max-sm:flex-col max-sm:gap-2">
//           <div className="text-[60px] font-bold text-white w-[400px] h-[72px] max-sm:w-[250px] max-sm:h-[40px] max-sm:text-[36px] max-sm:font-semibold">
//             Hi, I’m Tom 👋
//           </div>
//           <div className="w-[600px] h-[96px] text-[16px] font-normal text-white max-sm:h-[192px max-sm:font-normal max-sm:text-[16px]">
//             I specialize in full stack development, particularly with React.js
//             and Node.js. My main goal is to create exceptional digital
//             experiences that are fast, visually appealing, and accessible to
//             everyone. With over 7 years of experience in web development, I
//             continue to find joy in crafting innovative solutions and designs.
//           </div>
//           <div className="w-[600px] h-[56px] gap-[8px]">
//             <div className="w-[600px] h-[24px]  text-[16px] flex flex-row text-white gap-[8px]">
//               <img src="loc.png" alt="" />
//               Ulaanbaatar, Mongolia
//             </div>
//             <div className="w-[600px] h-[24px]  text-[16px] flex flex-row text-white gap-[8px]">
//               <img src="dot.png" alt="" /> Available for new projects
//             </div>
//           </div>
//         </div>
//         <div
//           className="w-[600px] h-[364px] flex items-end justify-end
//         "
//         >
//           <img className="w-[320px] h-[360px]" src="Pic Container.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const First = () => {
  return (
    <section className="w-full bg-[#030712] flex justify-center px-4 py-16">
      <div className="w-full max-w-[1280px] flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hi, I’m Tom 👋
          </h1>

          <p className="text-base text-[#D1D5DB] leading-relaxed">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>

          <div className="flex flex-col gap-2 text-white text-base">
            <div className="flex items-center gap-2">
              <img src="loc.png" alt="" className="w-5 h-5" />
              <span>Ulaanbaatar, Mongolia</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="dot.png" alt="" className="w-3 h-3" />
              <span>Available for new projects</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="Pic Container.png"
            alt=""
            className="w-[240px] sm:w-[280px] lg:w-[320px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};
