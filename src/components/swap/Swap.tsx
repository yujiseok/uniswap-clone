import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";
import { ReactComponent as Config } from "../../assets/config.svg";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";
import BottomBanner from "../BottomBanner";
import ConfigDropdown, { maxArr } from "../dropdown/ConfigDropdown";
import Etherscan from "../Etherscan";
import ModalPortal from "../ModalPortal";
import SwapModal, { tokenArr } from "../SwapModal";
import SwapBlock from "./SwapBlock";
import SwapInput from "./SwapInput";

const Swap = () => {
  const [isClose, handleClickClose] = useToggle(false);
  const [isSwitch, handleClickSwitch] = useToggle(false);
  const [isDropdownOpen, handleClickDropdown] = useToggle(false);
  const [isModalOpen, handleClickModal] = useToggle(false);

  const [swapTopValue, handleSwapTopValue] = useInput();
  const [swapBottomValue, handleSwapBottomValue] = useInput();

  const [maxLabel, setMaxLabel] = useState<MaxLabel>(maxArr[0].label);
  const [maxValue, setMaxValue] = useState(0.1);
  const [tokenValue, setTokenValue] = useState<Token>(tokenArr[0]);

  const handleClickMaxLabel = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (maxValue === 0) setMaxLabel(maxArr[0].label);
    setMaxLabel(e.currentTarget.textContent as MaxLabel);
  };

  const tokenPrice = tokenValue.price;
  const topPrice = (swapTopValue * tokenPrice).toLocaleString();

  return (
    <>
      <section className="mx-auto max-w-[480px]">
        <div className="rounded-2xl border border-uni-gray-11 bg-white px-2 pb-2 pt-3">
          <div className="relative mb-[10px] flex items-center justify-between pl-3">
            <div className="flex gap-4">
              <div>스왑</div>
              <button className="text-uni-gray-12 flex items-center gap-1 transition-opacity hover:opacity-90">
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
                <div className="text-uni-gray-12 pl-3 text-xs">{`${maxValue.toFixed(
                  2
                )}% 미끄러짐`}</div>
              ) : null}
              <button
                className="py-[6px] pr-3 transition-opacity"
                onClick={handleClickDropdown}
              >
                <Config className="text-uni-gray-12" />
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

          <SwapBlock>
            <div className="flex items-center">
              <SwapInput
                value={`${isSwitch ? swapBottomValue : swapTopValue}`}
                handleSwapValue={handleSwapTopValue}
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
                    <img
                      src={tokenValue.src}
                      alt={tokenValue.token}
                      className="h-6 w-6"
                    />
                    <span>{tokenValue?.ticker}</span>
                  </div>
                  <Chevron />
                </button>
              )}
            </div>
            <div className="pt-2 text-sm">
              {isSwitch && !isNaN(swapTopValue) && swapTopValue !== 0
                ? "0"
                : `$${topPrice}`}
            </div>
          </SwapBlock>

          <div className="relative -my-[18px] flex justify-center">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border-4 border-white bg-uni-gray-7"
              onClick={handleClickSwitch}
            >
              <DownArrow />
            </button>
          </div>

          <SwapBlock>
            <div className="flex items-center">
              <SwapInput
                value={`${isSwitch ? swapTopValue : swapBottomValue}`}
                handleSwapValue={handleSwapBottomValue}
              />
              {isSwitch ? (
                <button
                  className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                  onClick={handleClickModal}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={tokenValue.src}
                      alt={tokenValue.token}
                      className="h-6 w-6"
                    />
                    <span>{tokenValue?.ticker}</span>
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
            <div className="pt-2 text-sm">
              {isSwitch && !isNaN(swapTopValue) && swapTopValue !== 0
                ? `$${topPrice}`
                : "0"}
            </div>
          </SwapBlock>

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
            <SwapModal
              handleClickModal={handleClickModal}
              tokenValue={tokenValue}
              setTokenValue={setTokenValue}
            />
          </ModalPortal>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default Swap;
