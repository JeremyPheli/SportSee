import "../styles/nutrition.css";

const Nutrition = ({ icon, value, title }) => {
  return (
    <div className="container-nutrition">
      <img className="icon-nutrition" src={icon} alt="icon value" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="value-nutrition">{value}</div>
        <div className="title-nutrition">{title}</div>
      </div>
    </div>
  );
};

export default Nutrition;
