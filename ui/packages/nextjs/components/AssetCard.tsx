import React from "react";

interface AssetCardProps {
  name: string;
  units: number;
  price: number;
  value: number;
}

const AssetCard: React.FC<AssetCardProps> = ({ name, units, price, value }) => {
  return (
    <div className="w-full mb-3 mx-10 bg-base-200 border border-white shadow-lg  rounded-2xl p-4">
      <h3 className="font-bold">{name}</h3>
      <p>Units held: {units}</p>
      <p>Price: {price}</p>
      <p>Value: {value}</p>
    </div>
  );
};

export default AssetCard;
