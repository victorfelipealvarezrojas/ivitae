import { FaTimes } from 'react-icons/fa';

import { AppContextType, useGlobalContext } from './infrastructure/Context';
import sublinks from './presentation/routes/data';

const Sidebar = () => {
    const { sidebarState,isSidebarOpen  } = useGlobalContext() as AppContextType;
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={sidebarState}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;