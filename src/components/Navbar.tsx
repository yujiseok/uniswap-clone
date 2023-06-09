import { useEffect, useRef, useState } from "react";
import { ReactComponent as Apple } from "../assets/apple.svg";
import Arbitrum from "../assets/arb.svg";
import { ReactComponent as BlueCheck } from "../assets/blue-check.svg";
import BNBChain from "../assets/bnb.svg";
import Celo from "../assets/celo.svg";
import { ReactComponent as Chart } from "../assets/chart.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Ellipsis } from "../assets/ellipsis.svg";
import Ethereum from "../assets/eth.png";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Optimism from "../assets/op.svg";
import { ReactComponent as Poll } from "../assets/poll.svg";
import Polygon from "../assets/polygon.svg";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";

// 드롭다운용

// 티커드롭다운

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTickerOpen, setIsTickerOpen] = useState(false);
  const [tickerUrl, setTickerUrl] = useState(Ethereum);
  const [show, setShow] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        toggle &&
        dropdownRef.current &&
        !dropdownRef.current?.contains(e.target as HTMLElement)
      ) {
        console.log(e.target);
        setToggle(!toggle);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       isTickerOpen &&
  //       !tickerRef.current?.contains(e.target as HTMLElement)
  //     ) {
  //       setIsTickerOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [isTickerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        show ? "border-b border-uni-gray-11 bg-white" : "bg-transparent"
      } fixed left-0 top-0 z-10 h-[72px] w-full px-3 py-5 transition-colors`}
    >
      <div className="flex h-full w-full items-center">
        <ul className="relative flex flex-1 items-center gap-4 text-uni-gray-1">
          <li>
            <Logo className="text-black" />
          </li>
          {navArr.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer rounded-lg p-2 hover:bg-uni-gray-3"
            >
              {item.label}
            </li>
          ))}
          <li className="cursor-pointer rounded-lg  hover:bg-uni-gray-3">
            <button
              className="p-2"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            >
              <Ellipsis />
            </button>
          </li>

          {toggle ? (
            <div
              ref={dropdownRef}
              className="absolute left-36 top-14 flex flex-col gap-4 rounded-xl border border-uni-dropdown-border bg-white p-4 shadow-uni-dropdown"
            >
              <ul className="border-b text-black">
                {dropDownArrTop.map((item) => (
                  <li key={item.label}>
                    <a className="flex gap-3 pb-5">
                      <span>{item.icon}</span> {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul>
                {dropDownArrBottom.map((item) => (
                  <li key={item.label}>
                    <a className="flex gap-3 pb-3 text-sm">{item.label}</a>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <Discord />
                <Twitter />
                <Github />
              </div>
            </div>
          ) : null}
        </ul>

        <div className="flex flex-1 justify-center">
          <div className="flex w-[640px] items-center gap-3 rounded-lg border border-black/10 bg-white/40 px-4 py-2">
            <div>
              <SearchIcon className="text-uni-gray-1" />
            </div>
            <input
              type="text"
              placeholder="검색 토큰 및 NFT 컬렉션"
              className="w-full bg-transparent outline-none "
            />
            <div className="text-uni-gray-12 flex h-5 w-5 items-center justify-center rounded bg-uni-search-slash-1 text-xs opacity-60">
              /
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-end gap-3">
          <button
            className="flex gap-2 rounded-lg p-2 hover:bg-uni-gray-3"
            onClick={() => setIsTickerOpen((prev) => !prev)}
          >
            <img src={tickerUrl} alt="" className="h-5 w-5" />
            <Chevron className={isTickerOpen ? "-rotate-180" : ""} />
          </button>
          <div>
            <button className="flex h-10 items-center rounded-full bg-uni-pink-1 px-[10px] py-3 text-uni-pink-2 transition-colors ease-in-out hover:text-uni-pink-1">
              연결하다
            </button>
          </div>

          {isTickerOpen ? (
            <ul
              ref={tickerRef}
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
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navArr = [
  {
    label: "스왑",
  },
  {
    label: "토큰",
  },
  {
    label: "NFT",
  },
  {
    label: "수영장",
  },
];

const dropDownArrTop = [
  {
    icon: <Apple />,
    label: "유니스왑 지갑 다운로드",
  },
  {
    icon: <Poll />,
    label: "거버넌스 투표",
  },
  {
    icon: <Chart />,
    label: "더 많은 분석 보기",
  },
];

const dropDownArrBottom = [
  {
    label: "지원 센터 ↗",
  },
  {
    label: "선적 서류 비치 ↗",
  },
  {
    label: "피드백 ↗",
  },
  {
    label: "법률 및 개인정보 보호 ↗",
  },
];

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
