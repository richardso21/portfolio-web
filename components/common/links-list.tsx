import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -500 },
  show: { opacity: 1, x: 0 },
};

const LinksList = () => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="mb-5 sm:text-3xl text-2xl px-2 underline flex flex-col italic decoration-gray-500 child:pb-5"
  >
    <motion.div variants={item}>
      <Link href="/experience">
        <motion.span className="cursor-pointer" layoutId="experience">
          Experience
        </motion.span>
      </Link>
    </motion.div>
    <motion.div variants={item}>
      <Link href="/projects">
        <motion.span className="cursor-pointer" layoutId="projects">
          Projects
        </motion.span>
      </Link>
    </motion.div>
    <motion.div variants={item}>
      <Link href="/resume">
        <motion.span className="cursor-pointer" layoutId="resume">
          Resume
        </motion.span>
      </Link>
    </motion.div>
    <motion.div variants={item}>
      <Link href="">
        <motion.span className="cursor-pointer" layoutId="aboutMe">
          About Me
        </motion.span>
      </Link>
    </motion.div>
  </motion.div>
);

export default LinksList;
