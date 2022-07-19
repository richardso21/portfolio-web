import Image from 'next/image';
import mediumSvg from '../../public/icons/medium.svg';
import githubSvg from '../../public/icons/github.svg';
import linkedinSvg from '../../public/icons/linkedin.svg';
import { motion } from 'framer-motion';

const IconGrid = ({ expandFromTopLeft = true }) => (
  <motion.div
    id="icon-links"
    className={
      'grid grid-cols-3 mx-2 justify-around w-52 h-14 gap-5 scale-75 sm:scale-90 child:relative child:transition-all child:ease-in-out-expo child:brightness-100 ' +
      (expandFromTopLeft ? 'origin-top-left' : 'origin-center')
    }
  >
    <a href="https://richardso21.medium.com" className="hover:brightness-125">
      <Image src={mediumSvg} layout="fill" alt="medium"></Image>
    </a>
    <a
      href="https://www.github.com/richardso21"
      className="hover:brightness-125"
    >
      <Image src={githubSvg} layout="fill" alt="github"></Image>
    </a>
    <a
      href="https://www.linkedin.com/in/richardso21"
      className="hover:brightness-125"
    >
      <Image src={linkedinSvg} layout="fill" alt="linkedin"></Image>
    </a>
  </motion.div>
);

export default IconGrid;
