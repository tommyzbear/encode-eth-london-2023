import type { NextPage } from "next";
import { TokenSelect } from "~~/components/assets/TokenSelect";

const Swap: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center mx-6">
        <div className="card mx-auto w-full max-w-xl py-0">
          <div className="grid grid-rows-1">
            <img src="swap.png" alt="Your Image" className="flex w-16 justify-center mx-auto mb-10 mt-20 py-0" />
            <div className="bg-white py-2 rounded-lg w-full my-0 mx-auto sm:grid sm:grid-cols-2 md:grid-cols-1">
              <div className="">
                <TokenSelect isFrom />
              </div>
              <div className="">
                <TokenSelect />
              </div>
            </div>
            <div className="flex justify-center px-4 mt-10">
              <button className="btn btn-primary btn-md w-full text-white font-light">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
