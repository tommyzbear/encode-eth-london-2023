import { useEffect } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import type { NextPage } from "next";
// TODO: update to designated chain
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import { RainbowKitLoginConnectButton } from "~~/components/assets";
import { PaginationButton } from "~~/components/blockexplorer/PaginationButton";
import { SearchBar } from "~~/components/blockexplorer/SearchBar";
import { TransactionsTable } from "~~/components/blockexplorer/TransactionsTable";
import PrivateKeyRecoveryInfo from "~~/components/recovery/PrivateKeyRecoveryInfo";
import RecoverWalletFromCloud from "~~/components/recovery/RecoverWalletFromCloud";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";

const Recovery: NextPage = () => {
  const accountState = useAccount();

  useEffect(() => {
    // Perform localStorage action
    localStorage?.setItem("account", "0x656B1D50f4FD30A0A0FE986285256230b100a913");
    localStorage?.setItem(
      "friends",
      "0x0c1e4F6633425a70f27462b558dc184AB30cb48f,0x6f20E8Fcb7f83A66F2177c4BC798CeA50Bba9F31",
    );
    localStorage?.setItem("balance", "123");
  }, []);

  return (
    <div className="flex items-center flex-col flex-grow pt-20">
      <div className="px-5">
        <h1 className="text-center mb-4">
          <span className="block text-4xl font-light">Smart Wallet</span>
          <span className="block text-2xl mb-2"></span>
        </h1>
        <p className="text-center text-lg">Setup a new Smart Contract Wallet or Recover from cloud</p>
      </div>

      <div className="flex-grow w-full mt-2 px-2 py-2">
        <div className="card mx-auto w-full max-w-5xl">
          <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl">
            <div className="">
              <PrivateKeyRecoveryInfo />
            </div>
            <div>
              <RecoverWalletFromCloud />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
