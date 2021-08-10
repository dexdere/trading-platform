/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./style.module.css";

function BuySell() {
  return (
    <div className={style.buySellDiv}>
      <article className={style.article}>
        <ul>
          <a href="#">Limit </a>
          <a href="#">Market </a>
          <a href="#">Stop Limit </a>
          <a href="#">Stop Market </a>
        </ul>

        <div className={style.spanDiv}>
          <span>
            <input className={style.buyInput} placeholder="Price" />
            <b>BTC</b>
          </span>

          <br />

          <span>
            <input className={style.buyInput} placeholder="Amount" />
            <b>ETH</b>
          </span>

          <br />

          <div>
            <button className={style.percentButton}>25%</button>
            <button className={style.percentButton}>50%</button>
            <button className={style.percentButton}>75%</button>
            <button className={style.percentButton}>100%</button>
          </div>

          <div className={style.pDiv}>
            <p>
              Available: <span>0 BTC = 0 USD</span> <br />
              Volume:<span>0 BTC = 0 USD</span> <br />
              Margin:<span>0 BTC = 0 USD</span> <br />
              Fee:<span>0 BTC = 0 USD</span>
            </p>
          </div>
        </div>
        <div>
          <button className={style.buyButton}>
            <b>BUY</b>
          </button>
        </div>
      </article>

      
      <article className={style.article}>
        <ul>
          <a href="#">Limit </a>
          <a href="#">Market </a>
          <a href="#">Stop Limit </a>
          <a href="#">Stop Market </a>
        </ul>

        <div className={style.spanDiv}>
          <span>
            <input className={style.buyInput} placeholder="Price" />
            <b>BTC</b>
          </span>

          <br />

          <span>
            <input className={style.buyInput} placeholder="Amount" />
            <b>ETH</b>
          </span>

          <br />

          <div>
            <button className={style.percentButton}>25%</button>
            <button className={style.percentButton}>50%</button>
            <button className={style.percentButton}>75%</button>
            <button className={style.percentButton}>100%</button>
          </div>

          <div className={style.pDiv}>
            <p>
              Available: <span>0 BTC = 0 USD</span> <br />
              Volume:<span>0 BTC = 0 USD</span> <br />
              Margin:<span>0 BTC = 0 USD</span> <br />
              Fee:<span>0 BTC = 0 USD</span>
            </p>
          </div>
        </div>
        <div>
          <button className={style.sellButton}>
            <b>SELL</b>
          </button>
        </div>
      </article>
      
    </div>
  );
}

export default BuySell;
