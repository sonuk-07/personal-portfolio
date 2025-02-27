import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Section - Text Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <div className="max-w-xl py-6">
            <h1 className="pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Sonu Kumar
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-4 text-lg text-justify">
              {HERO_CONTENT}
            </p>
            <a
              href="https://drive.google.com/file/d/1Evamgs8FSfZTGZPkvqYM3egW0-RGciXX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white py-2 px-6 rounded-lg text-lg">
                View Resume
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Section - Profile Picture */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center mb-6 lg:mb-0"
        >
          <img
            className="rounded-2xl max-w-xs sm:max-w-sm lg:max-w-md"
            src={profilePic}
            alt="profilepic"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
