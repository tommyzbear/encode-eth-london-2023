import { useEffect } from "react";
import Image from "next/image";
import type { NextPage } from "next";
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
      <div className="flex justify-center text-center text-lg font-light mt-8">Hello, those are your NFTs:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 mx-4">
        {cardData.map(card => (
          <div key={card.id} className="card bg-base-200 shadow-xl p-4">
            <figure className="mb-4">
              <Image src="/nft.png" alt="NFT" width={400} height={300} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-sm mb-4 mt-0">{card.text}</p>
              <div className="card-actions flex justify-end">
                <button className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-white bg-opacity-20 border border-primary text-primary py-2 px-4 rounded">
                  See details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nfts;
