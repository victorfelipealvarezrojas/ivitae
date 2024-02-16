import { AppContextType, useGlobalContext } from '../../../../infrastructure/Context';
import sublinks from '../../../routes/data';
import Sublink from '../../atoms/link/Sublink';




const NavLinks = () => {
  const { setPageId } = useGlobalContext() as AppContextType;

  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <Sublink
            key={pageId}
            pageId={pageId}
            page={page}
            onMouseEnter={setPageId}
          />
        );
      })}
    </div>
  );
};

export default NavLinks;