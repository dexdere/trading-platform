import { Nav, InputGroup, FormControl } from "react-bootstrap/";
import style from "./style.module.css";


const currencyPair = [
  { pair: "ETH/BTC", lastPrice: "0.00020255", change: "-2.58%" },
  { pair: "KCS/BTC", lastPrice: "0.00013192", change: "+5.6%" },
  { pair: " XRP/BTC", lastPrice: "0.00002996", change: "-1.55%" },
  { pair: "VET/BTC", lastPrice: "0.00000103", change: "+1.8%" },
  { pair: "EOS/BTC", lastPrice: "0.00000103", change: "-2.05%" },
  { pair: "BTT/BTC", lastPrice: "0.00002303", change: "-1.05%" },
  { pair: "LTC/BTC", lastPrice: "0.03520103", change: "+1.5%" },
  { pair: "TRX/BTC", lastPrice: "0.00330103", change: "	-3.05%" },
  { pair: "BSV/BTC", lastPrice: "0.00300103", change: "	+2.05%" },
  { pair: "COTI/BTC", lastPrice: "0.003500103", change: "+2.85%" },
  { pair: "XYT/BTC", lastPrice: "0.00003103", change: "+3.55%" },
  { pair: "BNB/BTC", lastPrice: "0.003500103", change: "-2.05%" },
  { pair: "TRY/BTC", lastPrice: "0.00000123", change: "-2.05%" },
  { pair: "ADA/BTC", lastPrice: "	0.00050103", change: "+5.05%" },
  { pair: "NEO/BTC", lastPrice: "0.00340103", change: "-1.05%" },
  { pair: "XLM/BTC", lastPrice: "0.00035103", change: "+5.05%" },
  { pair: "ENQ/BTC", lastPrice: "	0.00354103", change: "+2.02%" },
  { pair: "AVA/BTC", lastPrice: "0.02535103", change: "+3.05%" },
  { pair: "AMB/BTC", lastPrice: "0.05335103", change: "+1.0%" },
  { pair: "MAP/BTC", lastPrice: "0.00234103", change: "-2.05%" },
  { pair: "GO/BTC", lastPrice: "0.00354103", change: "-6.50%" },
  { pair: "KICK/BTC", lastPrice: "0.02053103", change: "-6.05%" },
  { pair: "DBC/BTC", lastPrice: "0.02535103", change: "+7.05%" },
];

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
          {currencyPair.map((item, index) => (
            <tr key={index}>
              <td>{currencyPair[index].pair}</td>
              <td>{currencyPair[index].lastPrice}</td>
              <td>{currencyPair[index].change} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketPlace;
