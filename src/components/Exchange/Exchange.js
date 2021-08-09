import React from "react";
import OrderBook from "./OrderBook";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import style from "./style.module.css";

function Exchange() {
  return (
    <div>
      <OrderBook />
      <TradingViewWidget
        symbol="BTCUSD"
        theme={Themes.DARK}
        locale="tr"
        width="1250"
        height="600px"
      />
    </div>
  );
}

export default Exchange;
