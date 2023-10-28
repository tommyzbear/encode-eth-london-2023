import { useEffect } from "react";
import type { NextPage } from "next";
// TODO: update to designated chain
import { hardhat } from "viem/chains";
import { PaginationButton } from "~~/components/blockexplorer/PaginationButton";
import { SearchBar } from "~~/components/blockexplorer/SearchBar";
import { TransactionsTable } from "~~/components/blockexplorer/TransactionsTable";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";


const Nfts: NextPage = () => {
  const { blocks, transactionReceipts, currentPage, totalBlocks, setCurrentPage, error } = useFetchBlocks();

return (
<>
  <div className="flex mx-auto my-10">Hello</div>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="packages/nextjs/public/nft.png" alt="NFT" />
        </figure>
      <div className="card-body">
        <h2 className="card-title">#1234567</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See details</button>
      </div>
    </div>
  </div>
</>
  );

};

export default Nfts;
