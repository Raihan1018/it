import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your custom icon components
import { MicrosoftNET } from "./TechnologiesIcon/MicrosoftNET";
import { Java } from "./TechnologiesIcon/Java";
import { JavaScript } from "./TechnologiesIcon/JavaScript";
import { MongoDB } from "./TechnologiesIcon/MongoDB";
import { MySQL } from "./TechnologiesIcon/MySQL";
import { Nextjs } from "./TechnologiesIcon/NextJS";
import { Nodejs } from "./TechnologiesIcon/NodeJS";
import { Authjs } from "./TechnologiesIcon/Authjs";
import { OpenAI } from "./TechnologiesIcon/OpenAI";
import { PostgreSQL } from "./TechnologiesIcon/PostgreSQL";
import { Python } from "./TechnologiesIcon/Python";
import { ReactJS } from "./TechnologiesIcon/ReactJS";
import { TypeScript } from "./TechnologiesIcon/TypeScript";
import { WordPress } from "./TechnologiesIcon/WordPress";

const techData = [
  { name: "React JS", icon: <ReactJS />, category: "frontend" },
  { name: "Next.js", icon: <Nextjs />, category: "frontend" },
  { name: "JavaScript", icon: <JavaScript />, category: "frontend" },
  { name: "TypeScript", icon: <TypeScript />, category: "frontend" },
  { name: "Node.js", icon: <Nodejs />, category: "backend" },
  { name: "Java", icon: <Java />, category: "backend" },
  { name: "Python", icon: <Python />, category: "backend" },
  { name: ".NET", icon: <MicrosoftNET />, category: "backend" },
  { name: "PostgreSQL", icon: <PostgreSQL />, category: "database" },
  { name: "MySQL", icon: <MySQL />, category: "database" },
  { name: "MongoDB", icon: <MongoDB />, category: "database" },
  { name: "Auth.js", icon: <Authjs />, category: "tools" },
  { name: "OpenAI", icon: <OpenAI />, category: "tools" },
  { name: "WordPress", icon: <WordPress />, category: "tools" },
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("all");
  const categories = ["all", "frontend", "backend", "database", "tools"];

  const filteredTech =
    activeTab === "all"
      ? techData
      : techData.filter((t) => t.category === activeTab);

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-[#0b1120] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- PART 1: PRE-DISTRIBUTED SOLAR SYSTEM --- */}
        <div className="relative h-[500px] md:h-[650px] flex items-center justify-center mb-20">
          {/* Ambient Background Glows */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Central Core */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-50 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.4)] border border-white/20"
          >
            <div className="text-white font-black text-center flex flex-col leading-tight">
              <span className="text-[10px] opacity-70 tracking-[0.2em]">
                CORE
              </span>
              <span className="text-sm md:text-lg">STACK</span>
            </div>
            {/* Pulse Effects */}
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 border border-blue-400 rounded-full"
            />
          </motion.div>

          {/* Orbiting Icons with Randomized Start Positions */}
          {techData.map((tech, i) => {
            const orbitSize = 180 + i * 38; // Even spacing
            const duration = 25 + i * 2; // Varying speeds
            const reverse = i % 2 === 0 ? 1 : -1;
            // This is the magic: start each icon at a different degree (360 / total icons * index)
            const startAngle = (360 / techData.length) * i;

            return (
              <React.Fragment key={`orbit-item-${i}`}>
                {/* Visual Ring */}
                <div
                  className="absolute border border-slate-200 dark:border-white/5 rounded-full pointer-events-none"
                  style={{ width: orbitSize, height: orbitSize }}
                />

                {/* Animation Container */}
                <motion.div
                  className="absolute"
                  initial={{ rotate: startAngle }} // Start at pre-calculated position
                  animate={{ rotate: startAngle + 360 * reverse }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: orbitSize, height: orbitSize }}
                >
                  {/* Icon Card */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 p-2.5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center justify-center group cursor-pointer"
                    initial={{ rotate: -startAngle }} // Counter-rotate to stay upright
                    animate={{ rotate: -(startAngle + 360 * reverse) }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full flex items-center justify-center transition-transform group-hover:scale-125">
                      {tech.icon}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-lg pointer-events-none z-[100]">
                      {tech.name}
                    </div>
                  </motion.div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* --- PART 2: CATEGORY FILTER --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2.5 rounded-2xl text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-500 border-2 ${
                activeTab === cat
                  ? "bg-blue-600 border-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] scale-105"
                  : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-400 backdrop-blur-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PART 3: FILTERED BENTO GRID --- */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 mb-5 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6">
                  <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full flex items-center justify-center drop-shadow-md">
                    {tech.icon}
                  </div>
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </span>

                {/* Decorative Glow */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
