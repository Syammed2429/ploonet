"use client";

import HeroSection from "@/components/hero/hero";
import NavbarComponent from "@/components/navbar/navbar";
import React from "react";
import CirclesContainer from "../circles/circles-container";
import PreviousWorkContainer from "../previous-work/previous-work-container";
import { motion } from "framer-motion";
import MakingProcessContainer from "../making-process/making-process-container";
import ContactContainer from "../contact/contact-container";

const HomeLayout = () => {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <HeroSection />
      <div className="max-w-[900px] mx-auto py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CirclesContainer />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pt-12 md:pt-24"
      >
        <PreviousWorkContainer />
      </motion.div>
      <div className="mx-auto max-w-[1300px] px-2 md:px-8 pb-4 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MakingProcessContainer />
        </motion.div>
      </div>
      <div className="max-w-[900px] mx-auto py-10 md:py-20 h-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ContactContainer />
        </motion.div>
      </div>
    </main>
  );
};

export default HomeLayout;
