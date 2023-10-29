import React from "react";

interface AssetCardProps {
  name: string;
  units: number;
  price: number;
  value: number;
}

const AssetCard: React.FC<AssetCardProps> = ({ name, units, price, value }) => {
  return (
    <div className="w-full mb-3 mx-10 bg-base-200 border border-white shadow-lg rounded-2xl p-4">
      <div className="flex">
        {/* First div: Image */}
        <div className="w-1/3">
          <img src="your-image-url.jpg" alt="Image" className="w-full h-auto" />
        </div>

        {/* Second div: Two stacked text sections */}
        <div className="w-2/3 p-4">
          <div className="text-section">
            <h3 className="font-bold">{name}</h3>
            <p>Units held: {units}</p>
          </div>
          <div className="text-section">
            <p>Price: {price}</p>
            <p>Value: {value}</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default AssetCard;
