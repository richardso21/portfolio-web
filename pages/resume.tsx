import { asLink } from '@prismicio/helpers';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { createClient } from '../prismicio';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient(context.previewData);
  // query for pdf link
  const pdfItem = client.getByUID('pdf', 'resume');
  const pdfLink = asLink((await pdfItem).data.pdfLink);
  return {
    props: { pdfLink },
    revalidate: 60,
  };
};

const Resume: NextPage = ({ pdfLink }: any) => (
  <>
    <Head>
      <title>Resume | Richard So</title>
    </Head>
    <div className="h-screen w-screen">
      <iframe className="h-full w-full" src={pdfLink} />
    </div>
  </>
);

export default Resume;
