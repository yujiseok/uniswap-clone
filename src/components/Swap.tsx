import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as Config } from "../assets/config.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import Ethereum from "../assets/eth.png";
import useToggle from "../hooks/useToggle";
import BottomBanner from "./BottomBanner";
import ConfigDropdown, { maxArr } from "./dropdown/ConfigDropdown";
import Etherscan from "./Etherscan";
import ModalPortal from "./ModalPortal";
import SwapModal from "./SwapModal";

const Swap = () => {
  const [isClose, handleClickClose] = useToggle(false);
  const [isSwitch, handleClickSwitch] = useToggle(false);
  const [isDropdownOpen, handleClickDropdown] = useToggle(false);
  const [isModalOpen, handleClickModal] = useToggle(false);

  const [maxLabel, setMaxLabel] = useState<MaxLabel>(maxArr[0].label);
  const [maxValue, setMaxValue] = useState(0.1);

  const handleClickMaxLabel = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (maxValue === 0) setMaxLabel(maxArr[0].label);
    setMaxLabel(e.currentTarget.textContent as MaxLabel);
  };

  // const maxRef = useRef<HTMLDivElement>(null);
  // const maxRefHeight = maxRef.current?.clientHeight;

  return (
    <>
      <section className="mx-auto max-w-[480px]">
        <div className="rounded-2xl border border-ticker-hover bg-white px-2 pb-2 pt-3">
          <div className="relative mb-[10px] flex items-center justify-between pl-3">
            <div className="flex gap-4">
              <div>스왑</div>
              <button className="flex items-center gap-1 text-uni-search-slash-2 transition-opacity hover:opacity-90">
                구입하다 <div className="h-2 w-2 rounded-full bg-uni-blue-1" />
              </button>
            </div>

            <div
              className={`${
                maxLabel !== "자동"
                  ? "flex items-center gap-2 rounded-2xl bg-uni-gray-5"
                  : ""
              } hover:opacity-70`}
            >
              {maxLabel !== "자동" ? (
                <div className="pl-3 text-xs text-uni-search-slash-2">{`${maxValue.toFixed(
                  2
                )}% 미끄러짐`}</div>
              ) : null}
              <button
                className="py-[6px] pr-3 transition-opacity"
                onClick={handleClickDropdown}
              >
                <Config className="text-uni-search-slash-2" />
              </button>
            </div>
            {/* 드롭다운 */}
            {isDropdownOpen ? (
              <ConfigDropdown
                maxLabel={maxLabel}
                maxValue={maxValue}
                handleClickMaxLabel={handleClickMaxLabel}
                setMaxValue={setMaxValue}
              />
            ) : null}
          </div>
          <div className="rounded-2xl bg-uni-gray-5 p-4 text-uni-black-1">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="0"
                inputMode="decimal"
                pattern="^[0-9]*[.,]?[0-9]*$"
                minLength={1}
                maxLength={79}
                className="w-0 flex-1 bg-transparent text-4xl outline-none placeholder:text-uni-search-slash-2"
              />
              {isSwitch ? (
                <button className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select">
                  토큰 선택
                  <Chevron className="stroke-white" />
                </button>
              ) : (
                <button
                  className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                  onClick={handleClickModal}
                >
                  <div className="flex items-center gap-2">
                    <img src={Ethereum} alt="" className="h-6 w-6" />
                    <span>ETH</span>
                  </div>
                  <Chevron />
                </button>
              )}
            </div>
            <div className="pt-2 text-sm">100</div>
          </div>
          <div className="relative -my-[18px] flex justify-center">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border-4 border-white bg-uni-gray-7"
              onClick={handleClickSwitch}
            >
              <DownArrow />
            </button>
          </div>
          <div className="rounded-2xl bg-uni-gray-5 p-4 text-uni-black-1">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="0"
                inputMode="decimal"
                pattern="^[0-9]*[.,]?[0-9]*$"
                minLength={1}
                maxLength={79}
                className="w-0 flex-1 bg-transparent text-4xl outline-none placeholder:text-uni-search-slash-2"
              />
              {isSwitch ? (
                <button
                  className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                  onClick={handleClickModal}
                >
                  <div className="flex items-center gap-2">
                    <img src={Ethereum} alt="" className="h-6 w-6" />
                    <span>ETH</span>
                  </div>
                  <Chevron />
                </button>
              ) : (
                <button className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select">
                  토큰 선택
                  <Chevron className="stroke-white" />
                </button>
              )}
            </div>
            <div className="pt-2 text-sm">100</div>
          </div>
          <button className="mt-1 w-full rounded-[20px] bg-uni-pink-1 p-4 text-xl font-semibold text-uni-pink-2 transition-colors duration-[250ms] hover:bg-uni-pink-4">
            지갑 연결
          </button>
        </div>

        <div className="mt-4 text-center text-[11px] opacity-60 hover:opacity-100">
          Uniswap 사용 가능 : <span className="text-uni-pink-2">English</span>
        </div>
      </section>

      {isClose ? null : <BottomBanner handleClickClose={handleClickClose} />}
      <Etherscan />

      <AnimatePresence>
        {isModalOpen ? (
          <ModalPortal>
            <SwapModal handleClickModal={handleClickModal} />
          </ModalPortal>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default Swap;
