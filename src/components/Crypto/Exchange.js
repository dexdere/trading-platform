import React from "react";
import OrderBook from "./OrderBook";
import MarketPlace from "./MarketPlace";
import BuySell from "./BuySell";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const inlineStyle = { backgroundColor: "#131722", height: "1000px" };

function Exchange() {
  return (
    <div style={inlineStyle}>
      <MarketPlace />
      <OrderBook />
      <TradingViewWidget
        symbol="BTCUSD"
        theme={Themes.DARK}
        locale="tr"
        width="1250"
        height="600px"
      />
      <BuySell />
    </div>
  );
}

export default Exchange;
