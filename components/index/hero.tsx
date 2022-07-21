import { motion } from 'framer-motion';
import DynamicText from './dynamic-text';

const Hero = () => (
  <div id="hero">
    <h1 className="font-bold sm:text-9xl text-6xl leading-none pt-5">
      Richard So
    </h1>
    <motion.h3
      className="pb-5 sm:pb-8 leading-none text-xl sm:text-2xl text-gray-400 italic"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
    >
      CS @ GT {"'"}24 <span className="not-italic">|</span> Full Stack Developer
      &amp; Data Scientist
    </motion.h3>
    <DynamicText />
  </div>
);

export default Hero;
