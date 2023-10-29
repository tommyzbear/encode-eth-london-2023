import type { NextPage } from "next";
import { TokenSelect } from "~~/components/assets/TokenSelect";

const Swap: NextPage = () => {
  return (
    <div className="container mx-auto my-2">
      <div className="min-h-screen flex items-center mx-6">
        <div className="card mx-auto w-full max-w-xl">
          <div className="grid grid-rows-2">
            <div className="grid md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl mx-2">
              <div className="">
                <TokenSelect isFrom />
              </div>
              <div className="">
                <TokenSelect />
              </div>
            </div>
            <div className="flex items-center justify-center mx-20">
              <button className="btn btn-accent btn-md rounded-full w-full">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
