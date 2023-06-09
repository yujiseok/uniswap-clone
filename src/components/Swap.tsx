import { ReactComponent as Config } from "../assets/config.svg";
import Ethereum from "../assets/eth.png";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Question } from "../assets/question.svg";
import { useRef, useState } from "react";

const Swap = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isSwitched, setIsSwitched] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);
  const [isMaxOpened, setIsMaxOpened] = useState(false);
  const [maxLabel, setMaxLabel] = useState(maxArr[0].label);
  const [maxValue, setMaxValue] = useState(0.1);
  const [isTimeOpened, setIsTimeOpened] = useState(false);
  const [timeValue, setTimeValue] = useState(0);

  const handleClickActive = (i: number) => setActive(i);
  const handleClickMaxLabel = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (maxValue === 0) setMaxLabel(maxArr[0].label);
    setMaxLabel(e.currentTarget.textContent as string);
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
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <Config className="text-uni-search-slash-2" />
              </button>
            </div>
            {/* 드롭다운 */}
            {isDropdownOpen ? (
              <div className="absolute right-0 top-full z-10 mt-[10px] flex max-w-[330px] flex-col gap-4 rounded-2xl border border-ticker-hover bg-white px-4 pt-4 text-uni-search-slash-2 shadow-swap-config">
                <div className="flex items-center gap-4">
                  <div>
                    <div>자동 라우터 API</div>
                    <div className="mt-1 text-xs">
                      더 빠른 견적을 받으려면 Uniswap Labs API를 사용하십시오.
                    </div>
                  </div>

                  <label
                    htmlFor="toggle-dot"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggle-dot"
                        className="peer sr-only"
                        onChange={() => {
                          setToggle((prev) => !prev);
                          setActive(0);
                        }}
                        checked={toggle}
                      />
                      <div className="block h-8 w-16 rounded-full border border-transparent bg-uni-pink-1 p-1 peer-checked:border-ticker-hover peer-checked:bg-white" />
                      <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-uni-pink-2 transition peer-checked:right-3 peer-checked:-translate-x-full peer-checked:bg-uni-gray-9" />
                    </div>
                  </label>
                </div>
                {toggle ? (
                  <div className="flex flex-col gap-[1.5px] overflow-hidden rounded-xl">
                    {routerArr.map((item, i) => (
                      <div
                        key={item.heading}
                        className="flex cursor-pointer items-center bg-uni-gray-5 px-4 py-3"
                        onClick={() => handleClickActive(i)}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="text-uni-black-1">{item.heading}</div>
                          <div className="text-xs">{item.sub}</div>
                        </div>
                        <button
                          className={`${
                            active === i
                              ? "border-uni-pink-2"
                              : "border-ticker-hover"
                          } rounded-full border-2  bg-transparent p-[5px]`}
                        >
                          <div
                            className={`${
                              active === i ? "bg-uni-pink-2" : "bg-transparent"
                            } h-[10px] w-[10px] rounded-full`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="h-[1px] w-full bg-ticker-hover" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      최대 가격 변동 <Question />
                    </div>
                    <button
                      className="flex items-center gap-1 text-uni-black-1"
                      onClick={() => setIsMaxOpened((prev) => !prev)}
                    >
                      {maxLabel === "자동"
                        ? maxLabel
                        : `${maxValue.toFixed(2)}%`}
                      <Chevron
                        className={`${
                          isMaxOpened ? "rotate-180" : ""
                        } transition-transform duration-[250ms]`}
                      />
                    </button>
                  </div>
                  <div
                    className={`${
                      isMaxOpened ? "h-[55px]" : "h-0 overflow-hidden"
                    } w-full transition-[height]`}
                    // ref={maxRef}
                  >
                    <div className="flex items-center justify-between gap-4 pt-3">
                      <div className="flex rounded-2xl border border-ticker-hover p-1">
                        {maxArr.map((item) => (
                          <button
                            key={item.label}
                            className={`${
                              maxLabel === item.label
                                ? "bg-uni-gray-8"
                                : "bg-transparent"
                            } rounded-xl px-3 py-[6px] text-uni-black-1`}
                            onClick={handleClickMaxLabel}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                      <div className="flex w-auto flex-1 justify-end gap-3 rounded-2xl border border-ticker-hover px-4 py-2">
                        <input
                          type="text"
                          className="w-full text-right text-uni-black-1 outline-none"
                          placeholder="0.10"
                          onChange={(e) => setMaxValue(Number(e.target.value))}
                        />
                        <div>%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-ticker-hover" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    거래 마감 시간 <Question />
                  </div>

                  <button
                    className="flex items-center gap-1 text-uni-black-1"
                    onClick={() => setIsTimeOpened((prev) => !prev)}
                  >
                    {timeValue === 0 ? "30" : timeValue}
                    <Chevron
                      className={`${
                        isTimeOpened ? "rotate-180" : ""
                      } transition-transform duration-[250ms]`}
                    />
                  </button>
                </div>

                <div
                  className={`${
                    isTimeOpened ? "h-[52px]" : "h-0 overflow-hidden"
                  } transition-[height]`}
                >
                  <div
                    className={`${
                      timeValue > 4320
                        ? "border-uni-red-1 text-uni-red-2"
                        : "border-ticker-hover"
                    } flex w-full justify-end gap-3 rounded-xl border px-4 py-2`}
                  >
                    <input
                      type="text"
                      placeholder="30"
                      className="flex-1 bg-transparent text-right outline-none"
                      onChange={(e) => setTimeValue(Number(e.target.value))}
                    />
                    <div className="text-uni-black-1">분</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {isSwitched ? (
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
                <button className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select">
                  토큰 선택
                  <Chevron className="stroke-white" />
                </button>
              </div>
              <div className="pt-2 text-sm">100</div>
            </div>
          ) : (
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
                <button className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6">
                  <div className="flex items-center gap-2">
                    <img src={Ethereum} alt="" className="h-6 w-6" />
                    <span>ETH</span>
                  </div>
                  <Chevron />
                </button>
              </div>
              <div className="pt-2 text-sm">100</div>
            </div>
          )}

          <div className="relative -my-[18px] flex justify-center">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border-4 border-white bg-uni-gray-7"
              onClick={() => setIsSwitched((prev) => !prev)}
            >
              <DownArrow />
            </button>
          </div>

          {isSwitched ? (
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
                <button className="flex items-center gap-2 rounded-2xl bg-uni-gray-8 py-1 pl-1 pr-2 text-xl font-semibold leading-5 hover:bg-uni-gray-6">
                  <div className="flex items-center gap-2">
                    <img src={Ethereum} alt="" className="h-6 w-6" />
                    <span>ETH</span>
                  </div>
                  <Chevron />
                </button>
              </div>
              <div className="pt-2 text-sm">100</div>
            </div>
          ) : (
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
                <button className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select">
                  토큰 선택
                  <Chevron className="stroke-white" />
                </button>
              </div>
              <div className="pt-2 text-sm">100</div>
            </div>
          )}

          <button className="mt-1 w-full rounded-[20px] bg-uni-pink-1 p-4 text-xl font-semibold text-uni-pink-2 transition-colors duration-[250ms] hover:bg-uni-pink-4">
            지갑 연결
          </button>
        </div>

        <div className="mt-4 text-center text-[11px] opacity-60 hover:opacity-100">
          Uniswap 사용 가능 : <span className="text-uni-pink-2">English</span>
        </div>
      </section>

      {isClosed ? null : (
        <div className="banner-bg fixed bottom-5 right-5 z-10 flex h-[164px] w-[390px] flex-col justify-between rounded-[20px] border border-ticker-hover px-4 py-6 shadow-banner transition-all duration-[250ms] ease-in-out hover:bg-170">
          <div className="flex items-start justify-between text-2xl font-medium text-white">
            주머니 속 유니스왑
            <button
              className="transition-opacity duration-[250ms] hover:opacity-60"
              onClick={() => setIsClosed((prev) => !prev)}
            >
              <Close />
            </button>
          </div>

          <a
            href="https://wallet.uniswap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-[125px] rounded-2xl bg-white p-[10px] text-center text-sm font-semibold transition-opacity duration-[250ms] hover:opacity-60"
          >
            더 알아보기
          </a>
        </div>
      )}

      <div className="fixed bottom-4 right-4 flex items-center gap-1 text-[11px] text-uni-green-1">
        <div className="opacity-70 hover:opacity-100">17434367</div>
        <div className="inline-block h-2 w-2 rounded-full bg-uni-green-1" />
      </div>
    </>
  );
};
export default Swap;

const routerArr = [
  {
    heading: "유니스왑 API",
    sub: "Uniswap Labs 라우팅 API를 사용하여 Uniswap 프로토콜에서 최적의 경로를 찾습니다.",
  },
  {
    heading: "유니스왑 클라이언트",
    sub: "브라우저를 통해 Uniswap 프로토콜에서 최적의 경로를 찾습니다. 높은 대기 시간과 가격이 발생할 수 있습니다.",
  },
];

const maxArr = [{ label: "자동" }, { label: "사용자 정의" }];
