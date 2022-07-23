import IconGrid from '../common/icon-grid';
import NavLinksList from './nav-links-list';

const divStyle = 'transition-all ease-in-out-expo duration-300 h-full';

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={
        divStyle +
        ' fixed bg-gray-400 z-30 ' +
        (isOpen ? 'w-full sm:w-96' : 'w-0')
      }
    >
      <div
        className={
          divStyle +
          ' absolute bg-gray-900 z-40 overflow-hidden ' +
          (isOpen ? 'w-full sm:w-96 delay-200' : 'w-0 delay-0')
        }
      >
        <div className="mt-5 relative flex justify-evenly flex-col child:self-center text-4xl text-white w-screen sm:w-96 h-full">
          <NavLinksList />
          <IconGrid expandFromTopLeft={false} />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
