"use client";

import Image from "next/image";
import React, { useState } from "react";
import icon from "@/public/icons/ploonet-icon.svg";
import globeIcon from "@/public/icons/globe-icon.svg";
import { MobileNavbarSheet } from "./mobile-navbar-sheet";
import { motion } from "framer-motion";
import { mockData } from "@/lib/mockdata";

const NavbarComponent = () => {
  const { navbarItems } = mockData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-sm z-50">
      <div className="hidden xl:flex items-center justify-around text-nowrap  py-7 px-5">
        <Image src={icon} alt="icon" />
        <ol className="flex items-center gap-20">
          {navbarItems?.map((item, index) => (
            <li
              key={item.id}
              className="relative hover:cursor-pointer xl:w-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.title}
              {hoveredIndex === index && (
                <motion.div
                  className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-2 md:w-4 h-2 md:h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </li>
          ))}
        </ol>
        <div className="flex items-center gap-14">
          <div>로그인</div>
          <Image src={globeIcon} alt="globeIcon" />
        </div>
      </div>
      <div className="flex xl:hidden items-center justify-between pt-4 pb-6 px-4">
        <Image src={icon} alt="icon" />
        <MobileNavbarSheet />
      </div>
    </nav>
  );
};

export default NavbarComponent;
