import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getData } from "../utils/getData";
import "../styles/user.css";
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performances";
import Activity from "../components/Activity";
import Score from "../components/Score";
import Nutrition from "../components/Nutrition";
import calories from "../assets/calories-icon.png";
import proteines from "../assets/protein-icon.png";
import carbs from "../assets/carbs-icon.png";
import fat from "../assets/fat-icon.png";

const User = () => {
  const { id } = useParams();
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFunk = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) return alert("data error");
      setData(request.data);
      setLoading(false);
    };
    dataFunk();
  }, [id]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (!data) {
    return <Navigate to="/error"></Navigate>;
  }

  return (
    <div className="profil">
      <h1>
        Bonjour{" "}
        <span style={{ color: "red" }}>{data?.userInfos?.firstName}</span>
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
      <div style={{ display: "flex", gap: 40, marginTop: 40 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Activity />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AverageSessions />
            <Performance />
            <Score data={data} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Nutrition
            icon={calories}
            value={`${data.keyData?.calorieCount}kCal`}
            title={"Calories"}
          />
          <Nutrition
            icon={proteines}
            value={`${data.keyData?.proteinCount}g`}
            title={"Proteines"}
          />
          <Nutrition
            icon={carbs}
            value={`${data.keyData?.carbohydrateCount}g`}
            title={"Glucides"}
          />
          <Nutrition
            icon={fat}
            value={`${data.keyData?.lipidCount}g`}
            title={"Lipides"}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
