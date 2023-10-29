import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

type Asset = {
  name: string;
  units: number;
};

type WheelProps = {
  assets: Asset[];
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // add more colors if you have many assets

const Wheel: React.FC<WheelProps> = ({ assets }) => {
  const totalUnits = assets.reduce((total, asset) => total + asset.units, 0);
  const formattedData = assets.map(asset => ({
    name: asset.name,
<<<<<<< HEAD
    value: Number(((asset.units / totalUnits) * 100).toFixed(2)), // percentage
  }));

  console.log(formattedData);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={formattedData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={100}
        fill="#8884d8"
        label
      >
=======
    value: ((asset.units / totalUnits) * 100).toFixed(2), // percentage
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie data={formattedData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={15} fill="#8884d8" label>
>>>>>>> master
        {formattedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Wheel;
