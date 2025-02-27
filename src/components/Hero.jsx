import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
        
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            Sonu Kumar
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Frontend Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl px-4 lg:px-0 tracking-tight text-justify"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1Evamgs8FSfZTGZPkvqYM3egW0-RGciXX/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
          >
            <button className="mt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white py-2 px-6 rounded-lg text-lg">
              View Resume
            </button>
          </motion.a>
        </div>

        {/* Right Section - Profile Picture (Placed Above on Small Screens) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="rounded-2xl w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 shadow-lg"
            src={profilePic}
            alt="profilepic"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
