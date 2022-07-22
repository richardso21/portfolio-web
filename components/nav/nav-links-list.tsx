import { motion } from 'framer-motion';
import Link from 'next/link';

const NavLinksList = () => {
  const pStyle =
    'cursor-pointer hover:skew-x-12 hover:scale-125 transition ease-out active:text-blue-400 active:scale-110 italic';
  return (
    <>
      <Link href="/">
        <motion.p className={pStyle}>Home</motion.p>
      </Link>
      <Link href="/experience">
        <motion.p className={pStyle}>Experience</motion.p>
      </Link>
      <Link href="/projects">
        <motion.p className={pStyle}>Projects</motion.p>
      </Link>
      <Link href="/resume">
        <motion.p className={pStyle}>Resume</motion.p>
      </Link>
      <Link href="">
        <motion.p className={pStyle}>About Me</motion.p>
      </Link>
    </>
  );
};

export default NavLinksList;
