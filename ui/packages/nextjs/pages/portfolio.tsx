import { useEffect, useState } from "react";
import AssetCard from "../components/AssetCard";
import Chart from "../components/Chart";
import Wheel from "../components/Wheel";
import { getContractData } from "./fetchData";

const Portfolio: React.FC<PortfolioProps> = ({ contract }) => {
  const [name, setName] = useState("");
  const [units, setUnits] = useState(0);
  const [price, setPrice] = useState(0); // Needs to be retrieved from oracle
  const [value, setValue] = useState(0); // calculation needs to be performed (price * units)

  useEffect(() => {
    async function fetchData() {
      const data = await getContractData(contract);
      setName(data.name);
      setUnits(data.units);
      setPrice(data.price); // needs to be retrieved from oracle.
      setValue(price * units);
    }
    fetchData();
  }, [contract]);

  return (
    <div>
      <h1>Portfolio</h1>
      <Wheel assets={assets} />
      <Chart data={historicalData} />
      <div>
        <AssetCard name={name} units={units} price={price} value={value} />
      </div>
    </div>
  );
};

export default Portfolio;
