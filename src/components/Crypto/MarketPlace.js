import { Nav, InputGroup, FormControl } from "react-bootstrap/";
import style from "./style.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

// const currencyPair2 = [
//   "ethbtc",
//   "xrpbtc",
//   "unibtc",
//   "ltcbtc",
//   "linkbtc",
//   "xlmbtc",
//   "bchbtc",
//   "aavebtc",
//   "algobtc",
//   "compbtc",
//   "snxbtc",
//   "batbtc",
//   "mkrbtc",
//   "zrxbtc",
//   "yfibtc",
//   "umabtc",
//   "omgbtc",
//   "kncbtc",
//   "crvbtc",
// ];

function MarketPlace() {
  return (
    <div className={style.marketDiv}>
      <InputGroup className="p-2 mb-2">
        <InputGroup.Text
          className={style.search}
          id="inputGroup-sizing-default"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
            color="grey"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </InputGroup.Text>
        <FormControl
          placeholder="Search"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className={style.search}
        />
      </InputGroup>

      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link className={style.navLink} eventKey="link-1">
            BTC
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={style.navLink} eventKey="link-2">
            ETH
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={style.navLink} eventKey="link-3">
            NEO
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={style.navLink} eventKey="link-4">
            USDT
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <table>
        <thead>
          <tr>
            <th>Pairs</th>
            <th>Last Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {/* {currencyPair.map((item, index) => (
            <tr key={index}>
              <td>{currencyPair[index].pair.toUpperCase()}</td>
              <td>{currencyPair[index].lastPrice}</td>
              <td>{currencyPair[index].change} </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default MarketPlace;

// <tr>
//             <td>ETH/BTC</td>
//             <td>0.00020255</td>
//             <td>-2.58%</td>
//           </tr>
//           <tr>
//             <td>KCS/BTC</td>
//             <td>0.00013192</td>
//             <td>+5.6%</td>
//           </tr>
//           <tr>
//             <td>KCS/BTC</td>
//             <td>0.00002996</td>
//             <td>-1.55%</td>
//           </tr>
//           <tr>
//             <td>VET/BTC</td>
//             <td>0.00000103</td>
//             <td>+1.8%</td>
//           </tr>
//           <tr>
//             <td>EOS/BTC</td>
//             <td>0.00000103</td>
//             <td>-2.05%</td>
//           </tr>
