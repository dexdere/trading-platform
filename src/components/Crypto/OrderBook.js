import React, { useState, useEffect } from "react";
import style from "./style.module.css";

function OrderBook() {
  const [orders, setOrders] = useState([]);
  const currencyPair = "btcusd";

  const currencyArray = currencyPair.toUpperCase().match(/.{1,3}/g);

  useEffect(() => {
    const subscribe = {
      event: "bts:subscribe",
      data: {
        channel: `order_book_${currencyPair}`,
      },
    };

    const ws = new WebSocket("wss://ws.bitstamp.net");

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data);
    };

    return () => {
      ws.close();
    };
  }, [currencyPair]);

  const { bids, asks } = orders;

  const orderRows = (arr) =>
    arr &&
    // eslint-disable-next-line array-callback-return
    arr.map((item, index) => {
      if (index <= 10) {
        return (
          <tr key={index}>
            <td>{item[1]} </td>
            <td>{item[0]} </td>
          </tr>
        );
      }
    });

  const orderHead = (title) => (
    <thead>
      <tr>
        <th colSpan="2">Order Book ({title})</th>
      </tr>
      <tr>
        <th>Amount ({currencyArray[0]}) </th>
        <th>Price ({currencyArray[1]}) </th>
      </tr>
    </thead>
  );

  return (
    <article className={style.orderContainer}>
      <table>
        {orderHead("Bids")}
        <tbody>{orderRows(bids)}</tbody>
      </table>
      <br />
      <table>
        {orderHead("Asks")}
        <tbody>{orderRows(asks)}</tbody>
      </table>
    </article>
  );
}

export default OrderBook;
