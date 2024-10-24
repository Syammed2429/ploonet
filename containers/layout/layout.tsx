'use client'

import HeroSection from "@/components/hero/hero";
import NavbarComponent from "@/components/navbar/navbar";
import React from "react";
import CirclesContainer from "../circles/circles-container";
import PreviousWorkContainer from "../previous-work/previous-work-container";
import { motion } from "framer-motion";

const HomeLayout = () => {
  return (
    <main className="min-h-screen ">
      <NavbarComponent />
      <HeroSection />
      <div className="max-w-[900px] mx-auto py-40">
        <motion.div 
          initial={{ opacity: 0, x: -200 }} // Animate CirclesContainer from the left
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }} // Adjust delay as needed
        >
          <CirclesContainer />
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 300 }} // Animate PreviousWorkContainer from the right
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }} // Adjust delay as needed
      >
        <PreviousWorkContainer />
      </motion.div>
    </main>
  );
};

export default HomeLayout;
