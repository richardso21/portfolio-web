import { motion } from 'framer-motion';
import Link from 'next/link';

const NavLinksList = () => (
  <>
    <Link href="/">Home</Link>
    <Link href="/experience">
      <motion.p className="cursor-pointer">Experience</motion.p>
    </Link>
    <Link href="/projects">
      <motion.p className="cursor-pointer">Projects</motion.p>
    </Link>
    <Link href="">Resume</Link>
    <Link href="">About Me</Link>
  </>
);

export default NavLinksList;
