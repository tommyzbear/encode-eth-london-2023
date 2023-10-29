import Link from "next/link";
import { KeyIcon, WalletIcon } from "@heroicons/react/24/outline";

function PrivateKeyRecoveryInfo() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200 flex items-center justify-center">
      <div className="flex flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
        <WalletIcon className="h-8 w-8 fill-secondary" />
        <p>Set up new wallet</p>
        <Link href="/recovery/from_key" passHref className="link">
<<<<<<< HEAD
          <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Setup new</button>
=======
          <button className="btn btn-primary">Setup new</button>
>>>>>>> master
        </Link>{" "}
      </div>
    </div>
  );
}

export default PrivateKeyRecoveryInfo;
