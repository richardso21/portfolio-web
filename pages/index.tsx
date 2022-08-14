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
      staggerChildren: 0.1,
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
        content="Portfolio & Resume for Richard So - Computer Science @ Georgia Tech '24 | Full Stack Developer."
      />
      <meta name="og:title" content="Richard So" />
      <meta
        name="og:description"
        content="Richard So - Software Developer Portfolio & Resume."
      />
      <meta name="og:type" content="profile" />
    </Head>
    <motion.main
      className="text-white flex w-full h-screen flex-col justify-center"
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
    </motion.main>
  </>
);

Home.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default Home;
