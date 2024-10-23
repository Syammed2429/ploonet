import React from "react";
import heroImage from "@/public/images/hero-image.svg";
import crossDownArrow from "@/public/icons/cross-down-arrow.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative">
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
      <div className="hidden md:block absolute top-[15rem] right-16">
        <div className="rounded-full font-bold text-xl flex flex-col items-center justify-center w-36 h-36 bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] z-10">
          <span>제작</span>
          <span>문의하기</span>
          <Image
            src={crossDownArrow}
            className="w-6 h-6"
            alt="cross-down-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
