import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineRocketLaunch,
  HiOutlineBugAnt,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate API call
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-10 lg:px-20  relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Side: Copy & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">
            Let's Secure Your Build
          </span>
          <h2 className="text-4xl md:text-6xl font-black  mt-4 mb-8 leading-tight">
            Ready to <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Eliminate Bugs?
            </span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-blue-600">
                <HiOutlineEnvelope size={24} />
              </div>
              <div>
                <h4 className="font-bold ">
                  Email Us
                </h4>
                <p className="text-slate-500 text-sm">hello@domain.com</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-purple-600">
                <HiOutlineBugAnt size={24} />
              </div>
              <div>
                <h4 className="font-bold ">
                  Report an Issue
                </h4>
                <p className="text-slate-500 text-sm">
                  report@domain.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12  backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[3rem] shadow-2xl"
        >
          {formStatus === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-500/30">
                <HiOutlineRocketLaunch size={40} />
              </div>
              <h3 className="text-2xl font-bold ">
                Message Transmitted!
              </h3>
              <p className="text-slate-500 mt-2">
                Our QA team will review your brief within 24 hours.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-8 text-blue-600 font-bold text-sm uppercase tracking-widest"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl   border border-transparent focus:border-blue-500   outline-none transition-all  "
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-2xl  border border-transparent focus:border-blue-500   outline-none transition-all "
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  Required Service
                </label>
                <select className="w-full px-6 py-4 rounded-2xl b border border-transparent focus:border-blue-500 outline-none transition-all appearance-none">
                  <option>Automation Testing</option>
                  <option>Manual QA</option>
                  <option>Security Audit</option>
                  <option>Performance Testing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your application and testing requirements..."
                  className="w-full px-6 py-4 rounded-2xl  border border-transparent focus:border-blue-500 outline-none transition-all  resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-[0.2em] text-sm shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                {formStatus === "sending" ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Initiate Scan <HiOutlineRocketLaunch size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
