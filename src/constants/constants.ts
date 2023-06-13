interface IMax {
  label: MaxLabel;
}

export const MAX_ARR: IMax[] = [{ label: "자동" }, { label: "사용자 정의" }];

export const TOKEN_ARR: Token[] = [
  {
    src: "../../assets/eth.png",
    token: "Ether",
    ticker: "ETH",
    price: 1000,
  },
  {
    src: "../../assets/usdc.png",
    token: "USDCoin",
    ticker: "USDC",
    price: 1,
  },
  {
    src: "../../assets/wbtc.png",
    token: "Wrapped BTC",
    ticker: "WBTC",
    price: 10000,
  },
];
