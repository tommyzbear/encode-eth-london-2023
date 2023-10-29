import Link from "next/link";
import { KeyIcon, WalletIcon } from "@heroicons/react/24/outline";

function PrivateKeyRecoveryInfo() {
  return (
    <div className="hero min-h-full rounded-l-xl flex items-center justify-center">
      <div className="flex flex-col justify-content px-auto mx-auto py-4 text-center align-center max-w-xs rounded-3xl">
        <WalletIcon className="h-8 w-8 fill-secondary" />
        <p>Set up new wallet</p>
        <Link href="/recovery/from_key" passHref className="link">
          <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
            Setup new
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default PrivateKeyRecoveryInfo;
