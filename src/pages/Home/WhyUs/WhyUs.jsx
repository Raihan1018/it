import React from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    title: "Ultra-Fast Performance",
    desc: "Optimized server-side rendering with Next.js for sub-second load times.",
    icon: <FiZap />,
    color: "#eab308", // Yellow
  },
  {
    title: "Clean Architecture",
    desc: "Modular, scalable MERN stack code following SOLID principles.",
    icon: <FiCode />,
    color: "#3b82f6", // Blue
  },
  {
    title: "Modern UI/UX",
    desc: "Tailwind-powered designs with smooth Framer Motion interactions.",
    icon: <FiLayers />,
    color: "#a855f7", // Purple
  },
  {
    title: "Responsive First",
    desc: "Seamless experiences across mobile, tablet, and ultra-wide desktops.",
    icon: <FiSmartphone />,
    color: "#06b6d4", // Cyan
  },
  {
    title: "SEO Mastery",
    desc: "Built-in metadata and semantic HTML to dominate Google rankings.",
    icon: <FiTrendingUp />,
    color: "#10b981", // Green
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous testing and secure authentication protocols (NextAuth/JWT).",
    icon: <FiCheckCircle />,
    color: "#f43f5e", // Rose
  },
];

const WhyUs = () => {
  return (
    <section className="py-32 px-6  relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black   tracking-tighter leading-[1.1]">
              Engineered for <br />
              <span className="text-blue-600">Digital Excellence.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-medium max-w-xl">
              We don't just build websites; we create high-performance digital
              assets that drive growth and set industry standards.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-10   backdrop-blur-sm border border-black dark:border-white/10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Floating Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner"
                style={{
                  backgroundColor: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold  mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {feature.desc}
              </p>

              {/* Subtle Gradient Line */}
              <div className="mt-8 w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent group-hover:border-blue-600/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <div className="mt-32 flex flex-col items-center justify-center">
          <div className="h-24 w-px bg-gradient-to-b from-blue-600 to-transparent" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="mt-8 px-8 py-3 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-600 font-bold text-sm uppercase tracking-widest"
          >
            Clean code. Scalable logic. Seamless UX
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
