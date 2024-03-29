import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getData } from "../utils/getData";
import "../styles/activity.css";

const ActivityToolType = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip-container">
        <p className="tooltip-value">{payload[0].value} kg</p>
        <p className="tooltip-value">{payload[1].value} kCal</p>
      </div>
    );
  }
  return null;
};

const Activity = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY", id);
      if (!request) return alert("data error");

      setData(request.data.sessions);
    };
    data();
  }, [id]);

  if (data.length === 0) return null;

  for (let i = 0; i < data.length; i++) {
    data[i].day = i + 1;
  }

  return (
    <div className="wrapper">
      <div className="head">
        <div className="title-barChart">Activité quotidienne</div>
        <div style={{ display: "flex" }}>
          <div className="legend">
            <div className="chip" />
            <p>Poids (kg)</p>
          </div>
          <div className="legend">
            <div className="chip" style={{ background: "#E60000" }} />
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={200}>
        <BarChart data={data} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip content={<ActivityToolType />} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
