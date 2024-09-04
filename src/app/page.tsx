import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import { Experience } from "@/sections/Experience";

import Logo from "@/sections/Logo";
import { Certification } from "@/sections/Certification";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certification />
      {/* <Logo /> */}
      {/* <LogoTicker /> */}
      <Footer />
    </>
  );
}
