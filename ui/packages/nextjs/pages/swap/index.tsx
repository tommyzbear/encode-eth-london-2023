import type { NextPage } from "next";
import { TokenSelect } from "~~/components/assets/TokenSelect";

const Swap: NextPage = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="min-h-screen bg-base-200 flex items-center">
        <div className="card mx-auto w-full max-w-xl shadow-xl">
          <div className="grid grid-rows-2">
            <div className="grid md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
              <div className="">
                <TokenSelect isFrom />
              </div>
              <div className="">
                <TokenSelect />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn btn-accent btn-md rounded-full w-full">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
