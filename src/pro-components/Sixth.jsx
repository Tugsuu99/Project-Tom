// import React from "react";

// export const Sixth = () => {
//   return (
//     <div className="bg-[#030712] w-full h-[560px] flex items-center">
//       <div className="w-full h-[368px] flex flex-col justify-center items-center gap-[48px]">
//         <div className="h-[100px] flex flex-col items-center gap-[16px]">
//           <div className="w-[122px] h-[28px] bg-[#374151] rounded-xl flex justify-center items-center text-[14px] font-medium text-[#D1D5DB]">
//             Get in touch
//           </div>
//           <div className="w-[576px] h-[56px] text-[#D1D5DB] text-[20px] font-normal">
//             What’s next? Feel free to reach out to me if you're looking for a
//             developer, have a query, or simply want to connect.
//           </div>
//         </div>
//         <div className="w-[436px] h-[104px] flex flex-col items-center gap-[16px]">
//           <div className="text-[36px] h-[44px] text-[#F9FAFB] font-semibold flex flex-row items-center justify-center gap-[20px]">
//             <img className="w-[32px] h-[32px]" src="mess.png" alt="" />
//             <div> tom@pinecone.mn</div>
//             <img className="w-[32px] h-[32px]" src="copy.png" alt="" />
//           </div>
//           <div className="text-[36px] w-[380px] h-[44px] text-[#F9FAFB] font-semibold flex flex-row items-center justify-center gap-[20pxs">
//             <img className="w-[36px] h-[36px]" src="call.png" alt="" />
//             <div>+976 88112233</div>
//             <img className="w-[32px] h-[32px]" src="copy.png" alt="" />
//           </div>
//         </div>
//         <div className="w-[312px] h-[68px] flex flex-col items-center gap-[8px]">
//           <div className="w-[312px] h-[24px] text-[16px] text-[#D1D5DB] ">
//             You may also find me on these platforms!
//           </div>
//           <div>
//             <img className="w-[116px] h-[36px]" src="links.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Sixth = () => {
  return (
    <section className="w-full bg-[#030712] flex justify-center px-4 py-20">
      <div className="w-full max-w-[900px] flex flex-col items-center gap-12 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-[600px]">
          <div className="bg-[#374151] px-6 py-1 rounded-xl text-sm font-medium text-[#D1D5DB]">
            Get in touch
          </div>

          <p className="text-[#D1D5DB] text-base sm:text-lg">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-[#F9FAFB]">
            <img src="mess.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-xl sm:text-2xl font-semibold">
              tom@pinecone.mn
            </span>
            <img
              src="copy.png"
              alt=""
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-[#F9FAFB]">
            <img src="call.png" alt="" className="w-7 h-7 sm:w-9 sm:h-9" />
            <span className="text-xl sm:text-2xl font-semibold">
              +976 88112233
            </span>
            <img
              src="copy.png"
              alt=""
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm sm:text-base text-[#D1D5DB]">
            You may also find me on these platforms!
          </p>
          <img src="links.png" alt="" className="w-[116px] h-auto" />
        </div>
      </div>
    </section>
  );
};
