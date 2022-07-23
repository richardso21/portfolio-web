import { asDate } from '@prismicio/helpers';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import { createClient } from '../prismicio';
import { NextPageWithLayout } from './_app';

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

const ProjectsPage: NextPageWithLayout = () => {
  return (
    <div className="relative py-24">
      <motion.h1
        className="text-white text-6xl md:text-8xl font-bold inline-block mb-10"
        layoutId="projects"
      >
        Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-5"
      ></motion.div>
    </div>
  );
};

ProjectsPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ProjectsPage;
