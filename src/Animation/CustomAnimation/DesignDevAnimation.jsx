import { motion } from "framer-motion";
import {
  HiOutlineServer,
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineCircleStack,
} from "react-icons/hi2";

const DesignDevAnimation = () => {
  const nodes = [
    {
      icon: <HiOutlineGlobeAlt />,
      label: "Edge_CDN",
      color: "text-blue-400",
      pos: "top-10 left-10",
    },
    {
      icon: <HiOutlineCircleStack />,
      label: "DB_Cluster",
      color: "text-emerald-400",
      pos: "bottom-10 left-20",
    },
    {
      icon: <HiOutlineShieldCheck />,
      label: "Auth_Guard",
      color: "text-pink-500",
      pos: "top-20 right-20",
    },
    {
      icon: <HiOutlineServer />,
      label: "API_Node",
      color: "text-amber-400",
      pos: "bottom-20 right-10",
    },
  ];

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center bg-transparent overflow-hidden">
      {/* 1. The "Pulse" Background (Neural Network) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-40 pointer-events-none">
        <defs>
          <radialGradient id="centralGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="50%" cy="50%" r="300" fill="url(#centralGlow)" />

        {/* Animated Connecting Filaments */}
        {nodes.map((_, i) => (
          <motion.path
            key={i}
            d={`M 250 350 L ${Math.random() * 500} ${Math.random() * 700}`}
            stroke="#3b82f6"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </svg>

      {/* 2. Central Processing Hub (The Orchestrator) */}
      <div className="relative z-10 scale-125">
        <motion.div
          animate={{
            rotateY: [0, 360],
            boxShadow: [
              "0 0 20px rgba(59,130,246,0.2)",
              "0 0 60px rgba(59,130,246,0.4)",
              "0 0 20px rgba(59,130,246,0.2)",
            ],
          }}
          transition={{
            rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
            boxShadow: { duration: 4, repeat: Infinity },
          }}
          className="w-40 h-40 rounded-[3rem] bg-white/10 dark:bg-slate-900/40 backdrop-blur-3xl border-2 border-blue-500/30 flex items-center justify-center shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <HiOutlineCpuChip className="text-6xl text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

          {/* Orbital Data Bits */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full"
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute -top-1 left-1/2 blur-[1px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. Distributed Service Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            initial: { delay: i * 0.2 },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute ${node.pos} z-20 group`}
        >
          <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-xl transition-all hover:scale-110 hover:border-blue-500/50">
            <div className={`text-3xl ${node.color} mb-2`}>{node.icon}</div>
            <div className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
              {node.label}
            </div>

            {/* Connection line to center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      ))}

      {/* 4. Floating Data Packets (Moving between nodes) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * -300, Math.random() * 300],
            y: [Math.random() * -300, Math.random() * 300],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
          className="absolute w-1 h-1 bg-white dark:bg-blue-400 rounded-full blur-[1px]"
        />
      ))}

      {/* 5. Bottom "System Health" HUD */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8">
        {["Latency: 14ms", "Uptime: 99.9%", "Load: 12%"].map((stat, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 tracking-tighter uppercase">
              {stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignDevAnimation;
