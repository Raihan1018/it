import { motion } from "framer-motion";

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* 1. Animated Mesh Gradients (Background) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px]  blur-[100px] rounded-full -top-10 -left-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -120, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[250px] h-[250px] bg-purple-500/30 dark:bg-purple-600/20 blur-[100px] rounded-full -bottom-10 -right-10"
      />

      {/* 2. Floating Cyber-Shield (Main Visual) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Outer Glowing Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-blue-500/50 dark:border-cyan-400/30 rounded-full flex items-center justify-center"
        />

        {/* Middle Glowing Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-32 h-32 md:w-44 md:h-44 border border-purple-500/40 dark:border-indigo-400/20 rounded-full"
        />

        {/* Center "Core" */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.6)] dark:shadow-[0_0_60px_rgba(6,182,212,0.4)] flex items-center justify-center overflow-hidden"
        >
          {/* Internal Pulse Effect */}
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white dark:bg-cyan-200 opacity-20"
          />
          <svg
            className="w-10 h-10 md:w-14 md:h-14 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* 3. Floating Data Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -100],
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-blue-400 dark:bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: "60%",
          }}
        />
      ))}
    </div>
  );
};

export default HeroAnimation;
