import { forwardRef, useState } from "react";
import { ReactComponent as Alert } from "../../assets/alert.svg";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { MAX_ARR, REG_EX } from "../../constants/constants";
import useToggle from "../../lib/hooks/useToggle";
import Hr from "../Hr";
import AnimatedDropdown from "./AnimatedDropdown";
import RouterDropdown from "./RouterDropdown";

interface Props {
  maxLabel: MaxLabel;
  maxValue: string;
  handleClickMaxLabel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxLabel: React.Dispatch<React.SetStateAction<MaxLabel>>;
}

const ConfigDropdown = forwardRef(
  (
    {
      maxLabel,
      maxValue,
      handleClickMaxLabel,
      setMaxValue,
      setMaxLabel,
    }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [toggle, handClickToggle] = useToggle();
    const [isMaxOpen, handleClickMaxOpen] = useToggle();
    const [active, setActive] = useState(0);
    const [isTimeOpen, handleClickTimeOpen] = useToggle();
    const [timeValue, setTimeValue] = useState(0);

    const handleClickActive = (i: number) => setActive(i);
    const handleChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (REG_EX.test(value)) {
        setMaxValue(value);

        const maxLabel = value ? "사용자 정의" : "자동";

        setMaxLabel(maxLabel);
      }
    };
    return (
      <div
        ref={ref}
        className="absolute right-0 top-full z-10 mt-[10px] flex max-w-[330px] flex-col gap-4 rounded-2xl border border-uni-gray-11 bg-white p-4 text-uni-gray-12 shadow-swap-config"
      >
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
                  handClickToggle();
                  handleClickActive(0);
                }}
                checked={toggle}
              />
              <div className="block h-8 w-16 rounded-full border border-transparent bg-uni-pink-1 p-1 peer-checked:border-uni-gray-11 peer-checked:bg-white" />
              <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-uni-pink-2 transition peer-checked:right-3 peer-checked:-translate-x-full peer-checked:bg-uni-gray-9" />
            </div>
          </label>
        </div>
        {toggle ? (
          <RouterDropdown
            active={active}
            handleClickActive={handleClickActive}
          />
        ) : null}
        <Hr />
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              최대 가격 변동 <Question />
            </div>
            <button
              className="flex items-center gap-1 text-uni-black-1"
              onClick={handleClickMaxOpen}
            >
              {maxLabel === "자동"
                ? maxLabel
                : `${Number(maxValue).toFixed(2)}%`}
              <Chevron
                className={`${
                  isMaxOpen ? "rotate-180" : ""
                } transition-transform duration-[250ms]`}
              />
            </button>
          </div>
          <AnimatedDropdown isOpen={isMaxOpen}>
            <div className="flex items-center justify-between gap-4 pt-3">
              <div className="flex rounded-2xl border border-uni-gray-11 p-1">
                {MAX_ARR.map((item) => (
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
              <div
                className={`${
                  Number(maxValue) > 50 ? "border-uni-red-1 text-uni-red-2" : ""
                } flex w-auto flex-1 justify-end gap-3 rounded-2xl border border-uni-gray-11 px-4 py-2 text-uni-black-1`}
              >
                <input
                  type="text"
                  className="w-full text-right outline-none"
                  placeholder="0.10"
                  value={maxValue}
                  onChange={handleChangeMaxValue}
                />
                <div className="text-uni-black-1">%</div>
              </div>
            </div>

            <div className="text-xs text-uni-yellow-1">
              {Number(maxValue) > 1 && (
                <div className="flex items-center gap-2 pt-3">
                  <Alert />
                  <div>
                    귀하의 거래는 선불이고 불리한 거래를 초래할 수 있습니다.
                  </div>
                </div>
              )}

              {maxValue && Number(maxValue) < 0.05 && (
                <div className="flex items-center gap-2 pt-3">
                  <Alert />
                  <div>
                    0.05% 미만의 슬리피지는 거래 실패로 이어질 수 있습니다.
                  </div>
                </div>
              )}
            </div>
          </AnimatedDropdown>
        </div>
        <Hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            거래 마감 시간 <Question />
          </div>

          <button
            className="flex items-center gap-1 text-uni-black-1"
            onClick={handleClickTimeOpen}
          >
            {timeValue === 0 ? "30" : timeValue}
            <Chevron
              className={`${
                isTimeOpen ? "rotate-180" : ""
              } transition-transform duration-[250ms]`}
            />
          </button>
        </div>
        <AnimatedDropdown isOpen={isTimeOpen}>
          <div
            className={`${
              timeValue > TIME_VALUE
                ? "border-uni-red-1 text-uni-red-2"
                : "border-uni-gray-11"
            } flex w-full justify-end gap-3 rounded-xl border px-4 py-2 text-uni-black-1`}
          >
            <input
              type="text"
              placeholder="30"
              className="flex-1 bg-transparent text-right outline-none  "
              onChange={(e) => setTimeValue(Number(e.target.value))}
            />
            <div className="text-uni-black-1">분</div>
          </div>
        </AnimatedDropdown>
      </div>
    );
  }
);
export default ConfigDropdown;

const TIME_VALUE = 4320;
