import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import rawAsciiArt from '../assets/me.txt?raw';
import { motion } from 'framer-motion';

// Trailing spaces would inflate the <pre> box and push the drawing off-center.
const asciiArt = rawAsciiArt
  .split('\n')
  .map((line) => line.replace(/\s+$/, ''))
  .join('\n')
  .replace(/\s+$/, '');

const ART_LINES = asciiArt.split('\n');
const ART_ROWS = ART_LINES.length;
const ART_COLS = ART_LINES.reduce((max, line) => Math.max(max, line.length), 0);

// Arbitrary reference size the art is laid out at; a transform stretches it from here.
const BASE_FONT_SIZE = 10;
const RULER_CHARS = 100;

interface AsciiArtProps {
  shouldStart: boolean;
}

const AsciiArt = ({ shouldStart }: AsciiArtProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState({ width: 0, height: 0, scaleX: 1, scaleY: 1 });

  // Measure the real glyph advance instead of assuming 0.6em, then stretch the art
  // to fill the terminal exactly on both axes.
  useLayoutEffect(() => {
    const container = containerRef.current;
    const ruler = rulerRef.current;
    if (!container || !ruler) return;

    const measure = () => {
      const charWidth = ruler.getBoundingClientRect().width / RULER_CHARS;
      const { width, height } = container.getBoundingClientRect();
      if (!charWidth || !width || !height) return;

      const naturalWidth = ART_COLS * charWidth;
      const naturalHeight = ART_ROWS * BASE_FONT_SIZE;

      setFit({
        width: naturalWidth,
        height: naturalHeight,
        scaleX: width / naturalWidth,
        scaleY: height / naturalHeight,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    document.fonts?.ready.then(measure).catch(() => undefined);

    return () => observer.disconnect();
  }, []);

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
      ref={containerRef}
      className="relative h-full w-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span
        ref={rulerRef}
        aria-hidden
        className="absolute top-0 left-0 invisible pointer-events-none whitespace-pre font-mono"
        style={{ fontSize: BASE_FONT_SIZE, lineHeight: 1 }}
      >
        {'M'.repeat(RULER_CHARS)}
      </span>

      <pre
        className="shrink-0 text-green-400 whitespace-pre font-mono m-0 overflow-hidden"
        style={{
          width: fit.width || undefined,
          height: fit.height || undefined,
          fontSize: BASE_FONT_SIZE,
          lineHeight: `${BASE_FONT_SIZE}px`,
          transform: `scale(${fit.scaleX}, ${fit.scaleY})`,
          visibility: fit.width ? 'visible' : 'hidden',
        }}
      >
        {displayedText}
        {!isComplete && <span className="animate-pulse text-green-500">_</span>}
      </pre>
    </motion.div>
  );
};

export default AsciiArt;
