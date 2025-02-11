// import React from "react";
// import Image from "next/image";
// import logo from "../public/images/askhole_white.png";

// const Footer = () => {
//   return (
//     // <footer className="border-t border-orange-300 mt-8 pt-8 container mx-auto p-4 text-center text-sm text-gray-500">
//     <footer className="container mx-auto mt-32 mb-8 px-4 py-16 bg-teal-950 rounded-3xl shadow-xl">
//       <div className="w-full flex justify-center">
//         <Image src={logo} alt="logo of askhole" />
//       </div>

//       <p className="text-center text-sm text-gray-500">
//         Created using Next.js, React.js, TypeScript, and Tailwind CSS.
//         Repository hosted on{" "}
//         <a
//           href="https://github.com/opp-dev/eselco-website"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline"
//         >
//           GitHub
//         </a>
//         . Content managed with{" "}
//         <a
//           href="https://obsidian.md/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline"
//         >
//           Obsidian
//         </a>
//         .
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";
import logo from "../public/images/askhole_white.png";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-32 mb-8 px-4 px-16 py-16 bg-teal-950 rounded-3xl shadow-xl flex flex-col gap-8">
      <div className="w-full flex justify-center">
        <Image src={logo} alt="logo of askhole" />
      </div>

      <div className="flex justify-between px-8 pt-8 gap-10">
        <div className="basis-[30%]">
          <p className="text-slate-300 text-[18px] font-light leading-[180%]">
            This project has been created using NextJS, ReactJS and Typescript.
            The repository is hosted on{" "}
            <a
              href="https://github.com/opp-dev/eselco-website"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>{" "}
            and the content is managed with a local version of{" "}
            <a
              href="https://obsidian.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Obsidian
            </a>
            .
          </p>
        </div>
        <div className="basis-[40%]">
          <p className="text-slate-300 text-[18px] font-light leading-[180%]">
            This project is completely created using AI. The purpose of this
            project is test the capabilities of various AI systems to assist in
            creating a relatively simple web project. <br /> <br />
            The styling and the concept is created and curated by me, but all of
            the code is written with help of AI models.
          </p>
        </div>
        <div className="basis-[30%]">
          <p className="text-slate-300 text-[18px] font-light leading-[180%]">
            AI systems used:{" "}
            <a
              href="https://gemini.google.com/" // Replace with actual link if available
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Gemini
            </a>
            ,{" "}
            <a
              href="https://claude.ai/" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Claude
            </a>
            ,{" "}
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ChatGPT
            </a>
            , Lovable,{" "}
            <a
              href="https://cursor.so/" // Replace with actual link if available
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Cursor
            </a>
            ,{" "}
            <a
              href="https://github.com/features/copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Co-pilot
            </a>
            , Windsurf.
          </p>
        </div>
      </div>

      {/* Bottom Row: Three Columns (Flexbox) */}
      <div className="flex justify-between text-center text-sm text-gray-500">
        {" "}
        {/* Flexbox for columns */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
