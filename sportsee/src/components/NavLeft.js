import "../styles/nav-l.css";
import icon0 from "../assets/nav-l/icon-0.png";
import icon1 from "../assets/nav-l/icon-1.png";
import icon2 from "../assets/nav-l/icon-2.png";
import icon3 from "../assets/nav-l/icon-3.png";

const NavLeft = () => {
  return (
    <div className="nav-l">
      <div className="nav-l-btns">
        <img src={icon3} className="nav-l-btn" alt="btn" />
        <img src={icon2} className="nav-l-btn" alt="btn" />
        <img src={icon1} className="nav-l-btn" alt="btn" />
        <img src={icon0} className="nav-l-btn" alt="btn" />
      </div>
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  );
};

export default NavLeft;
