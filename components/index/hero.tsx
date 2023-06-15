import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DynamicText from './dynamic-text';

const Hero = () => {
  // keep width as state for responsiveness
  const [width, setWidth] = useState(640);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div id="hero">
      <motion.h1
        className="font-bold sm:text-9xl text-6xl leading-none pt-5 self-start inline-block"
        layoutId="name"
      >
        Richard So
      </motion.h1>
      <motion.h3
        className="pb-5 sm:pb-8 leading-tight text-xl sm:text-2xl text-gray-400 italic"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        BS/MS CS @ GaTech {"'"}25
        {/* use '|' separator if wide screen, else line break for mobile */}
        {width >= 770 ? <span className="not-italic"> | </span> : <br />}
        Full Stack, Data Science, AI/ML
      </motion.h3>
      <div className="relative">
        <DynamicText />
      </div>
    </div>
  );
};

export default Hero;
