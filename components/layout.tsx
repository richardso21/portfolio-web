import { ReactNode, useEffect, useRef, useState } from 'react';
import Nav from './nav';
import WAVES from 'vanta/dist/vanta.waves.min';

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
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect])
  return (
    <>
      <div ref={bgDiv} className="fixed h-screen w-screen" />
      <div className="dark">
        <Nav>
          <div className="md:px-12 px-6 min-h-screen">{children}</div>
        </Nav>
      </div>
    </>
  );
}
