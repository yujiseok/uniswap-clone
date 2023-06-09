declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

type MaxLabel = "자동" | "사용자 정의";

type TokenLabel = "ETH" | "USDC" | "WBTC";

interface Token {
  src: string;
  token: string;
  ticker: TokenLabel;
  price: number;
}
