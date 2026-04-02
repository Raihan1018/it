import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // Faster stagger for more items
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const WebServiceCard = ({ title, description, iconPath, tags }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none backdrop-blur-sm transition-all hover:shadow-2xl overflow-hidden"
    >
      <title>Services | Web</title>
      {/* Animated Background Gradient */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />

      {/* Icon Wrapper with Glass effect */}
      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
        >
          {iconPath}
        </svg>
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        {description}
      </p>

      {/* Dynamic Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtle border trace on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-[2rem] transition-all pointer-events-none" />
    </motion.div>
  );
};

const WebDev = () => {
  const webServices = [
    {
      title: "API Development",
      description:
        "Robust RESTful and GraphQL APIs with secure authentication and scalable backend architecture.",
      tags: ["REST", "GraphQL", "Auth"],
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      ),
    },
    {
      title: "Performance Engine",
      description:
        "Speed optimization including lazy loading and code splitting for better SEO and Core Web Vitals.",
      tags: ["Speed", "SEO", "UX"],
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      ),
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deployment pipelines with Docker, CI/CD automation, and scalable AWS/Vercel hosting.",
      tags: ["AWS", "Docker", "CI/CD"],
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
        />
      ),
    },
    {
      title: "Security & Auth",
      description:
        "Secure systems with JWT, OAuth, and protection against common vulnerabilities (XSS, CSRF).",
      tags: ["JWT", "OAuth", "SSL"],
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c-.035.505-.054 1.015-.054 1.53 0 5.071 3.32 9.366 7.915 10.865a11.954 11.954 0 007.916-10.865c0-.515-.019-1.025-.053-1.53a11.959 11.959 0 01-7.348-4.33z"
        />
      ),
    },
    {
      title: "Database Design",
      description:
        "Efficient schema design using SQL/NoSQL, indexing strategies, and optimized query modeling.",
      tags: ["PostgreSQL", "MongoDB"],
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.128 16.556 17.975 12 17.975s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75"
        />
      ),
    },
    {
      title: "PWA Solutions",
      description:
        "Installable web apps with offline support, push notifications, and native-like mobile performance.",
      tags: ["Offline", "Installable"],
      iconPath: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h4 className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">
            Our Technical Stack
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Web Expertise.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            From architecture to deployment, we deliver high-end digital
            solutions that scale with your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" // 4 columns for large screens to handle more items
        >
          {webServices.map((service, index) => (
            <WebServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebDev;
