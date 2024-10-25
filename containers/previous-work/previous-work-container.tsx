"use client";

import TextWithDot from "@/components/text-with-dot";
import { workImages } from "@/lib/mockdata";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const PreviousWorkContainer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-16">
        <TextWithDot title="PREVIOUS WORKS" />
      </div>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-black">
        {workImages?.map((work) => (
          <motion.div
            whileHover={{ scale: 1.2, zIndex: 2 }}
            key={work.id}
            className="relative "
          >
            <Image
              className="w-full h-24  md:w-[30rem] md:h-[16rem] object-cover hover:rounded-md"
              src={work?.image}
              quality={100}
              alt="image"
              placeholder="blur"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PreviousWorkContainer;
