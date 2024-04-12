import React, { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { useParams } from "react-router";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { formatedDataKind } from "../utils/methods";

const Performance = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE", id);
      if (!request) return alert("data error");
      setData(formatedDataKind(request));
    };
    data();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "258px",
        height: "263px",
        background: "#282D30",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
        borderRadius: "5px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
