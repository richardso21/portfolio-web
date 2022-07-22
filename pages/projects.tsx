import { motion } from 'framer-motion';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';

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
