import React from "react";

interface AssetCardProps {
  name: string;
  units: number;
  price: number;
  value: number;
}

const AssetCard: React.FC<AssetCardProps> = ({ name, units, price, value }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Units held: {units}</p>
      <p>Price: {price}</p>
      <p>Value: {value}</p>
    </div>
  );
};

export default AssetCard;
