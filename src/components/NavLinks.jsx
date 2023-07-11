import { useGlobalContext } from "../context";

import sublinks from "../data";

const NavLinks = () => {
  const { openSubmenu } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button
            key={pageId}
            onMouseEnter={() => openSubmenu(pageId)}
            className="nav-link"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
