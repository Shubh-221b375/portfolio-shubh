"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/components/ui/card";
import "../index.css";

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.55, type: "tween", ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Web Scraping Project for a client",
    details:
      "Developed custom scraping scripts to extract structured data from multiple websites, automated cleaning & storage into client databases.",
  },
  {
    title: "Portfolio Website development for a client",
    details:
      "Designed and built a responsive personal portfolio site with modern UI/UX, optimized performance, and easy content updates.",
  },
  {
    title: "JARVIS-like Virtual Assistant development",
    details:
      "Created a smart AI assistant capable of voice commands, task automation, and system integration to enhance productivity.",
  },
  {
    title: "Website creation and database management",
    details:
      "Built a dynamic website with backend integration, implemented relational database schemas, and managed data workflows.",
  },
  {
    title: "Multiple client projects showcasing hands-on learning",
    details:
      "Worked with different clients on varied projects, strengthening real-world skills across full-stack, automation, and AI domains.",
  },
];

const Freelance = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="freelance" className="relative border-b border-neutral-900 pb-24 pt-32">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-600/20 via-purple-700/10 to-indigo-500/20 blur-3xl opacity-30" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.65, type: "tween", ease: "easeOut" }}
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent leading-tight"
            >
              Freelance Journey
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.75, delay: 0.12, type: "tween", ease: "easeOut" }}
              className="text-2xl md:text-3xl font-light bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent tracking-tight"
            >
              Building Real-World Projects from 2 Years
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.82, delay: 0.19, type: "tween", ease: "easeOut" }}
              className="text-neutral-300 text-lg leading-relaxed max-w-lg"
            >
              I’ve collaborated with multiple clients, creating impactful
              solutions — from automation tools and AI assistants to
              production-ready websites — strengthening my full-stack and
              problem-solving skills.
            </motion.p>
          </div>
          {/* Right Column - Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <motion.div
                  initial={{ height: 140, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                  animate={{
                    height:
                      expandedIndex === index ? "auto" : 140,
                    boxShadow:
                      expandedIndex === index
                        ? "0 10px 44px rgba(168,85,247,0.10), 0 2px 20px rgba(139,92,246,0.14)"
                        : "0 1px 4px rgba(0,0,0,0.05)",
                    background:
                      expandedIndex === index
                        ? "rgba(139,92,246,0.06)"
                        : "transparent",
                  }}
                  whileHover={{
                    height: "auto",
                    boxShadow:
                      "0 10px 44px rgba(168,85,247,0.10), 0 2px 20px rgba(139,92,246,0.14)",
                    background: "rgba(139,92,246,0.06)",
                  }}
                  transition={{
                    duration: 0.42,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  style={{
                    willChange: "height, box-shadow, background",
                  }}
                  className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-transparent transition-all"
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl p-6 flex flex-col justify-start bg-gradient-to-br from-[#1e1b4b]/40 via-[#0f172a]/50 to-[#4c1d95]/40">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-lg font-semibold bg-gradient-to-r from-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: expandedIndex === index ? 1 : 0,
                        y: expandedIndex === index ? 0 : 10,
                        height: expandedIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden text-sm text-neutral-200 leading-relaxed"
                    >
                      {project.details}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
