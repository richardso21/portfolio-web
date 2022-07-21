import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';

const ExperiencePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <div className="relative py-24">
        <motion.h1
          className="text-white text-6xl md:text-8xl font-bold inline-block mb-10 sm:mb-16"
          layoutId="experience"
        >
          Experience
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pl-6 sm:pl-12 xl:pr-72 md:pr-36"
        >
          <ol className="relative border-l border-gray-500 child:text-xl">
            <li className="mb-10 ml-10 sm:ml-20">
              <span className="absolute w-12 sm:w-20 h-12 sm:h-16 -left-6 sm:-left-10">
                <Image
                  src="/icons/up.png"
                  height={1382}
                  width={1200}
                  layout="responsive"
                  alt="Union Pacific Railroad Logo"
                />
              </span>
              <time className="mb-1 font-light leading-none text-gray-400 italic">
                May 2022 - August 2022
              </time>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                Union Pacific Railroad
              </h3>
              <h6 className="text-gray-200 text-2xl sm:text-3xl mb-3">
                Software Development Engineer Intern
              </h6>
              <ul className="mb-4 text-xl font-normal text-gray-300 list-disc pl-5 child:pl-2.5">
                <li>Bullet point...</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae atque veniam repellat dolore dolores! Similique
                  libero fugiat totam reiciendis. Autem, illo! Quae non vero sit
                  distinctio. Cum reprehenderit voluptatem hic.
                </li>
                <li>Bullet point...</li>
              </ul>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
          </ol>
        </motion.div>
      </div>
    </>
  );
};

ExperiencePage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ExperiencePage;
