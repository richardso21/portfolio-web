import { asDate } from '@prismicio/helpers';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import ProjectList from '../components/projects/project-list';
import { createClient } from '../prismicio';
import { NextPageWithLayout } from './_app';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();
  // sort in descending order of end date
  const projects = (await client.getAllByType('project')).sort((a, b) => {
    return (
      (asDate(b.data.dateDone)?.getTime() || 0) -
      (asDate(a.data.dateDone)?.getTime() || 0)
    );
  });
  return {
    props: { projects },
  };
};

const ProjectsPage: NextPageWithLayout = ({ projects }: any) => {
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
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

ProjectsPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ProjectsPage;
