import { ReactNode, useEffect, useRef, useState } from 'react';
import Nav from './nav';
import WAVES from 'vanta/dist/vanta.waves.min';
import Head from 'next/head';

export default function Layout({ children }: { children: ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const bgDiv = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: bgDiv.current,
        color: 0x040e1e,
        shininess: 0.00,
      }))
    }
    return () => {
      // @ts-ignore dumb `never` type check
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect])
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer />
      </Head>
      <div ref={bgDiv} className="fixed h-screen w-screen" />
      <div className="dark bg-gray-900">
        <Nav>
          <div className="md:px-12 px-6 min-h-screen">{children}</div>
        </Nav>
      </div>
    </>
  );
}
