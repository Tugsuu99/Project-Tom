// import React from "react";

// export const Second = () => {
//   return (
//     <div className="w-full h-[826px] bg-[#111827] flex items-center justify-center">
//       <div className="h-[634px] w-[1280px] flex flex-row text-white">
//         <div className="w-[584px] h-[558px]">
//           <img className="w-[490px] h-[520px]" src="column.png" alt="" />
//         </div>
//         <div className="w-[584px] h-[558px] flex flex-col gap-[24px]">
//           <div className="text-[30px] test-white font-bold w-[503px] h-[36px] ">
//             Curious about me? Here you have it:
//           </div>
//           <div className="w-[584px] h-[498px] text-white gap-[16px] text-[16px] flex flex-col">
//             <div>
//               I'm a designer turned full stack developer, passionate about
//               React.js and Node.js. I excel in blending technical and visual
//               aspects to craft exceptional digital products, prioritizing user
//               experience, precise design, and optimized code.
//             </div>
//             <div>
//               Since starting my web development journey in 2015, I've embraced
//               challenges and kept up with the latest tech trends. Now in my
//               early thirties, seven years in, I'm building cutting-edge web apps
//               using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
//               more.
//             </div>
//             <div>
//               With a progressive mindset, I enjoy the entire product development
//               process, from ideation to execution. Off duty, you'll find me on
//               Twitter, tracking startup journeys, or unwinding. Follow me for
//               tech insights and public project updates on Twitter or GitHub.
//             </div>
//             <div>Finally, some quick bits about me.</div>
//             <div className="flex flex-row flex-wrap">
//               <div>B.E. in Computer Engineering</div>
//               <div>Avid learner</div>
//               <div>Full time freelancer</div>
//             </div>
//             <div>
//               One last thing, I'm available for freelance work, so feel free to
//               reach out and say hello! I promise I don't bite 😉
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Second = () => {
  return (
    <section className="w-full bg-[#111827] flex justify-center px-4 py-16">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center gap-12 text-white">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="column.png"
            alt=""
            className="w-full max-w-[490px] h-auto"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Curious about me? Here you have it:
          </h2>

          <div className="flex flex-col gap-4 text-[#D1D5DB] text-base leading-relaxed">
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>

            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>

            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>

            <p className="font-medium text-white">
              Finally, some quick bits about me.
            </p>

            {/* Bullet-like tags */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-[#1F2937] px-3 py-1 rounded-lg">
                B.E. in Computer Engineering
              </span>
              <span className="bg-[#1F2937] px-3 py-1 rounded-lg">
                Avid learner
              </span>
              <span className="bg-[#1F2937] px-3 py-1 rounded-lg">
                Full time freelancer
              </span>
            </div>

            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
