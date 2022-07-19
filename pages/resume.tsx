import { NextPage } from 'next';

const Resume: NextPage = () => (
  <div className="h-screen w-screen">
    <iframe className="h-full w-full" src="/pdf/RSOresume.pdf" />
  </div>
);

export default Resume;
