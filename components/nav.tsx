import { ReactNode, useState } from 'react';
import Hamburger from './nav/hamburger';
import NavMenu from './nav/menu';

const Nav = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} />
      <div
        className={
          'relative transition-all ease-in-out-expo duration-500 ' +
          (isOpen
            ? 'left-full sm:left-96 brightness-75 blur pointer-events-none'
            : 'left-0')
        }
      >
        {children}
      </div>
    </div>
  );
};
// return <nav>testing</nav>;
export default Nav;
