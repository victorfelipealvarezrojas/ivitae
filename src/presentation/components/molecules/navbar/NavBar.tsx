import { FaBars } from 'react-icons/fa';


import { AppContextType, useGlobalContext } from '../../../../infrastructure/Context';
import NavLinks from '../navLinks/NavLinks';


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