import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <NavLinks />
        <button onClick={openSidebar} className="toggle-btn ">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
