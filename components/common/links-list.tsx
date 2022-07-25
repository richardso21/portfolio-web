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

const anim =
  'transition ease-out hover:scale-125 hover:skew-x-12 active:text-blue-400 active:scale-110';

const LinksList = () => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="mb-5 sm:text-3xl text-2xl px-2 underline underline-offset-2 flex flex-col italic decoration-gray-500 child:pb-5 child:self-start"
  >
    <motion.div variants={item}>
      <Link href="/experience">
        <motion.p className={anim + ' cursor-pointer'} layoutId="experience">
          Experience
        </motion.p>
      </Link>
    </motion.div>
    <motion.div variants={item}>
      <Link href="/projects">
        <motion.p className={anim + ' cursor-pointer'} layoutId="projects">
          Projects
        </motion.p>
      </Link>
    </motion.div>
    <motion.div variants={item}>
      <Link href="/resume">
        <motion.p className={anim + ' cursor-pointer'} layoutId="resume">
          Resume
        </motion.p>
      </Link>
    </motion.div>
    <motion.div variants={item}>
      <Link href="/about">
        <motion.p className={anim + ' cursor-pointer'} layoutId="aboutMe">
          About Me
        </motion.p>
      </Link>
    </motion.div>
  </motion.div>
);

export default LinksList;
