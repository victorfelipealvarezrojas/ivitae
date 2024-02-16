import React from 'react';

interface SublinkProps {
  pageId: string;
  page: string;
  onMouseEnter: (pageId: string) => void;
}

const Sublink: React.FC<SublinkProps> = ({ pageId, page, onMouseEnter }) => {
  return (
    <button
      className='nav-link'
      onMouseEnter={() => onMouseEnter(pageId)}
    >
      {page}
    </button>
  );
};

export default Sublink;