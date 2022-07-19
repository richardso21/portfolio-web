import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const texts = ['code.', 'tinker.', 'learn.', 'create.', 'nerd out.'];

const DynamicText = () => {
  const [curr, setCurr] = useState(1);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((curr) => (curr + 1) % texts.length);
      setCurrentText(texts[curr]);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <p className="sm:text-5xl text-3xl">
      I love to&nbsp;
      <AnimatePresence>
        {
          <motion.span
            className="absolute text-blue-300"
            key={curr}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            {currentText}
          </motion.span>
        }
      </AnimatePresence>
    </p>
  );
};

export default DynamicText;
