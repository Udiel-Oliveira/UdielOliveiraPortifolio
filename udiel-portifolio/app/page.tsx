import About from "@/components/sections/AboutSec/About";
import Certifications from "@/components/sections/CertificationsSec/Certifications";
import Footer from "@/components/layout/FooterSec/Footer";
import Hero from "@/components/sections/HeroSec/Hero";
import Projects from "@/components/sections/ProjectsSec/Projects";
import Button from "@/components/ui/Button/Button";
import { ArrowBack } from "akar-icons";
import Image from "next/image";
import NavBar from "@/components/layout/NavBar/NavBar";

export default function Home() {
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
