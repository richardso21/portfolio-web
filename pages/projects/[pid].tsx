import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import Layout from '../../components/layout';
import ProjectContent from '../../components/projects/project-content';
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
    revalidate: 60,
  };
};

const ProjectPage: NextPageWithLayout = ({ project, uid }: any) => {
  return (
    <>
      <Head>
        <title>{project.name + ' | Richard So'}</title>
      </Head>
      <ProjectContent data={project} uid={uid} />
    </>
  );
};

ProjectPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default ProjectPage;
