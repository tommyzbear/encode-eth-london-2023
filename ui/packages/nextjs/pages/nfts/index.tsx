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

  return <div className="container mx-auto my-10">Hello</div>;
};

export default Nfts;
