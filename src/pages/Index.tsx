import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Experience from "@/components/Experience";
import Toolkit from "@/components/Toolkit";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Toolkit />
      <Experience />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default Index;
