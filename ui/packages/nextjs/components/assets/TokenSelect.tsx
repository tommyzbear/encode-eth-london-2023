import { useEffect, useState } from "react";
import { useGlobalState } from "~~/services/store/store";

type TokenSelectProps = {
  readonly isFrom?: boolean;
};
export const TokenSelect = (props: TokenSelectProps) => {
  // Get list of coins
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice);

  const [srcToken, setSrcToken] = useState("ETH");
  const [destToken, setDestToken] = useState("USDC");
  const [srcAmount, setSrcAmount] = useState(0);
  // TODO: set destination amount when input changed for src amount
  const [destAmount, setDestAmount] = useState(0);
  let coins = ["ETH", "BTC", "ARB", "AVAX", "USDC"];

  useEffect(() => {
    const updateDestAmount = () => {
      // console.log(srcAmount);
      // console.log(destAmount);
      // console.log(nativeCurrencyPrice);
      if (srcToken === "ETH" && destToken === "USDC") {
        const newDestAmount = srcAmount * nativeCurrencyPrice;
        if (destAmount != newDestAmount) {
          setDestAmount(newDestAmount);
        }
      }
    };

    updateDestAmount();
  }, [srcAmount, nativeCurrencyPrice, destAmount, srcToken, destToken]);

  useEffect(() => {
    console.log(destAmount);
  }, [destAmount]);

  return (
    <>
      {props.isFrom ? (
        <div className="flex flex-row">
          <div className="dropdown dropdown-left dropdown-end">
            <label tabIndex={0} className="btn m-1">
              {srcToken}
            </label>

            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              {coins.map((c, i) => {
                if (destToken === c) {
                  return;
                } else {
                  return (
                    <li key={i}>
                      <a onClick={() => setSrcToken(c)}>{c}</a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <input
            type="number"
            placeholder="You pay"
            value={srcAmount === 0 ? "" : srcAmount}
            onChange={e => setSrcAmount(Number(e.currentTarget.value))}
            className="input input-bordered w-full max-w-xs flex my-auto"
          />
        </div>
      ) : (
        <div className="flex flex-row">
          <input
            type="number"
            placeholder="You receive"
            value={destAmount}
            className="input input-bordered w-full max-w-xs flex my-auto"
          />

          <div className="dropdown dropdown-right flex justify-end">
            <label tabIndex={0} className="btn m-1">
              {destToken}
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              {coins.map((c, i) => {
                if (srcToken === c) {
                  return;
                } else {
                  return (
                    <li key={i}>
                      <a onClick={() => setDestToken(c)}>{c}</a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
