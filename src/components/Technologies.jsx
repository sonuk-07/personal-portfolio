import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl text-white"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-[#E34F26]" />
        </motion.div>

        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-[#1572B6]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-[#F7DF1E]" />
        </motion.div>

        <motion.div variants={iconVariants(4.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-[#3178C6]" />
        </motion.div>

        <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-[#00D8FF]" />
        </motion.div>

        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl text-white" />
        </motion.div>

        <motion.div variants={iconVariants(3.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-[#38BDF8]" />
        </motion.div>

        <motion.div variants={iconVariants(2.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-[#F05032]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
