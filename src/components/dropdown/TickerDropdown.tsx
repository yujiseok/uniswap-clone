import { forwardRef } from "react";
import Arbitrum from "../../assets/arb.svg";
import { ReactComponent as BlueCheck } from "../../assets/blue-check.svg";
import BNBChain from "../../assets/bnb.svg";
import Celo from "../../assets/celo.svg";
import Ethereum from "../../assets/eth.png";
import Optimism from "../../assets/op.svg";
import Polygon from "../../assets/polygon.svg";

interface TickerDropdownProps {
  tickerUrl: string;
  setTickerUrl: React.Dispatch<React.SetStateAction<string>>;
  setIsTickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TickerDropdown = forwardRef(
  (
    { tickerUrl, setTickerUrl, setIsTickerOpen }: TickerDropdownProps,
    ref: React.ForwardedRef<HTMLUListElement>
  ) => {
    return (
      <ul
        ref={ref}
        className="absolute right-24 top-14 rounded-xl border border-uni-dropdown-border bg-white p-3 shadow-uni-dropdown"
      >
        {tickerArr.map((item) => (
          <li key={item.ticker}>
            <button
              className="flex w-60 items-center justify-between rounded-xl px-2 py-[10px] transition-colors duration-[250] hover:bg-uni-gray-11"
              onClick={() => {
                setTickerUrl(item.src);
                setIsTickerOpen((prev) => !prev);
              }}
            >
              <div className="flex items-center gap-2">
                <img src={item.src} alt="" className="h-5 w-5" />
                <div>{item.ticker}</div>
              </div>
              <div>{tickerUrl === item.src ? <BlueCheck /> : null}</div>
            </button>
          </li>
        ))}
      </ul>
    );
  }
);
export default TickerDropdown;
const tickerArr = [
  {
    src: Ethereum,
    ticker: "Ethereum",
  },
  {
    src: Polygon,
    ticker: "Polygon",
  },
  {
    src: Optimism,
    ticker: "Optimism",
  },
  {
    src: Arbitrum,
    ticker: "Arbitrum",
  },
  {
    src: Celo,
    ticker: "Celo",
  },
  {
    src: BNBChain,
    ticker: "BNB Chain",
  },
];
