import React, { useEffect, useState } from "react";
import AssetCard from "../../components/AssetCard";
import Wheel from "../../components/Wheel";
import { useScaffoldContract } from "../../hooks/scaffold-eth";

type Asset = {
  name: string;
  units: number;
  price: number;
  value: number;
};

const Portfolio: React.FC = () => {
  const { data: yourContract } = useScaffoldContract({ contractName: "YourContract" });
  const [assetData, setAssetData] = useState<Asset[] | null>([
    {
      name: "ETH",
      units: 1,
      price: 3000,
      value: 1000,
    },
    {
      name: "BTC",
      units: 1,
      price: 30000,
      value: 1000,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  // useEffect(() => {
  //   const fetchAssetData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await yourContract?.read.getAssetData();
  //       // Assume fetchPrice is a function to get the latest price from the oracle
  //       const prices = await Promise.all((data as Asset[]).map((asset: Asset) => fetchPrice(asset.name)));
  //       const updatedData = (data as Asset[]).map((asset: Asset, index: number) => ({
  //         ...asset,
  //         price: prices[index],
  //         value: prices[index] * asset.units,
  //       }));
  //       setAssetData(updatedData);
  //     } catch (err: any) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAssetData();
  // }, [yourContract]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Wheel assets={assetData || []} />
        {assetData?.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      {/* <Chart data={assetData} /> */}
    </div>
  );
};

export default Portfolio;
