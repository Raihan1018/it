import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowUpRight,
  HiOutlineCodeBracket,
  HiOutlineEye,
} from "react-icons/hi2";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Eco-Fashion Roadmap 2030",
    category: "Next.js / Tailwind",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2070",
    link: "#",
    github: "#",
    desc: "A sustainable apparel tracking dashboard with interactive roadmaps and supply chain visualization.",
    tags: ["React", "Framer Motion", "MongoDB"],
  },
  {
    id: 2,
    title: "Dhaka Transit Pro",
    category: "Full Stack MERN",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2070",
    link: "#",
    github: "#",
    desc: "Real-time bus tracking and ticket management system specifically designed for urban congestion.",
    tags: ["Node.js", "Express", "Socket.io"],
  },
  {
    id: 3,
    title: "Enterprise Invoice Engine",
    category: "Marketplace Template",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2011",
    link: "#",
    github: "#",
    desc: "A high-performance invoice generation tool with PDF export and multi-currency support for ThemeForest.",
    tags: ["TypeScript", "Tailwind", "DaisyUI"],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] text-xs uppercase"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black  mt-4"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2  border border-slate-200 dark:border-slate-800 rounded-full text-sm font-bold shadow-sm hover:border-blue-500 transition-all">
              View All Case Studies
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800 shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl"
                  >
                    <HiOutlineEye size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="w-14 h-14  rounded-full flex items-center justify-center  shadow-xl"
                  >
                    <HiOutlineCodeBracket size={24} />
                  </motion.a>
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 px-4 py-2  backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Text Details */}
              <div className="mt-8 px-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold transition-colors">
                    {project.title}
                  </h3>
                  <HiOutlineArrowUpRight className="text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-tighter px-3 py-1  rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-center text-white relative overflow-hidden "
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Have a project in mind?
            </h3>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
              Let’s build something extraordinary together. I’m currently
              available for freelance projects and full-time opportunities.
            </p>
            <Link to={'/contact'} className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-transform cursor-pointer">
              Get In Touch
            </Link>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
