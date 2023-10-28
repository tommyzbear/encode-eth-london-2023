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
          <button className="btn btn-primary">Recover</button>
        </Link>
      </div>
    </div>
  );
}

export default RecoverWalletFromCloud;
