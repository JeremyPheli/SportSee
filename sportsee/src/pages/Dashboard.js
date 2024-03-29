import { NavLink } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavLink
        to={"user/12"}
        style={{ color: "white", textDecoration: "none" }}
      >
        <div className="name-1">KARL</div>
      </NavLink>
      <NavLink
        to={"user/18"}
        style={{ color: "white", textDecoration: "none" }}
      >
        <div className="name-2">CECILIA</div>
      </NavLink>
    </div>
  );
};

export default Dashboard;
