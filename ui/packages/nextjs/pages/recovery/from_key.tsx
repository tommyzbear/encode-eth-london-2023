import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, IdentificationIcon, KeyIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { AddressInput, ContractInput, FaucetButton, InputBase } from "~~/components/scaffold-eth";
import React, { useState } from 'react';

const Recovery: NextPage = () => {

  // Initializing state for the private key as a string using the useState hook
  const [privateKey, setPrivateKey] = useState<string>();

  const [hasError, setHasError] = useState(true); // Condición de error, cambiar a false para ocultar el mensaje

  const defaultKey = "e97689d013e6f09bd73b6fdd5c57ec6b7d4b421c1b8e605276c7c0e7db97cf83";
  let errorMessage:string = "";

  const sampleKey = "89a37c7f2e1d5b0e4c72f98d6a3e5f8b09d2c683287bf1a2d9f0e937f4c8a2e1";

  // If the length of the privateKey string meets the condition
  if (setPrivateKey.length > 0 && setPrivateKey.length < 64) {
    
    console.log(privateKey);
    // check if the input key match with the default(recover) key
    if(privateKey != defaultKey){
      
      errorMessage = "Error, your key don't match";
      //setHasError(false);
      console.log(errorMessage);
    }else{
      console.log("Matching keys");
      setHasError(true);
    }

  }else{
    setHasError(false);
    errorMessage = "Error the private key should be > 0 and < 64 characters";
    console.log(errorMessage);
  }
  

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
          <span className="block text-4xl font-bold">Recovering From Key</span>
            <span className="block text-2xl mb-2"></span>
            
          </h1>
          <p className="text-center text-lg">
            Introduce your{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              Private Key
            </code>
          </p>
          <span>
            <KeyIcon className="h-8 w-8 fill-secondary">
              
            </KeyIcon>
            <InputBase name="privateKey" placeholder="Private Key" value={privateKey} onChange={setPrivateKey} />
            
          </span>
          {!hasError ? (
            <p className="text-center text-lg">{errorMessage}</p>
          ) : null}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <IdentificationIcon className="h-8 w-8 fill-secondary" />
              <p>
                Recovering wallet from {" "}
                <Link href="/recovery/from_friend" passHref className="link">
                  Friends
                </Link>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recovery;
