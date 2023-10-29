import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
// TODO: update to designated chain
import { useAccount } from "wagmi";
import RecoverFromFriends from "~~/components/recovery/RecoverFromFriends";
import { Address } from "~~/components/scaffold-eth";

const Cloud: NextPage = () => {
  const accountState = useAccount();

  const [account, setAccount] = useState<string | null>(null);
  const [friends, setFriends] = useState<string[] | undefined>([]);
  const [balance, setBalance] = useState<number | undefined>(0);
  const [keys, setKeys] = useState<string[]>([]);
  const [length, setLength] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const account = localStorage.getItem("account");
      const friends = localStorage.getItem("friends");
      const balance = localStorage.getItem("balance") ?? 0;

      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i)!);
      }
      setAccount(account);
      setFriends(friends?.split(","));
      setBalance(Number(balance));
      setKeys(keys);
      setLength(localStorage.length);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col sm:grid-2 justify-center items-center">
      <div className="px-5">
        <h1 className="text-center mb-8">
          <span className="block text-2xl font-light mt-4 mt-20">Recovered information about your Smart Wallet</span>
          <span className="block text-2xl mb-2"></span>
        </h1>
      </div>

      <div className="rounded-xl bg-base-200 flex items-center justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Account</div>
            <div className="stat-value text-primary text-xs">{account}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <Image alt="eth_logo" src="/ethereum-eth-logo.svg" height={24} width={24} />
            </div>
            <div className="stat-title">Balance</div>
            <div className="stat-value text-primary">{balance} ETH</div>
          </div>

          <div className="stat">
            <div className="stat-title">Friends</div>
            {friends?.map((f, i) => (
              <div key={i} className="stat-value text-sm">
                <Address address={f} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-grow w-full mt-2 px-4 sm:px-8 py-2">
        <div className="card mx-auto w-full max-w-5xl">
          <div className="rounded-xl">
            <div className="">
              <RecoverFromFriends />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
