import { AppContextType, useGlobalContext } from '../../../../infrastructure/Context';
import sublinks from '../../../routes/data';
import { useRef } from 'react';

import './submenu.css'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext() as AppContextType;
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event: any) => {
    const submenu = submenuContainer.current;
    ///@ts-ignore
    const { left, right, bottom } = submenu!.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            //@ts-ignore
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;