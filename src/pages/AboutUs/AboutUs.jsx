import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import OurTeam from "./OurTeam/OurTeam";

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "99%" },
  { label: "Awards Won", value: "12" },
];

const values = [
  {
    title: "Innovation First",
    desc: "We push the boundaries of modern web technologies to create unique digital experiences.",
    icon: <HiOutlineLightBulb />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "User Centric",
    desc: "Design is not just how it looks; it's how it works for the end user every single day.",
    icon: <HiOutlineUserGroup />,
    color: "bg-purple-500/10 text-purple-600",
  },
];

const About = () => {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-20  overflow-hidden">
      <title>About Us</title>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE: Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Floating Stats Card (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-4 sm:-right-10 z-20 p-6 sm:p-8  backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                  <HiOutlineRocketLaunch size={24} />
                </div>
                <span className="font-black text-slate-900 dark:text-white leading-tight">
                  Accelerating Digital Growth
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Trusted by industry leaders to deliver high-performance
                enterprise solutions.
              </p>
            </motion.div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* RIGHT SIDE: Text Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-[1.1]">
                Crafting Digital <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                With over a decade of experience in the MERN stack and creative
                UI design, we transform complex business requirements into
                elegant, scalable software. Our approach balances technical
                rigor with artistic intuition.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 "
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${v.color} flex items-center justify-center mb-4 text-xl shadow-sm`}
                  >
                    {v.icon}
                  </div>
                  <h4 className="font-bold  mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-t border-slate-200 dark:border-slate-800">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black  mb-1">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OurTeam />
      </div>
    </section>
  );
};

export default About;
