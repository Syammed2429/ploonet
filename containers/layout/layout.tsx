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
      >
        <PreviousWorkContainer />
      </motion.div>
      <div className="mx-auto max-w-[1300px] px-4 md:px-8 pb-4 pt-8">
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

      {/* <div className='fixed bottom-1 right-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white'>
        <div className='block sm:hidden'>xs</div>
        <div className='hidden sm:block md:hidden'>sm</div>
        <div className='hidden md:block lg:hidden'>md</div>
        <div className='hidden lg:block xl:hidden'>lg</div>
        <div className='hidden xl:block 2xl:hidden'>xl</div>
        <div className='hidden 2xl:block'>2xl</div>
      </div> */}
    </main>
  );
};

export default HomeLayout;
