import { motion, Variants } from 'framer-motion';
import Head from 'next/head';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import IconGrid from '../components/common/icon-grid';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const Emph = ({ children }: { children: ReactNode }) => (
  <span className="text-blue-200 font-bold">{children}</span>
);

const About: NextPageWithLayout = () => {
  const [width, setWidth] = useState(640);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <>
      <Head>
        <title>About Richard So</title>
      </Head>
      <div className="relative pt-24 w-full text-white child:py-5">
        <motion.h1
          layoutId="name"
          className="text-6xl md:text-8xl font-bold inline-block"
        >
          Richard So
        </motion.h1>
        <motion.div
          className="grid grid-cols-12 gap-5 lg:gap-24 text-2xl sm:text-2xl xl:text-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.main
            className="col-span-12 lg:col-span-6 xl:col-span-7 child:leading-snug text-gray-200"
            variants={item}
          >
            <p className="pb-2">Hey, thanks for visiting! I{"'"}m ...</p>
            <ul className="list-disc px-10 child:py-2">
              <li>
                a passionate <Emph>full stack</Emph> developer &{' '}
                <Emph>data scientist</Emph>.
              </li>
              <li>
                currently a SWE/ML intern for <Emph>Amazon Web Services</Emph>.
              </li>
              <li>
                pursuing BS/MS Computer Science at <Emph>Georgia Tech</Emph>.
              </li>
              <li>
                always in search of something new to <Emph>learn</Emph>.
              </li>
            </ul>
            <br />
            <p className="pb-10 text-gray-400 italic">
              Feel free to reach out to me by email at{' '}
              <span className="text-blue-300">
                richardso2021 [at] gmail [dot] com
              </span>{' '}
              or via the social medias below.
            </p>
            <IconGrid />
            {width < 770 && <hr className="mt-10 mb-5 mx-10" />}
          </motion.main>
          <motion.div
            className="relative col-span-12 xl:col-start-8 lg:col-start-7 lg:col-end-13 xl:-top-20 lg:-top-20 top-0"
            variants={item}
          >
            <h3 className="text-gray-100 text-4xl font-bold pb-3">Languages</h3>
            <ul className="text-gray-300 text-2xl list-disc pl-5 leading-snug child:py-1">
              <li>TypeScript / JavaScript</li>
              <li>Python</li>
              <li>C / C++</li>
              <li>MATLAB</li>
              <li>Go</li>
              <li>SQL</li>
            </ul>
            <h3 className="text-gray-100 text-4xl font-bold pt-5 pb-3">
              Frameworks/Tech
            </h3>
            <ul className="text-gray-300 text-2xl list-disc pl-5 leading-snug child:py-1">
              <li>
                <Emph>Web:</Emph> React, Vue, Angular, Svelte, Jest
              </li>
              <li>
                <Emph>Backend:</Emph> Express, Flask, Joi, Jasmine
              </li>
              <li>
                <Emph>Data:</Emph> NumPy, Pandas, Matplotlib
              </li>
              <li>
                <Emph>ML/AI:</Emph> PyTorch, Keras, Scikit-learn
              </li>
              <li>
                <Emph>DB:</Emph> Knex, PostgreSQL, SQLite, Firebase
              </li>
              {/* <li>Salesforce (CRM Analytics)</li> */}
            </ul>
            {/* <h3 className="text-gray-100 text-4xl font-bold py-3">Learning</h3>
            <ul className="text-gray-300 text-2xl list-disc pl-10 leading-snug">
              <li>Rust</li>
            </ul> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default About;
