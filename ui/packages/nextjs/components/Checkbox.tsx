import React, { useEffect, useState } from "react";
import Wallet from "../abi/TemporaryWallet.json";
import { ethers } from "ethers";

interface Option {
  label: string;
  value: string;
  status?: string;
}

interface CheckboxProps {
  onSelection: (selectedOptions: string[]) => void;
}

const Checkbox = ({ onSelection }: CheckboxProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<Option[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  useEffect(() => {
    const getOptions = async () => {
      // try {
      //   // Connect to the Ethereum network using ethers.js
      //   const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

      //   // Get the contract instance
      //   const contractAddress = Wallet.networks["5777"].address;
      //   const contract = new ethers.Contract(contractAddress, Wallet.abi, provider);

      //   // Call the contract method to get the options
      //   const result = await contract.getOptions();

      //   // Map the result to the Option interface
      //   const options = result.map((value: string, index: number) => ({
      //     label: `${index + 1}`,
      //     value,
      //   }));

      //   setOptions(options);
      // } catch (error) {
      //   console.error(error);
      // }

      const options = [
        {
          label: "Ariel",
          value: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        },
        {
          label: "Saida",
          value: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        },
        {
          label: "Tom 1",
          value: "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c",
        },
        {
          label: "Tom 2",
          value: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
        },
      ];
      setOptions(options);
    };

    getOptions();
  }, []);

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   try {
  //     // Connect to the Ethereum network using ethers.js
  //     const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

  //     // Get the signer's Ethereum address
  //     const signer = provider.getSigner();
  //     const signerAddress = await signer.getAddress();

  //     // Get the contract instance
  //     const contractAddress = Wallet.networks["5777"].address;
  //     const contract = new ethers.Contract(contractAddress, Wallet.abi, signer);

  //     // Generate a transaction for each selected friend address
  //     for (const friendAddress of selectedOptions) {
  //       const transaction = await contract.requestRecovery(friendAddress);

  //       // Send the transaction to the Ethereum network
  //       const receipt = await transaction.wait();

  //       // Log the transaction receipt
  //       console.log(`Transaction hash: ${receipt.transactionHash}`);
  //       console.log(`Gas used: ${receipt.gasUsed.toString()}`);
  //     }

  //     // Set the status of each option to "pending"
  //     setOptions(options =>
  //       options.map(option => (selectedOptions.includes(option.value) ? { ...option, status: "pending" } : option)),
  //     );

  //     // Call the onSelection prop with the selected options
  //     onSelection(selectedOptions);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <form onSubmit={() => {}}>
      <h2>Select Options</h2>
      {options.map(({ label, value, status }) => (
        <div key={value}>
          <label>
            <input
              type="checkbox"
              value={value}
              checked={selectedOptions.includes(value)}
              onChange={handleCheckboxChange}
            />
            {label}
          </label>
          {status && <span>{status}</span>}
        </div>
      ))}
      <button type="submit">Request Recovery</button>
    </form>
  );
};

export default Checkbox;
