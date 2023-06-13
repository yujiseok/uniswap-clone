import eth from "../assets/eth.png";
import usdc from "../assets/usdc.png";
import wbtc from "../assets/wbtc.png";

interface IMax {
  label: MaxLabel;
}

export const MAX_ARR: IMax[] = [{ label: "자동" }, { label: "사용자 정의" }];

export const TOKEN_ARR: Token[] = [
  {
    src: eth,
    token: "Ether",
    ticker: "ETH",
    price: 1000,
  },
  {
    src: usdc,
    token: "USDCoin",
    ticker: "USDC",
    price: 1,
  },
  {
    src: wbtc,
    token: "Wrapped BTC",
    ticker: "WBTC",
    price: 10000,
  },
];
