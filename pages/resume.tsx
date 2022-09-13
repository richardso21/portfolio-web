import Head from 'next/head';
import { NextPage } from 'next';

// export const getStaticProps: GetStaticProps = async (context) => {
//   const client = createClient(context.previewData);
//   // query for pdf link
//   const pdfItem = client.getByUID('pdf', 'resume');
//   const pdfLink = asLink((await pdfItem).data.pdfLink);
//   return {
//     props: { pdfLink },
//     revalidate: 60,
//   };
// };

const Resume: NextPage = ({ pdfLink }: any) => (
  <>
    <Head>
      <title>Resume | Richard So</title>
    </Head>
    <div className="h-screen w-screen">
      {/* <iframe className="h-full w-full" src={pdfLink} /> */}
      <iframe
        className="h-full w-full"
        src="https://cdn.jsdelivr.net/gh/richardso21/resume/RSOresume.pdf"
      />
    </div>
  </>
);

export default Resume;
