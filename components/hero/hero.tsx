import React from "react";
import heroImage from "@/public/images/hero-image.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <Image src={heroImage} alt="hero-image" />
      HeroSection
    </div>
  );
};

export default HeroSection;
