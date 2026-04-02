import React from "react";
import { motion } from "framer-motion";
import { HiOutlineCheckBadge, HiOutlineCommandLine } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "John Doe",
    role: "Lead QA Engineer",
    specialty: "Automation & CI/CD",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
    tools: ["Cypress", "Selenium", "Jenkins"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Security Researcher",
    specialty: "Penetration Testing",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
    tools: ["Burp Suite", "OWASP ZAP", "Nmap"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Alex Volkov",
    role: "SDET Specialist",
    specialty: "Mobile & API Testing",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
    tools: ["Appium", "Postman", "K6"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Jessica Miller",
    role: "Performance Lead",
    specialty: "Load & Stress Analysis",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976",
    tools: ["JMeter", "Gatling", "Grafana"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
];

const OurTeam = () => {
  
  const duplicatedTeam = [...team, ...team];

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-4"
          >
            <HiOutlineCheckBadge className="text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Verified QA Specialists
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black  mt-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Engineers
            </span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <div className="flex gap-8 py-10 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {duplicatedTeam.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[300px] sm:w-[350px] flex-shrink-0 group/card relative"
            >
              {/* Image & Overlay Container */}
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden  shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 group-hover/card:blur-[2px]"
                />

                {/* Tech Stack Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 whitespace-normal">
                  <div className="mb-6">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <HiOutlineCommandLine /> Tools Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[9px] font-bold px-2 py-1 bg-white/10  rounded-md border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 border-t border-white/10 pt-6">
                    <a
                      href={member.socials.linkedin}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href={member.socials.github}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-6 text-center whitespace-normal">
                <h3 className="text-xl font-bold  mb-1 group-hover/card:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-slate-500 italic">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-200 dark:border-slate-800">
          {[
            { label: "Bugs Crushed", value: "500+" },
            { label: "Test Coverage", value: "100%", border: true },
            { label: "Release Monitoring", value: "24/7", border: true },
            { label: "Global Certification", value: "ISTQB", border: true },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center ${stat.border ? "md:border-l border-slate-200 dark:border-slate-800" : ""}`}
            >
              <h4 className="text-3xl font-black ">
                {stat.value}
              </h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
