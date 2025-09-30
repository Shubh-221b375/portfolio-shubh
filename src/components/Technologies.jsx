import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaPython, FaVideo } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiAdobephotoshop, SiTableau, SiCplusplus, SiGit } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiFramer } from "react-icons/si";

import "../index.css";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const skills = [
  { name: "ReactJS", icon: <RiReactjsLine className="text-5xl text-cyan-400" />, duration: 2.5 },
  { name: "NextJS", icon: <TbBrandNextjs className="text-5xl" />, duration: 5 },
  { name: "NodeJS", icon: <FaNodeJs className="text-5xl text-green-500" />, duration: 3 },
  { name: "MySQL", icon: <GrMysql className="text-5xl text-blue-900" />, duration: 5 },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-5xl text-indigo-500" />, duration: 2 },
  { name: "Figma", icon: <FiFigma className="text-5xl" />, duration: 6 },
  { name: "Python", icon: <FaPython className="text-5xl" />, duration: 4 },
  { name: "Git", icon: <SiGit className="text-5xl" />, duration: 5 },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-5xl text-blue-600" />, duration: 7 },
  { name: "Framer Motion", icon: <SiFramer className="text-5xl" />, duration: 4 },
  { name: "Tableau", icon: <SiTableau className="text-5xl text-blue-500" />, duration: 6 },
  { name: "C/C++", icon: <SiCplusplus className="text-5xl text-blue-500" />, duration: 3 },
  { name: "Video Editing", icon: <FaVideo className="text-5xl text-red-500" />, duration: 5 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        id="technology"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        My <span className="text-neutral-500">Skills</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {skills.map((item, idx) => (
          <motion.div
            key={item.name}
            variants={iconVar(item.duration)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
          >
            {item.icon}
            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 -mb-2 w-max px-3 py-1 rounded-lg bg-neutral-900 text-neutral-200 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-lg transition-all duration-300">
              {item.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
