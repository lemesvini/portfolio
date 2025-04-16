import { useEffect, useState } from 'react';
import asciiArt from '../assets/me.txt?raw';
import { motion } from 'framer-motion';

interface AsciiArtProps {
  shouldStart: boolean;
}

const AsciiArt = ({ shouldStart }: AsciiArtProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = performance.now();
    const duration = 1500; // 1.5 seconds
    const totalLength = asciiArt.length;
    let animationFrameId: number;
    let lastIndex = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentIndex = Math.floor(progress * totalLength);
      
      // Only update if we have new characters to show
      if (currentIndex > lastIndex) {
        setDisplayedText(asciiArt.slice(0, currentIndex));
        lastIndex = currentIndex;
      }
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayedText(asciiArt);
        setIsComplete(true);
      }
    };

    // Start animation immediately when shouldStart is true
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldStart]);

  return (
    <motion.div 
      className="h-full w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <pre className="h-full w-full text-[0.13rem] md:text-[0.15rem] leading-[0.13rem] md:leading-[0.13rem] text-green-400 whitespace-pre font-mono flex items-center justify-center">
        {displayedText}
        {!isComplete && <span className="animate-pulse text-green-400">_</span>}
      </pre>
    </motion.div>
  );
};

export default AsciiArt;
