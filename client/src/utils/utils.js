const getStatus = (ticker, nextProfit) => {
  const existedProfit = ticker && ticker.profit;
  if (typeof existedProfit === "number" && nextProfit > ticker.profit)
    return "rising";
  if (typeof existedProfit === "number" && nextProfit < ticker.profit)
    return "falling";
  return "noChange";
};

export { getStatus };
