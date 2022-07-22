import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/' && (
        <motion.button
          onClick={router.back}
          initial={{ display: 'none', opacity: 0 }}
          animate={{ display: 'initial', opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="absolute mx-24 md:mx-36 my-5 md:my-7 z-50 text-white text-5xl font-thin scale-150 leading-none -top-px"
        >
          &#8249;
        </motion.button>
      )}
    </>
  );
};

export default BackButton;
