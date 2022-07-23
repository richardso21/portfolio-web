import { asDate } from '@prismicio/helpers';
import { motion, Variants } from 'framer-motion';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import ProjectItem from '../components/projects/project-item';
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

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Projects | Richard So</title>
      </Head>
      <div className="relative pt-24">
        <motion.h1
          className="text-white text-6xl md:text-8xl font-bold inline-block mb-10"
          layoutId="projects"
        >
          Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div key={i} variants={item}>
              <ProjectItem />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

ProjectsPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ProjectsPage;
