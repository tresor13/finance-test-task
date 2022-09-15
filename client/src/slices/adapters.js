const tickersDataAdapter = (payload) => {
  return payload.map((objData) => {
    return {
      name: objData.ticker,
      exchange: objData.exchange,
      price: Number(objData.price),
      change: Number(objData.change),
      change_percent: Number(objData.change_percent),
      dividend: Number(objData.dividend),
      profit: Number(objData.yield),
      last_trade_time: objData.last_trade_time,
    };
  });
};

export { tickersDataAdapter };
