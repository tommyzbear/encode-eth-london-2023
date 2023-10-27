import { defineChain } from "viem/utils/chain";

export const coston2 = /*#__PURE__*/ defineChain({
  id: 114,
  name: "Flare Coston2",
  network: "flare-coston2",
  nativeCurrency: {
    decimals: 18,
    name: "flare",
    symbol: "C2FLR",
  },
  rpcUrls: {
    default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
  },
  blockExplorers: {
    default: {
      name: "Coston2 Explorer",
      url: "https://coston2-explorer.flare.network",
    },
  },
});
