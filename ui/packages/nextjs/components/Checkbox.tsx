import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
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
          label: "Arielo",
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
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      {options.map(({ label, value, status }) => (
        <div key={value} className="flex items-center mb-2 w-full justify-center">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={value}
              checked={selectedOptions.includes(value)}
              onChange={handleCheckboxChange}
              className="form-checkbox"
            />
            <span>{label}</span>
          </label>
          {status && <span className="ml-2 text-sm text-gray-500">{status}</span>}
        </div>
      ))}
      <div className="relative">
        <Link href="/recovery/friends" passHref className="link">
          <button className="btn btn-primary" type="submit">
            Request Recovery
          </button>
        </Link>
        {/* <button
          className="mt-4 transition-all duration-500 ease-in-out transform hover:bg-blue-500 hover:opacity-100 bg-opacity-20 border border-blue-500 text-blue-500 hover:text-white py-2 px-4 rounded"
          type="submit"
        >
          Request Recovery
        </button> */}
        {showPopup && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white p-4 rounded shadow-lg">
            Recovery Requested
          </div>
        )}
      </div>
    </form>
  );
};

export default Checkbox;
