import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Dispatch, useEffect } from 'react';

const Hamburger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<any>;
}) => {
  const router = useRouter();
  // close menu when user clicks on link
  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsOpen(false));
  });

  return (
    <motion.button
      initial={{ display: 'none', opacity: 0 }}
      animate={{ display: 'initial', opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={
        'ham hamburger hamburger--shelf fixed mx-4 md:mx-12 my-6 md:my-8 z-50 ' +
        (isOpen ? 'active ' : '')
      }
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="inner">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </motion.button>
  );
};

export default Hamburger;
