import { motion } from "framer-motion";
import AsciiArt from "./AsciiArt"
import { useState } from "react";

const Hero = () => {
  const [showAsciiArt, setShowAsciiArt] = useState(false);

  return (
    <section
      id="home"
      className="relative flex-1 shrink-0 basis-auto min-h-[100dvh] md:basis-[100dvh] md:h-[100dvh] md:max-h-[100dvh] md:overflow-hidden flex flex-col pt-36 pb-24 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex-1 min-h-0 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 w-full">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-6xl font-display mb-3 heading-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Desenvolvedor Web e <span className="">Mobile</span>
              <br />
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
               Da ideia à publicação, criando soluções completas
            </motion.p>

            <motion.div
              className="flex flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="https://github.com/lemesvini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/vinicius-lemes-ds/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
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

              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-black text-center font-medium transition-colors hover:bg-white/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projetos
              </motion.a>
            </motion.div>
          </div>

          <div className="w-full flex items-center justify-center min-h-0">
            <motion.div
              className="relative w-full max-w-[26rem] md:max-w-[min(100%,calc(100dvh-18rem))] aspect-square flex flex-col bg-black/20 rounded-lg overflow-hidden border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="shrink-0 h-8 bg-black/30 border-b border-white/10 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="flex-1 min-h-0 flex flex-col p-4 font-mono text-sm overflow-hidden">
                <motion.div
                  className="shrink-0 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <span className="text-green-500 mr-2">$</span>
                  <motion.span
                    className="text-white/50 whitespace-nowrap"
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    cat vinicius-lemes.txt
                  </motion.span>
                </motion.div>
                <motion.div
                  className="flex-1 min-h-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0 }}
                  onAnimationComplete={() => setShowAsciiArt(true)}
                >
                  <AsciiArt shouldStart={showAsciiArt} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
