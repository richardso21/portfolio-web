import { ReactNode } from 'react';
import Nav from './nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="dark bg-gray-800">
      <Nav>
        <div className="md:px-12 px-6 min-h-screen">{children}</div>
      </Nav>
    </div>
  );
}
