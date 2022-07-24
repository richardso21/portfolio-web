import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import Layout from '../../components/layout';
import { createClient } from '../../prismicio';
import { NextPageWithLayout } from '../_app';

export async function getStaticPaths() {
  const projects = await createClient().getAllByType('project');
  const paths = projects.map((project) => ({ params: { pid: project.uid } }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const uid = (context.params?.pid as string) || '';
  const client = createClient();

  const project = await (await client.getByUID('project', uid)).data;
  return {
    props: { project, uid },
  };
};

const ProjectPage: NextPageWithLayout = ({ project, uid }: any) => {
  return (
    <>
      <Head>
        <title>{project.name + ' | Richard So'}</title>
      </Head>
      <div className="relative h-screen pt-24">
        <motion.h1
          className="text-white text-5xl md:text-6xl font-bold inline-block mb-10 z-10"
          layoutId={uid}
        >
          {project.name}
        </motion.h1>
        <motion.div
          layoutId={uid + '_img'}
          className="bg-blue-800 w-full h-48 relative"
        >
          <Image
            src={project.frontImage.url}
            alt={project.frontImage.alt}
            width={project.frontImage.dimensions.width}
            height={project.frontImage.dimensions.height}
          />
        </motion.div>
      </div>
    </>
  );
};

ProjectPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ProjectPage;
