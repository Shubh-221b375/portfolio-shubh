'use client'


import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "../index.css";

const Certificate = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        id="certifications"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        My <span className="text-neutral-500">Certifications</span>
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer"
            whileHover={{ scale: 1.3 }}
            animate={{ scale: expandedIndex === index ? 2.0 : 1 }}
            style={{ originX: 0.5, originY: 0.5 }}
            onClick={() => toggleExpand(index)}
          >
            <img
              src={cert.image}
              alt={`Certificate ${index + 1}`}
              className="rounded shadow-lg object-cover w-full h-auto transition-transform duration-400 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
