import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";
import { ReactComponent as Config } from "../../assets/config.svg";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import useInput from "../../lib/hooks/useInput";
import useToggle from "../../lib/hooks/useToggle";
import calculatePrice from "../../lib/utils/calculatePrice";
import formatNumber from "../../lib/utils/formatNumber";
import BottomBanner from "../BottomBanner";
import AnimatedDropdown from "../dropdown/AnimatedDropdown";
import ConfigDropdown, { maxArr } from "../dropdown/ConfigDropdown";
import Etherscan from "../Etherscan";
import Hr from "../Hr";
import ModalPortal from "../modal/ModalPortal";
import SwapModal, { tokenArr } from "../modal/SwapModal";
import SwapBlock from "./SwapBlock";
import SwapInput from "./SwapInput";
import SwapList from "./SwapList";
import SwapPrice from "./SwapPrice";

const Swap = () => {
  const [isClose, handleClickClose] = useToggle();
  const [isSwitch, handleClickSwitch] = useToggle();
  const [isDropdownOpen, handleClickDropdown] = useToggle();
  const [isModalOpen, handleClickModal] = useToggle();
  const [isModalOpen2, handleClickModal2] = useToggle();

  const [isOpen, handleClickOpen] = useToggle();

  const [maxLabel, setMaxLabel] = useState<MaxLabel>(maxArr[0].label);
  const [maxValue, setMaxValue] = useState(0.1);
  const [tokenValue, setTokenValue] = useState<Token>(tokenArr[0]);
  const [tokenValue2, setTokenValue2] = useState<Token>();
  const [swapTopValue, handleSwapTopValue] = useInput();
  const bottomPrice = calculatePrice(tokenValue, tokenValue2, swapTopValue);

  const [swapBottomValue, handleSwapBottomValue] = useInput();

  const handleClickMaxLabel = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (maxValue === 0) setMaxLabel(maxArr[0].label);
    setMaxLabel(e.currentTarget.textContent as MaxLabel);
  };

  const topTokenPrice = formatNumber(swapTopValue, tokenValue.price); // 유닛 추가한 것
  const topPrice = !isNaN(Number(swapTopValue)) ? topTokenPrice : "";

  return (
    <>
      <section className="mx-auto max-w-[480px] px-2">
        <div className="rounded-2xl border border-uni-gray-11 bg-white px-2 pb-2 pt-3">
          <div className="relative mb-[10px] flex items-center justify-between pl-3">
            <div className="flex gap-4">
              <div>스왑</div>
              <button className="flex items-center gap-1 text-uni-gray-12 transition-opacity hover:opacity-90">
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
                <div className="pl-3 text-xs text-uni-gray-12">{`${maxValue.toFixed(
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
            {isDropdownOpen ? (
              <ConfigDropdown
                maxLabel={maxLabel}
                maxValue={maxValue}
                handleClickMaxLabel={handleClickMaxLabel}
                setMaxValue={setMaxValue}
              />
            ) : null}
          </div>

          {!isSwitch ? (
            <>
              <SwapBlock>
                <div className="flex items-center">
                  <SwapInput
                    value={`${swapTopValue ? swapTopValue : ""}`}
                    handleSwapValue={handleSwapTopValue}
                  />

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
                      <span>{tokenValue.ticker}</span>
                    </div>
                    <Chevron />
                  </button>
                </div>
                <SwapPrice>
                  {topPrice && topPrice !== "$0.00" && `${topPrice}`}
                </SwapPrice>
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
                    value={bottomPrice}
                    handleSwapValue={handleSwapBottomValue}
                  />
                  {tokenValue2?.ticker ? (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                      onClick={handleClickModal2}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={tokenValue2?.src}
                          alt={tokenValue2?.token}
                          className="h-6 w-6"
                        />
                        <span>{tokenValue2?.ticker}</span>
                      </div>
                      <Chevron />
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select"
                      onClick={handleClickModal2}
                    >
                      토큰 선택
                      <Chevron className="stroke-white" />
                    </button>
                  )}
                </div>
                <SwapPrice>
                  {tokenValue2?.ticker && topPrice !== "$0.00" && `${topPrice}`}
                </SwapPrice>
              </SwapBlock>
            </>
          ) : (
            <>
              <SwapBlock>
                <div className="flex items-center">
                  <SwapInput
                    value={bottomPrice}
                    handleSwapValue={handleSwapBottomValue}
                  />
                  {tokenValue2?.ticker ? (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                      onClick={handleClickModal2}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={tokenValue2?.src}
                          alt={tokenValue2?.token}
                          className="h-6 w-6"
                        />
                        <span>{tokenValue2?.ticker}</span>
                      </div>
                      <Chevron />
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select"
                      onClick={handleClickModal2}
                    >
                      토큰 선택
                      <Chevron className="stroke-white" />
                    </button>
                  )}
                </div>
                <SwapPrice>{topPrice}</SwapPrice>
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
                    value={`${swapTopValue ? swapTopValue : ""}`}
                    handleSwapValue={handleSwapTopValue}
                  />

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
                </div>
                <SwapPrice>
                  {topPrice && topPrice !== "$0.00" && `${topPrice}`}
                </SwapPrice>
              </SwapBlock>
            </>
          )}

          {bottomPrice ? (
            <div className="border-uni mt-1 rounded-2xl border p-4 text-sm font-normal">
              <button
                className="flex w-full justify-between"
                onClick={handleClickOpen}
              >
                <div>
                  1 {tokenValue2?.ticker} = {tokenValue.price.toLocaleString()}{" "}
                  {tokenValue.ticker}{" "}
                  <span className="text-uni-gray-2">
                    (
                    {tokenValue.price.toLocaleString("en-US", {
                      currency: "USD",
                      style: "currency",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 3,
                    })}
                    )
                  </span>
                </div>
                <div className="flex items-center gap-1 text-uni-black-1">
                  <Chevron
                    className={`${
                      isOpen ? "rotate-180" : ""
                    } transition-transform duration-[250ms]`}
                  />
                </div>
              </button>
              <AnimatedDropdown isOpen={isOpen}>
                <ul className="flex flex-col gap-3 pt-3 text-uni-gray-2">
                  <Hr />
                  <SwapList label="네트워크 요금" desc="~$3.19" />
                  <SwapList label="가격 영향" desc="~$3.19" />
                  <SwapList label="최소 출력" desc="~$3.19" />
                  <SwapList label="예상 출력" desc="~$3.19" />

                  <Hr />
                  <SwapList label="주문 라우팅" desc="~$3.19" />
                </ul>
              </AnimatedDropdown>
            </div>
          ) : null}
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
        {isModalOpen && (
          <ModalPortal>
            <SwapModal
              handleClickModal={handleClickModal}
              tokenValue={tokenValue}
              setTokenValue={setTokenValue}
            />
          </ModalPortal>
        )}
        {isModalOpen2 && (
          <ModalPortal>
            <SwapModal
              handleClickModal={handleClickModal2}
              tokenValue={tokenValue2}
              setTokenValue={setTokenValue2}
            />
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
};
export default Swap;
