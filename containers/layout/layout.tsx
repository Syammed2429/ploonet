import HeroSection from "@/components/hero/hero";
import NavbarComponent from "@/components/navbar/navbar";
import React from "react";

const HomeLayout = () => {
  return (
    <main className="min-h-screen bg-background">
      <NavbarComponent />
      <HeroSection />
      <div className="">HomeLayout</div>
    </main>
  );
};

export default HomeLayout;
