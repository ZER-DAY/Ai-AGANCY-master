import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Work from "@/sections/work";
import { Footer } from "@/sections/Footer";
import Benefits from "@/sections/benefits";
import About from "@/components/About";
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Benefits />
      <About />
    </>
  );
}
