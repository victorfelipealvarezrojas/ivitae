import {  AppContextType, useGlobalContext } from './infrastructure/Context';
import sublinks from './presentation/routes/data';

const NavLinks = () => {
  const { setPageId } = useGlobalContext() as AppContextType;
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;