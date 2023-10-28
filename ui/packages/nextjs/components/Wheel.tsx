import React, { useEffect, useState } from "react";
import { contract } from "../utils/contract";
import { getContractAssets } from "../utils/fetchData";
import * as d3 from "d3";

interface Props {
  units: number[];
}

const Wheel: React.FC<Props> = ({ units }) => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Use the imported contract instance to fetch assets
      const assets = await getContractAssets(contract);
      const totalUnits = units.reduce((a, b) => a + b, 0);

      const holdings: { [key: string]: number } = {};
      for (const asset of assets) {
        holdings[asset.symbol] = asset.balance / totalUnits;
      }

      const data = Object.entries(holdings).map(([name, value]) => ({ name, value }));
      setData(data);
    }

    fetchData();
  }, [units]); // Remove contractAddress and contractAbi from dependency array

  const width = 400;
  const height = 400;
  const radius = Math.min(width, height) / 2;

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const pie = d3.pie<{ name: string; value: number }>().value(d => d.value);

  const arc = d3.arc<{ name: string; value: number }>().innerRadius(0).outerRadius(radius);

  const paths = pie(data);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {paths.map((d, i) => (
          <path key={i} d={arc(d)!} fill={color(d.data.name)} />
        ))}
      </g>
    </svg>
  );
};

export default Wheel;
