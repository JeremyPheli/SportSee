import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/nav-h.css";

const NavHeader = () => {
  return (
    <div className="nav-h">
      <NavLink to={"/"}>
        <img src={logo} className="logo" alt="SportSee Logo" />
      </NavLink>
      <nav>
        <NavLink to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <span>Acceuil</span>
        </NavLink>
        <span>Profils</span>
        <span>Réglagles</span>
        <span>Communauté</span>
      </nav>
    </div>
  );
};

export default NavHeader;
