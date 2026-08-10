import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import lemesvinilogo from "/public/lemesvinilogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "px-4 pt-3" : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "max-w-3xl w-full px-4 py-2 md:pl-6 md:pr-2"
            : "container max-w-7xl px-4 md:px-6 py-5"
        }`}
      >
        {/* Chrome da pill numa camada própria: só faz fade, então a borda some
            antes da navbar voltar a crescer em vez de animar junto. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 rounded-full glass shadow-lg shadow-black/20 transition-opacity ${
            isScrolled ? "opacity-100 duration-500" : "opacity-0 duration-150"
          }`}
        />

        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={lemesvinilogo} alt="Lemesvini Logo" className="h-8 w-auto rounded-md" />
          <span className={`font-display text-xl ${isScrolled ? "md:hidden" : ""}`}>
            lemesvini
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-4">
          {/* <a href="#home" className="nav-item">
            Home 
          </a> */}
          <a href="#about" className="nav-item">
            Sobre
          </a>
          <a href="#toolkit" className="nav-item">
            Stack
          </a>
          <a href="#experience" className="nav-item">
            Experiências
          </a>
          <a href="#projects" className="nav-item">
            Projetos
          </a>
        </nav>

        <div
          className={`hidden md:flex items-center gap-2 transition-all duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isScrolled}
        >
          <motion.a
            href="https://github.com/lemesvini"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            tabIndex={isScrolled ? undefined : -1}
            className="h-12 w-12 shrink-0 rounded-full glass border border-white/10 flex items-center justify-center transition-all hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/lemessvini/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            tabIndex={isScrolled ? undefined : -1}
            className="h-12 w-12 shrink-0 rounded-full glass border border-white/10 flex items-center justify-center transition-all hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </motion.a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={toggleMobileMenu}>
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
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className={`md:hidden absolute left-0 right-0 bg-[#121212] shadow-lg shadow-black/40 ${
              isScrolled
                ? "top-[calc(100%+0.5rem)] border border-white/10 rounded-2xl overflow-hidden"
                : "top-full"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col p-4 space-y-3">
              {/* <a
                href="#home"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a> */}
              <a
                href="#about"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#toolkit"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stack
              </a>
              <a
                href="#experience"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiências
              </a>
              <a
                href="#projects"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projetos
              </a>
              <a
                href="https://github.com/lemesvini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-full glass text-sm font-medium transition-all hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
