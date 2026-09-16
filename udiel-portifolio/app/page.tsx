import About from "@/components/sections/AboutSec/About";
import Certifications from "@/components/sections/CertificationsSec/Certifications";
import Footer from "@/components/layout/FooterSec/Footer";
import Hero from "@/components/sections/HeroSec/Hero";
import Projects from "@/components/sections/ProjectsSec/Projects";
import NavBar from "@/components/layout/NavBar/NavBar";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg">
      <PageLoader />
      <NavBar/>
      <Hero/>
      <About/>
      <Certifications/>
      <Projects/>
      <Footer/>
    </div>
  );
}
