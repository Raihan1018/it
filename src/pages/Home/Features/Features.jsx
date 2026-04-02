import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineCodeBracket,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const steps = [
  {
    title: "Discovery",
    desc: "Mapping your digital landscape to identify vulnerabilities and strategic growth.",
    icon: <HiOutlineLightBulb />,
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/20",
  },
  {
    title: "Development",
    desc: "Building secure, scalable systems using modern architectures and AI workflows.",
    icon: <HiOutlineCodeBracket />,
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "Testing",
    desc: "Rigorous penetration testing and automated QA to ensure your fortress is impenetrable.",
    icon: <HiOutlineShieldCheck />,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
  },
  {
    title: "Deployment",
    desc: "Seamless integration with 24/7 monitoring to keep your innovations protected.",
    icon: <HiOutlineRocketLaunch />,
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-[1px] rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Main Card Body */}
              <div
                className="relative h-full p-8 rounded-[2.45rem] transition-colors duration-500
                "
              >
                {/* Floating Icon Container */}
                <div
                  className={`w-16 h-16 mb-8 rounded-2xl flex items-center justify-center text-3xl  shadow-lg
                  bg-gradient-to-br ${step.color} ${step.shadow}
                  transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  {step.icon}
                </div>

                <h3 className="text-2xl  font-bold mb-4 bg-clip-text ">
                  {step.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {step.desc}
                </p>

                {/* Bottom Accent Circle */}
                <div
                  className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-20 transition-opacity blur-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
