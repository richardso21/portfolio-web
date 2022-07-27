import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { PrismicProvider } from '@prismicio/react';
import { linkResolver } from '../prismicio';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const component: ReactNode = getLayout(<Component {...pageProps} />);

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      {/* <NextNProgress color="#60a5fa" height={5} /> */}
      {component}
    </PrismicProvider>
  );
}

export default MyApp;
