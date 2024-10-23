import HeroSection from "@/components/hero/hero";
import NavbarComponent from "@/components/navbar/navbar";
import React from "react";
import CirclesContainer from "../circles/circles-container";
import PreviousWorkContainer from "../previous-work/previous-work-container";

const HomeLayout = () => {
  return (
    <main className="min-h-screen ">
      <NavbarComponent />
      <HeroSection />
      <div className="max-w-[900px] mx-auto py-40">
        <CirclesContainer />
      </div>
      <PreviousWorkContainer />
    </main>
  );
};

export default HomeLayout;
