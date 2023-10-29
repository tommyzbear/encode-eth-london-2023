import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IdentificationIcon } from "@heroicons/react/24/outline";

function RecoverWalletFromCloud() {
  return (
    <div className="hero min-h-full rounded-r-xl bg-base-200 flex items-center justify-center">
      <div className="flex flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
        <IdentificationIcon className="h-8 w-8 fill-secondary" />
        <p>Recover from cloud</p>
        <Link href="/recovery/cloud" passHref className="link">
<<<<<<< HEAD
<<<<<<< HEAD
          <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Recover</button>
=======
          <button className="btn btn-primary">Recover</button>
>>>>>>> master
=======
          <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Recover</button>
>>>>>>> 6e21280b1399bb2110cbd8c9a219871c2b1758bc
        </Link>
      </div>
    </div>
  );
}

export default RecoverWalletFromCloud;
