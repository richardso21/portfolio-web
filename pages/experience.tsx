import { createClient } from '../prismicio';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import ExperienceList from '../components/experience/experience-list';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';
import { asDate } from '@prismicio/helpers';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient(context.previewData);
  // sort in descending order of end date
  const experiences = (await client.getAllByType('experience-bullet')).sort(
    (a, b) => {
      return (
        (asDate(b.data.end)?.getTime() || 0) -
        (asDate(a.data.end)?.getTime() || 0)
      );
    }
  );
  return {
    props: { experiences },
  };
};

const ExperiencePage: NextPageWithLayout = ({ experiences }: any) => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <div className="relative pt-24">
        <motion.h1
          className="text-white text-6xl md:text-8xl font-bold inline-block mb-10 sm:mb-16"
          layoutId="experience"
        >
          Experience
        </motion.h1>
        <ExperienceList experiences={experiences} />
      </div>
    </>
  );
};

ExperiencePage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ExperiencePage;
