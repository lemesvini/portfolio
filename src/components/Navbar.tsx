
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navbarPosition = useTransform(
    scrollY,
    [0, 100],
    ["translateX(0%)", "translateX(-50%)"]
  );
  
  const navbarLeft = useTransform(
    scrollY,
    [0, 100],
    ["0%", "50%"]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-lg border-b" : "py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="container mx-auto px-4 md:px-6 flex items-center justify-between"
        style={{ 
          left: navbarLeft,
          transform: navbarPosition
        }}
      >
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/public/lovable-uploads/7f433aee-d1b3-4950-8833-ba121c335c98.png" 
            alt="Devine Logo" 
            className="h-8 w-8"
          />
          <img 
            src="/public/lovable-uploads/370e2637-66ca-4f0c-9085-f768057aa3c6.png" 
            alt="Devine" 
            className="h-8 hidden dark:block" 
          />
          <img 
            src="/public/lovable-uploads/a3610741-2d70-4b1e-98cd-2b831c66e7b3.png" 
            alt="Devine" 
            className="h-8 block dark:hidden" 
          />
        </motion.a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#team" className="nav-item">Team</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
        
        <motion.a
          href="#contact"
          className="hidden md:flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Us
        </motion.a>
        
        <button className="md:hidden p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
