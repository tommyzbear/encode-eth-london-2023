import { useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { hardhat } from "viem/chains";
import { PaginationButton } from "~~/components/blockexplorer/PaginationButton";
import { SearchBar } from "~~/components/blockexplorer/SearchBar";
import { TransactionsTable } from "~~/components/blockexplorer/TransactionsTable";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";

const Nfts: NextPage = () => {
  const { blocks, transactionReceipts, currentPage, totalBlocks, setCurrentPage, error } = useFetchBlocks();

  // Sample card data
  const cardData = [
    {
      id: 1,
      title: "January 3, 2009: Bitcoin Genesis Block",
      text: "If a dog chews shoes whose shoes does he choose?",
    },
    // Add more cards here with unique data
    {
      id: 2,
      title: "Bitcoin Pizza Day ",
      text: "She sells seashells by the seashore.",
    },

    {
      id: 3,
      title: "December 17, 2017",
      text: "How can a clam cram in a clean cream can?",
    },

    {
      id: 4,
      title: "Black Thursday ",
      text: "I slit the sheet, the sheet I slit, and on the slitted sheet I sit.",
    },
  ];

  return (
    <div>
      <div className="flex text-center my-10">Hello, those are your NFTs</div>
      <div className="grid grid-cols-3 gap-9 my-10">
        {cardData.map((card) => (
          <div key={card.id} className="card w-96 bg-base-200 shadow-xl">
            <figure>
              <Image src="/nft.png" alt="NFT" width={400} height={300} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.text}</p>
              <div className="card-actions justify-end">
                <button className="transition-all duration-500 ease-in-out transform fade-in hover:bg-primary hover:opacity-100 bg-opacity-20 border border-primary text-primary hover:text-white py-2 px-4 rounded">See details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nfts;
