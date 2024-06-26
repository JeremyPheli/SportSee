import React, { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { useParams } from "react-router";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from "recharts";
import "../styles/averageSessions.css";
import { formatedDataSessionDay } from "../utils/methods";

const SessionsToolTip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="container-tooltip">
        <p className="text-tooltip">{payload[0].value}min</p>
      </div>
    );
  }
  return null;
};

const CustomizedCursor = (props) => {
  const pointX = props.points[0].x;
  const pointY = props.points[0].y;
  const widthRectangle = props.width;
  const heightRectangle = props.height ? props.height + 100 : props.height;
  return (
    <Rectangle
      x={pointX}
      y={pointY}
      width={widthRectangle}
      height={heightRectangle}
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

const AverageSessions = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", id);
      if (!request) return alert("data error");
      setData(formatedDataSessionDay(request));
    };
    data();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <div className="container">
      <div className="title-averageSession">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip
            content={<SessionsToolTip />}
            cursor={<CustomizedCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 3, strokeWidth: 3, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
