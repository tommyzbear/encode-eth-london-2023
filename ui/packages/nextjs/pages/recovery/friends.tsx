import type { NextPage } from "next";
// TODO: update to designated chain
import { useAccount } from "wagmi";
import FriendInfo from "~~/components/recovery/FriendInfo";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";

const Friends: NextPage = () => {
  const accountState = useAccount();

  const frens = ["0xf20E8Fcb7f83A66F2177c4BC798CeA50Bba9F31", "0x656B1D50f4FD30A0A0FE986285256230b100a913"];

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl">
        <div className="text-center px-12">RECOVERY REQUEST STATUS</div>
        <div className="flex w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-0 flex-col lg:!flex-row z-10">
          {frens.map((fren, i) => (
            <div
              key={i}
              className="bg-base-100 relative w-full h-full max-w-full p-3 rounded-xl 
            overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)]"
            >
              <FriendInfo address={fren} />
            </div>
          ))}
          {/* <div className="py-24 px-10 flex items-center justify-center">
            {accountState.isConnected ? (
              <h2 className="text-2xl font-semibold mb-2 text-center">You are connected!</h2>
            ) : (
              <>
                <div className="grid grid-rows-2">
                  <h2 className="text-2xl font-semibold mb-2 text-center">Try to recover previous smart wallet</h2>
                  <button className="btn btn-accent">
                    <h2 className="text-xl font-semibold text-center mx-2">Social Recovery</h2>
                  </button>
                </div>
              </>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Friends;
