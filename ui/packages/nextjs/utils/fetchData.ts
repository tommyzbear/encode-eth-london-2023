import { contract } from "./contract";

export const getContractAssets = async () => {
  try {
    // Assume getAssets is a method in your contract that returns an array of asset symbols
    const assetSymbols = await contract.getAssets();

    const assetsPromises = assetSymbols.map(async (symbol: string) => {
      try {
        const balance = await contract.balanceOf(symbol);
        return {
          symbol,
          balance: parseInt(balance.toString()),
        };
      } catch (error) {
        console.error(`Failed to fetch balance for asset ${symbol}:`, error);
        return {
          symbol,
          balance: 0, // or some other placeholder value
          error: (error as Error).message,
        };
      }
    });

    // Wait for all asset balance fetch promises to resolve
    const assets = await Promise.all(assetsPromises);

    // Filter out any null objects (i.e., assets that failed to fetch balance)
    return assets.filter(asset => asset !== null);
  } catch (error) {
    console.error("Failed to fetch contract assets:", error);
    throw error;
  }
};
