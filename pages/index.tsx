import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import IconGrid from '../components/common/icon-grid';
import Layout from '../components/layout';
import LinksList from '../components/common/links-list';
import { NextPageWithLayout } from './_app';
import { motion, Variants } from 'framer-motion';
import Hero from '../components/index/hero';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { x: -500 },
  show: { x: 0 },
};

const Home: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Richard So</title>
      <meta name="keywords" content="Richard So, SWE, data science, software" />
      <meta
        name="description"
        content="Portfolio & Resume for Richard So - CS @ Georgia Tech BS/MS '25 | Full Stack, Data Science, AI/ML."
      />
      <meta name="og:title" content="Richard So" />
      <meta
        name="og:description"
        content="Richard So - Software Developer Portfolio & Resume."
      />
      <meta name="og:type" content="profile" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer />
    </Head>
    <main className="flex flex-col justify-center h-screen -mx-5">
      {/* <div className="mt-96 w-full h-screen overflow-visible -mx-5"> */}
      <motion.div
        // className="text-white flex w-full h-screen flex-col justify-center"
        className="text-white w-full overflow-x-hidden overflow-y-scroll pl-5 scrollbar-hidden"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Hero />
        </motion.div>
        <motion.div variants={item}>
          <hr className="sm:w-96 w-60 my-10" />
        </motion.div>
        <motion.div variants={item}>
          <LinksList />
        </motion.div>
        <motion.div variants={item}>
          <IconGrid />
        </motion.div>
      </motion.div>
    </main>
  </>
);

Home.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default Home;
