import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiArrowRight } from "react-icons/hi2";
// import HeroImage from "../../../assets/HeroImage.png";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router";
// import Test from "../Test/Test";
import HeroAnimation from "../../../Animation/CustomAnimation/HeroAnimation.jsx";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-12 overflow-hidden  transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-0 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 blur-[120px] rounded-full" />

      {/* 1. Text Content Container */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-8 z-10 text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
          <HiOutlineShieldCheck className="text-lg" />
          <span>Next-Gen Data Security</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight ">
          Defending Your Data, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Securing Your Future.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Your data is more than just bits and bytes; it’s the blueprint of your
          success. Our mission is to build an impenetrable digital fortress
          around your innovations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link
            to={"/contact"}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
          >
            Get Started <HiArrowRight />
          </Link>

          <Link
            to={"/projects"}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
          >
            View Solutions <FaProjectDiagram />
          </Link>
        </div>
      </motion.div>

      {/* 2. Image/Visual Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative"
      >
        {/* Animated Glow behind the image */}
        <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 blur-[80px] rounded-full animate-pulse"></div>

        <HeroAnimation />
        {/* <motion.img
          src={HeroImage}
          alt="Secure Data Illustration"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-full drop-shadow-2xl"
        /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
