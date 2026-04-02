import React from "react";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink
      to="/"
      className="group flex items-center gap-2 sm:gap-3 no-underline"
    >
      {/* Visual Icon: Responsive Scaling */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center overflow-hidden text-white">
          <FaCode className="text-sm sm:text-base" />
        </div>

        {/* Status Indicator (Responsive positioning) */}
        <span className="absolute -right-0.5 -bottom-0.5 sm:-right-1 sm:-bottom-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950 shadow-sm" />
      </div>

      {/* Brand Text: Responsive font sizes */}
      <div className="flex flex-col leading-[0.8] sm:leading-[0.9]">
        <h1 className="text-lg sm:text-xl md:text-2xl tracking-tighter flex items-center">
          {/* Code */}
          <span className="font-bold text-blue-600 dark:text-blue-400 jetbrains">
            Code
          </span>
          {/* Guard */}
          <span className="font-extrabold jetbrains ">Guard</span>
          {/* Labs */}
          <span className="font-semibold text-slate-500 dark:text-slate-500 ml-0.5 sm:ml-1 playwrite">
            Labs
          </span>
        </h1>

        <p
          className="
  /* Font Size: Scales from tiny (6px) to standard (7.5px) */
  text-[6px] sm:text-[7.5px] 
  
  /* Letter Spacing: Tighten on mobile to prevent overflow, expand on desktop */
  tracking-[0.2em] sm:tracking-[0.4em] 
  
  /* Layout: Ensure it doesn't wrap to a second line */
  whitespace-nowrap 
  
  font-bold uppercase text-slate-400 dark:text-slate-600 mt-1 
  transition-colors group-hover:text-blue-500"
        >
          precision in every byte
        </p>
      </div>
    </NavLink>
  );
};

export default Logo;
