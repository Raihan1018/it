import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCommandLine,
  HiOutlineBugAnt,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
  HiOutlineBeaker,
  HiOutlineCpuChip,
} from "react-icons/hi2";

const testSuites = [
  {
    id: 1,
    title: "Automation Testing",
    tools: "Selenium, Cypress, Playwright",
    desc: "Implementing end-to-end automated scripts to reduce manual effort and increase test coverage.",
    icon: <HiOutlineCommandLine />,
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Performance & Load",
    tools: "JMeter, K6, Locust",
    desc: "Simulating heavy traffic to ensure the application remains stable under extreme pressure.",
    icon: <HiOutlineCpuChip />,
    color: "from-purple-600 to-indigo-500",
  },
  {
    id: 3,
    title: "Mobile App QA",
    tools: "Appium, BrowserStack",
    desc: "Testing native and hybrid mobile apps across iOS and Android for fluid touch interactions.",
    icon: <HiOutlineDevicePhoneMobile />,
    color: "from-rose-600 to-orange-500",
  },
  {
    id: 4,
    title: "Security Penetration",
    tools: "OWASP ZAP, Burp Suite",
    desc: "Identifying vulnerabilities and security loopholes to protect against unauthorized data access.",
    icon: <HiOutlineShieldCheck />,
    color: "from-emerald-600 to-teal-500",
  },
  {
    id: 5,
    title: "API Testing",
    tools: "Postman, RestAssured",
    desc: "Validating status codes, payloads, and schema integrity for robust backend communication.",
    icon: <HiOutlineBeaker />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 6,
    title: "Bug Regression",
    tools: "Jira, Bugzilla",
    desc: "Systematic re-testing of fixed issues to ensure new updates don't break existing features.",
    icon: <HiOutlineBugAnt />,
    color: "from-slate-700 to-slate-900",
  },
];

const Testing = () => {
  return (
    <section className="py-24 px-4 sm:px-10 lg:px-20 ">
      <title>Service | Testing</title>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black  mb-6">
              Quality <span className="text-blue-600 italic">Assured.</span>
              <br />
              Bugs <span className="text-rose-500">Eliminated.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              We provide comprehensive Software Quality Assurance using
              industry-leading tools to ensure your application is fast, secure,
              and user-ready.
            </p>
          </div>

          {/* Diagnostic Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="p-8 rounded-[2.5rem]  border-2 border-dashed border-slate-200 dark:border-slate-800 relative"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500">
                QA_SCANNER_ACTIVE
              </span>
            </div>
            <div className="space-y-2 font-mono text-[10px] text-blue-600 dark:text-blue-400">
              <p>&gt; RUNNING_UNIT_TESTS...</p>
              <p>&gt; COVERAGE_CHECK: 98.4%</p>
              <p className="text-green-500">&gt; ZERO_VULNERABILITIES_FOUND</p>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {testSuites.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl  border border-transparent hover:border-blue-500/30 transition-all duration-300"
            >
              <div
                className={`w-14 h-14  rounded-2xl bg-gradient-to-br ${test.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}
              >
                {test.icon}
              </div>

              <h3 className="text-xl font-bold  mb-2 uppercase tracking-tight">
                {test.title}
              </h3>

              <div className="mb-4">
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                  {test.tools}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {test.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee (Static Example) */}
        <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] mb-10">
            Our Diagnostic Ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <span className="text-xl font-black italic">JEST</span>
            <span className="text-xl font-black italic">CYPRESS</span>
            <span className="text-xl font-black italic">SELENIUM</span>
            <span className="text-xl font-black italic">POSTMAN</span>
            <span className="text-xl font-black italic">JMETER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
