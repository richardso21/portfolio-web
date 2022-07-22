import { asLink } from '@prismicio/helpers';
import { GetStaticProps, NextPage } from 'next';
import { createClient } from '../prismicio';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient(context.previewData);
  // query for pdf link
  const pdfItem = client.getByUID('pdf', 'resume');
  const pdfLink = asLink((await pdfItem).data.pdfLink);
  return {
    props: { pdfLink },
  };
};

const Resume: NextPage = ({ pdfLink }: any) => (
  <div className="h-screen w-screen">
    <iframe className="h-full w-full" src={pdfLink} />
  </div>
);

export default Resume;
