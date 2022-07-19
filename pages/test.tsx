import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';

const Test: NextPageWithLayout = () => {
  return <div>Hello, world!</div>;
};

Test.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default Test;
