import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Work from "@/sections/work";
import { Footer } from "@/sections/Footer";
import Benefits from "@/sections/benefits";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Benefits />

      <Footer />
    </>
  );
}
