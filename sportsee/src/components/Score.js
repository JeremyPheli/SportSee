import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "../styles/score.css";

const Score = ({ data }) => {
  const score = [
    { value: data.todayScore ? data.todayScore : data.score },
    { value: data.todayScore ? 1 - data.todayScore : 1 - data.score },
  ];
  const COLORS = ["#ff0000", "#FBFBFB"];

  return (
    <div className="container-score">
      <div className="title-score">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            fill="#8884d8"
            dataKey="value"
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cornerRadius={10}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-score">
        <div className="score">
          {score[0].value * 100}%<br />
        </div>
        de votre
        <br /> objectif
      </div>
    </div>
  );
};

export default Score;
