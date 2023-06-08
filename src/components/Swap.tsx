import { ReactComponent as Config } from "../assets/config.svg";
import Ethereum from "../assets/eth.png";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { useState } from "react";

const Swap = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-[480px]">
        <div className="rounded-2xl border border-ticker-hover bg-white px-2 pb-2 pt-3">
          <div className="mb-[10px] flex items-center justify-between px-3">
            <div className="flex gap-4">
              <div>스왑</div>
              <button className="flex items-center gap-1 text-uni-search-slash-2 transition-opacity hover:opacity-90">
                구입하다 <div className="h-2 w-2 rounded-full bg-uni-blue-1" />
              </button>
            </div>

            <div>
              <button className="transition-opacity hover:opacity-70">
                <Config className="text-uni-search-slash-2" />
              </button>
            </div>
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
          <div className="relative -my-[18px] flex justify-center">
            <button className="grid h-10 w-10 place-items-center rounded-xl border-4 border-white bg-uni-gray-7">
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
              <button className="flex items-center gap-2 rounded-2xl bg-uni-pink-2 p-[6px] pl-[10px] pr-[6px] text-xl leading-5 text-white shadow-uni-select">
                토큰 선택
                <Chevron className="stroke-white" />
              </button>
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
