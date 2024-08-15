import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    // go to parent site
    const pathArr: Array<String> = router.asPath.split('/');
    pathArr.pop();
    router.push(pathArr.length === 1 ? '/' : pathArr.join('/'));
  };

  return (
    <>
      {router.pathname !== '/' && (
        <motion.button
          onClick={goBack}
          initial={{ display: 'none', opacity: 0 }}
          animate={{ display: 'initial', opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="fixed mx-24 md:mx-36 my-5 md:my-7 z-50 scale-150 -top-px"
        >
          <p className="text-blue-300 font-thin text-5xl leading-none [text-shadow:0_0_5px_black]">
            &#8249;
          </p>
        </motion.button>
      )}
    </>
  );
};

export default BackButton;
