import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';
import { createClient } from '../prismicio';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient(context.previewData);
  const data = await (await client.getByUID('experience-bullet', '1')).data;
  return {
    props: { data },
  };
};

const Test: NextPageWithLayout = ({ data }: any) => {
  return (
    <div className="w-screen text-blue-300">
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </div>
  );
};

Test.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default Test;
