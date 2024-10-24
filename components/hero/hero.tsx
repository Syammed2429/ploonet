'use client'

import React, { useState } from "react";
import heroImage from "@/public/images/hero-image.svg";
import crossDownArrow from "@/public/icons/cross-down-arrow.svg";
import Image from "next/image";
import {motion} from 'framer-motion'

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={heroImage}
        className="h-[18rem] md:h-[58rem]   "
        style={{
          aspectRatio: "470/278",
          objectFit: "cover",
        }}
        quality={100}
        alt="hero-image"
      />
      {hovered && (
        <motion.div
          className="absolute z-10 hidden md:block"
          style={{
            top: mousePosition.y - 100, 
            left: mousePosition.x - 100,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="rounded-full font-bold text-xl flex flex-col items-center justify-center w-36 h-36 bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] z-10">
            <span>제작</span>
            <span>문의하기</span>
            <Image
              src={crossDownArrow}
              className="w-6 h-6"
              alt="cross-down-arrow"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
