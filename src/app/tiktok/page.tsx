"use client";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import React from "react";
import { Footer } from "@/sections/Footer";
import Timeline from "@/components/Timeline"; // مسار المكون حسب بنية مشروعك
import FeaturesSection from "@/sections/FeaturesSection";
const Tiktok = () => {
  return (
    <div>
      <Header />
      <FeaturesSection />
      {/* <Hero /> */}
      {/* <Timeline /> */}
      <Footer />
    </div>
  );
};

export default Tiktok;
