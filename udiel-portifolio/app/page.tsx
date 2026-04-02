"use client";
import About from "@/components/sections/AboutSec/About";
import Certifications from "@/components/sections/CertificationsSec/Certifications";
import Footer from "@/components/layout/FooterSec/Footer";
import Hero from "@/components/sections/HeroSec/Hero";
import Projects from "@/components/sections/ProjectsSec/Projects";
import NavBar from "@/components/layout/NavBar/NavBar";
import Loading from "@/components/ui/loading";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4700);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar/>
      <Hero/>
      <About/>
      <Certifications/>
      <Projects/>
      <Footer/>
    </div>
  );
}
