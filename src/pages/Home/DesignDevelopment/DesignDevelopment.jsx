import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineComputerDesktop,
  HiOutlineShoppingBag,
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { FaLaravel, FaReact } from "react-icons/fa";
import DesignDevAnimation from "../Test/DesignDevAnimation";

const services = [
  {
    title: "UX/UI Design",
    icon: <HiOutlinePaintBrush />,
    color: "text-pink-500",
  },
  { title: "React Web Development", icon: <FaReact />, color: "text-blue-400" },
  // {
  //   title: "Laravel Web Development",
  //   icon: <FaLaravel />,
  //   color: "text-red-500",
  // },
  {
    title: "Android Apps Development",
    icon: <HiOutlineDevicePhoneMobile />,
    color: "text-green-500",
  },
  {
    title: "iOS Apps Development",
    icon: <HiOutlineGlobeAlt />,
    color: "text-slate-400",
  },
  {
    title: "E-commerce Development",
    icon: <HiOutlineShoppingBag />,
    color: "text-amber-500",
  },
  {
    title: "Responsive Design",
    icon: <HiOutlineComputerDesktop />,
    color: "text-indigo-500",
  },
];

const DesignDevelopment = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-transparent min-h-screen flex items-center">
      <div className=" w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: The Visual Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <DesignDevAnimation />
        </motion.div>

        {/* Right Side: Content & Features */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm"
            >
              Engineering Excellence
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Crafting Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Fortress.
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg">
              We merge aesthetic precision with heavy-duty engineering to build
              software that scales securely.
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800  backdrop-blur-sm group transition-all"
              >
                <div
                  className={`text-2xl ${service.color} transition-transform group-hover:scale-125`}
                >
                  {service.icon}
                </div>
                <span className="font-semibold  text-sm md:text-base">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default DesignDevelopment;
