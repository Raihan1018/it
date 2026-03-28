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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden  transition-colors duration-500">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#1e293b_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 sm:mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] text-xs mb-3"
          >
            SYSTEM DESIGN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black "
          >
            System{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pipeline
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />

          {/* Vertical Moving Packets */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
              className="absolute left-[21px] sm:left-[21px] md:left-1/2 md:-translate-x-1/2 w-1.5 h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent z-10"
            />
          ))}

          <div className="space-y-24 md:space-y-32">
            {features.map((f, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={f.id}
                  className="relative flex items-center justify-center min-h-[150px]"
                >
                  {/* FEATURE CARD: Positions based on even/odd */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`absolute w-[80%] md:w-[40%] ${isEven ? "left-16 md:left-0" : "left-16 md:left-auto md:right-0"}`}
                  >
                    {/* Horizontal Connector Line (Desktop Only) */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "2rem" }}
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r ${f.color} ${isEven ? "-right-8" : "-left-8"}`}
                    />

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group p-6 sm:p-8 rounded-3xl  backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 shadow-lg"
                    >
                      <h3 className="text-xl font-bold  mb-2">{f.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {f.desc}
                      </p>
                      <button
                        onClick={() => setSelected(f)}
                        className={`text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${f.color} bg-clip-text text-transparent`}
                      >
                        Technical Details →
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* CENTRAL ICON BOX */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      className={`w-full h-full rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-xl relative overflow-visible`}
                    >
                      {/* Glow Pulse Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl bg-white blur-lg z-0"
                      />
                      <span className="relative z-10 text-xl md:text-2xl">
                        {f.icon}
                      </span>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-slate-300/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto 0 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 custom-scrollbar"
            >
              {/* Close Button  */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-slate-400 hover:text-red-500 transition-colors z-10"
              >
                <HiXMark size={28} />
              </button>

              {/* Icon  */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-white text-2xl sm:text-3xl mb-6 sm:mb-8 shadow-2xl`}
              >
                {selected.icon}
              </div>

              {/* Title  */}
              <h3 className="text-2xl sm:text-3xl font-black  mb-3 sm:mb-4 leading-tight">
                {selected.title}
              </h3>

              {/* Description  */}
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                {selected.desc}
              </p>

              {/* Action Button */}
              <button
                onClick={() => setSelected(null)}
                className={`w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r ${selected.color} text-white font-bold tracking-widest hover:brightness-110 transition-all shadow-lg text-sm sm:text-base`}
              >
                Close Analysis
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurFeatures;
