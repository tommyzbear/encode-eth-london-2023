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
import RecoveryInfo from "~~/components/user/RecoveryInfo";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";

const Recovery: NextPage = () => {
  const accountState = useAccount();

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <RecoveryInfo />
          </div>
          <div className="py-24 px-10 flex items-center justify-center">
            {accountState.isConnected ? (
              <h2 className="text-2xl font-semibold mb-2 text-center">You are connected!</h2>
            ) : (
              <>
                <div className="grid grid-rows-2">
                  <h2 className="text-2xl font-semibold mb-2 text-center">Try to recover previous smart wallet</h2>

                  <Link className="text-center" href="/recovery/friends">
                    <button className="btn btn-accent">
                      <h2 className="text-xl font-semibold mx-2">Social Recovery</h2>
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
