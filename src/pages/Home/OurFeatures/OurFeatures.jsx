import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineCloud,
  HiOutlineLockClosed,
  HiXMark,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    title: "Scalable Architecture",
    desc: "Handles millions of concurrent requests with microservice-based architecture and near-zero latency.",
    icon: <HiOutlineCpuChip />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Global Edge CDN",
    desc: "Optimized delivery worldwide using edge computing with ultra-fast response times.",
    icon: <HiOutlineGlobeAlt />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Enterprise Security",
    desc: "Advanced encryption and threat detection keep your data secure at all times.",
    icon: <HiOutlineShieldCheck />,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    title: "Blazing Performance",
    desc: "Optimized rendering pipeline with multi-layer caching ensures fast performance.",
    icon: <HiOutlineBolt />,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Cloud Native",
    desc: "Built for scalability with containerized deployment and high resilience.",
    icon: <HiOutlineCloud />,
    color: "from-sky-500 to-indigo-500",
  },
  {
    id: 6,
    title: "Data Privacy",
    desc: "GDPR & SOC2 compliant systems ensure maximum data protection.",
    icon: <HiOutlineLockClosed />,
    color: "from-rose-500 to-red-500",
  },
];

const OurFeatures = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#1e293b_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] text-xs mb-3"
          >
            SYSTEM DESIGN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black "
          >
            System{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pipeline
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />

          {/* ANIMATION: Moving Data Packets (Vertical) */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                top: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
              className="absolute left-[15px] sm:left-[23px] md:left-1/2 md:-translate-x-1/2 w-1.5 h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent z-10"
            />
          ))}

          <div className="space-y-16 sm:space-y-24">
            {features.map((f, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={f.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* ANIMATION: Horizontal Branch Light (Left/Right) */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "4%", opacity: 1 }}
                    className={`hidden md:block absolute top-1/2 h-[1px] bg-gradient-to-r ${f.color} z-10 ${isEven ? "left-[46%]" : "right-[46%]"}`}
                  />

                  {/* Card Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-[42%]"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group p-6 sm:p-8 rounded-3xl  backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 shadow-lg"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold e mb-3">
                        {f.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                        {f.desc}
                      </p>
                      <button
                        onClick={() => setSelected(f)}
                        className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      >
                        Learn More →
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* Icon Section */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      viewport={{ once: true }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-xl relative group`}
                    >
                      {/* Inner Glow Pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl bg-white blur-md"
                      />
                      <span className="relative z-10 text-2xl">{f.icon}</span>
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-[42%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              className="absolute inset-0  backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg  rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6  hover:text-red-500 transition-colors"
              >
                <HiXMark size={24} />
              </button>

              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center  text-4xl mb-8 shadow-2xl`}
              >
                {selected.icon}
              </div>

              <h3 className="text-3xl font-black   mb-4 tracking-tight">
                {selected.title}
              </h3>

              <p className=" text-lg leading-relaxed mb-8">{selected.desc}</p>

              <button
                onClick={() => setSelected(null)}
                className={`w-full py-4 rounded-xl bg-gradient-to-r ${selected.color} text-white font-black uppercase tracking-widest text-sm shadow-lg hover:brightness-110 transition-all`}
              >
                Return to Pipeline
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurFeatures;
