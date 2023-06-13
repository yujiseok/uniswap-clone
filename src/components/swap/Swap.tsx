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
  const [isTopModalOpen, handleClickTopModal] = useToggle();
  const [isBottomModalOpen, handleClickBottomModal] = useToggle();
  const [isOpen, handleClickOpen] = useToggle();
  const [swapTopValue, handleSwapTopValue] = useInput();
  const [maxLabel, setMaxLabel] = useState<MaxLabel>(maxArr[0].label);
  const [maxValue, setMaxValue] = useState(0.1);
  const [topToken, setTopToken] = useState<Token>(tokenArr[0]);
  const [bottomToken, setBottomToken] = useState<Token>();

  const handleClickMaxLabel = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (maxValue === 0) setMaxLabel(maxArr[0].label);
    setMaxLabel(e.currentTarget.textContent as MaxLabel);
  };

  const handleClickTokenValue: HandleClickTokenValue = (
    item,
    modalHandler,
    setToken
  ) => {
    if (
      topToken.ticker === item?.ticker ||
      bottomToken?.ticker === item?.ticker
    ) {
      handleClickSwitch();
      modalHandler();
      return;
    }

    setToken(item);
    modalHandler();
  };

  const bottomTokenPrice = calculatePrice(topToken, bottomToken, swapTopValue);
  const topTokenPrice = formatNumber(swapTopValue, topToken.price);
  const usd = !isNaN(Number(swapTopValue)) ? topTokenPrice : "";

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
                    value={swapTopValue}
                    handleSwapValue={handleSwapTopValue}
                  />

                  <button
                    className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                    onClick={handleClickTopModal}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={topToken.src}
                        alt={topToken.token}
                        className="h-6 w-6"
                      />
                      <span>{topToken.ticker}</span>
                    </div>
                    <Chevron />
                  </button>
                </div>
                <SwapPrice>{usd && usd !== "$0.00" && `${usd}`}</SwapPrice>
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
                  <SwapInput value={bottomTokenPrice} />
                  {bottomToken ? (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                      onClick={handleClickBottomModal}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={bottomToken.src}
                          alt={bottomToken.token}
                          className="h-6 w-6"
                        />
                        <span>{bottomToken.ticker}</span>
                      </div>
                      <Chevron />
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select"
                      onClick={handleClickBottomModal}
                    >
                      토큰 선택
                      <Chevron className="stroke-white" />
                    </button>
                  )}
                </div>
                <SwapPrice>
                  {bottomTokenPrice && usd !== "$0.00" && `${usd}`}
                </SwapPrice>
              </SwapBlock>
            </>
          ) : (
            <>
              <SwapBlock>
                <div className="flex items-center">
                  <SwapInput value={bottomTokenPrice} />
                  {bottomToken ? (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                      onClick={handleClickBottomModal}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={bottomToken.src}
                          alt={bottomToken.token}
                          className="h-6 w-6"
                        />
                        <span>{bottomToken.ticker}</span>
                      </div>
                      <Chevron />
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select"
                      onClick={handleClickBottomModal}
                    >
                      토큰 선택
                      <Chevron className="stroke-white" />
                    </button>
                  )}
                </div>
                <SwapPrice>
                  {bottomTokenPrice && usd !== "$0.00" && `${usd}`}
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
                    value={swapTopValue}
                    handleSwapValue={handleSwapTopValue}
                  />

                  <button
                    className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6"
                    onClick={handleClickTopModal}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={topToken.src}
                        alt={topToken.token}
                        className="h-6 w-6"
                      />
                      <span>{topToken?.ticker}</span>
                    </div>
                    <Chevron />
                  </button>
                </div>
                <SwapPrice>{usd && usd !== "$0.00" && `${usd}`}</SwapPrice>
              </SwapBlock>
            </>
          )}

          {swapTopValue && bottomTokenPrice ? (
            <div className="border-uni mt-1 rounded-2xl border p-4 text-sm font-normal">
              <button
                className="flex w-full justify-between"
                onClick={handleClickOpen}
              >
                <div>
                  1 {bottomToken?.ticker} = {topToken.price.toLocaleString()}{" "}
                  {topToken.ticker}{" "}
                  <span className="text-uni-gray-2">
                    (
                    {topToken.price.toLocaleString("en-US", {
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
        {isTopModalOpen && (
          <ModalPortal>
            <SwapModal
              handleClickModal={handleClickTopModal}
              tokenValue={topToken}
              setToken={setTopToken}
              handleClickTokenValue={handleClickTokenValue}
            />
          </ModalPortal>
        )}
        {isBottomModalOpen && (
          <ModalPortal>
            <SwapModal
              handleClickModal={handleClickBottomModal}
              tokenValue={bottomToken}
              setToken={setBottomToken}
              handleClickTokenValue={handleClickTokenValue}
            />
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
};
export default Swap;
