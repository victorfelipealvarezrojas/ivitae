import { FaBars } from 'react-icons/fa';

import  NavLinks  from './NavLinks';
import { AppContextType, useGlobalContext } from './infrastructure/Context';

const Navbar = () => {
  const { sidebarState } = useGlobalContext() as AppContextType;
  const handleSubmenu = (e: any) => {
    if (!e.target.classList.contains('nav-link')) {
     //  setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'></h3>
        <button className='toggle-btn' onClick={sidebarState}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;