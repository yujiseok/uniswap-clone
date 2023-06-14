import { useEffect, useRef, useState } from "react";

import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as Ellipsis } from "../assets/ellipsis.svg";
import Ethereum from "../assets/eth.png";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { useDrawerDispatch } from "../context/DrawerContext";
import useClickOutside from "../lib/hooks/useClickOutside";
import ResourceDropdown from "./dropdown/ResourceDropdown";
import TickerDropdown from "./dropdown/TickerDropdown";
import Hr from "./Hr";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTickerOpen, setIsTickerOpen] = useState(false);
  const [tickerUrl, setTickerUrl] = useState(Ethereum);
  const [show, setShow] = useState(false);
  const dispatch = useDrawerDispatch();

  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tickerTriggerRef = useRef<HTMLButtonElement>(null);
  const tickerRef = useRef<HTMLUListElement>(null);

  useClickOutside(dropdownTriggerRef, dropdownRef, undefined, setToggle);
  useClickOutside(tickerTriggerRef, tickerRef, undefined, setIsTickerOpen);

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
          <li className="cursor-pointer rounded-lg hover:bg-uni-gray-3">
            <button
              ref={dropdownTriggerRef}
              className="p-2"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            >
              <Ellipsis />
            </button>
          </li>

          {toggle ? <ResourceDropdown ref={dropdownRef} /> : null}
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
            <div className="flex h-5 w-5 items-center justify-center rounded bg-uni-search-slash-1 text-xs text-uni-gray-12 opacity-60">
              /
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-end gap-3">
          <button
            ref={tickerTriggerRef}
            className="flex gap-2 rounded-lg p-2 hover:bg-uni-gray-3"
            onClick={() => setIsTickerOpen((prev) => !prev)}
          >
            <img src={tickerUrl} alt="" className="h-5 w-5" />
            <Chevron className={isTickerOpen ? "-rotate-180" : ""} />
          </button>
          <div>
            <button
              className="flex h-10 items-center rounded-full bg-uni-pink-1 px-[10px] py-3 text-uni-pink-2 transition-colors ease-in-out hover:text-uni-pink-1"
              onClick={() => dispatch?.({ type: "TOGGLE" })}
            >
              연결하다
            </button>
          </div>

          {isTickerOpen ? (
            <TickerDropdown
              tickerUrl={tickerUrl}
              setTickerUrl={setTickerUrl}
              setIsTickerOpen={setIsTickerOpen}
              ref={tickerRef}
            />
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
