import { useGlobalContext } from "../context.jsx";
import sublinks from "../data.jsx";

import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-container">
        <ul className="sidebar-links">
          {sublinks.map((link) => {
            const { pageId, page, links } = link;
            return (
              <li key={pageId} className="link">
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((item) => {
                    const { id, label, icon, url } = item;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
