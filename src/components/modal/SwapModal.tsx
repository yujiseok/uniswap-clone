import { motion } from "framer-motion";
import { useRef } from "react";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as RedCheck } from "../../assets/red-check.svg";
import { TOKEN_ARR } from "../../constants/constants";
import useClickOutside from "../../lib/hooks/useClickOutside";
import Hr from "../Hr";
import ModalPortal from "./ModalPortal";

interface SwapModalProps {
  handleClickModal: () => void;
  tokenValue?: Token;
  setToken: React.Dispatch<Token>;
  handleClickTokenValue: HandleClickTokenValue;
}

const SwapModal = ({
  handleClickModal,
  tokenValue,
  setToken,
  handleClickTokenValue,
}: SwapModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, undefined, handleClickModal);

  return (
    <ModalPortal>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        className="fixed left-0 top-0 z-20 grid h-full w-full place-items-center bg-uni-modal-overlay"
      >
        <motion.div
          ref={modalRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="w-[420px] -translate-y-48 rounded-[20px] bg-white"
        >
          <div className="flex flex-col gap-4 p-5">
            <div className="flex items-center justify-between">
              <div>토큰 선택</div>
              <button onClick={handleClickModal}>
                <Close />
              </button>
            </div>

            <div>
              <input
                type="text"
                placeholder="이름 검색 또는 주소 붙여 넣기"
                autoFocus
                className="modal-search-input h-10 w-full rounded-xl border border-uni-gray-11 py-4 pl-10 pr-4 outline-none focus:bg-transparent"
              />
            </div>

            <ul className="flex gap-2">
              {TOKEN_ARR.map((item) => (
                <li key={item.ticker}>
                  <button
                    className={`${
                      item.ticker === tokenValue?.ticker
                        ? "cursor-auto border-uni-blue-2 bg-uni-blue-3 text-uni-blue-2"
                        : "border-uni-gray-11 bg-white"
                    } flex gap-2 rounded-2xl border py-[6px] pl-[6px] pr-3 hover:bg-uni-gray-14`}
                    onClick={() =>
                      handleClickTokenValue(item, handleClickModal, setToken)
                    }
                  >
                    <img
                      src={item.src}
                      alt={item.ticker}
                      className="token-gradient h-6 w-6 rounded-full shadow-token-img"
                    />
                    <div>{item.ticker}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Hr />
          <ul className="flex flex-col gap-2 pb-1">
            {TOKEN_ARR.map((item) => (
              <li
                key={item.ticker}
                className={`${
                  item.ticker === tokenValue?.ticker
                    ? "pointer-events-none flex items-center justify-between opacity-40"
                    : "cursor-pointer hover:bg-uni-gray-10"
                }  px-5 py-2`}
                onClick={() =>
                  handleClickTokenValue(item, handleClickModal, setToken)
                }
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.src}
                    alt={item.ticker}
                    className="token-gradient h-9 w-9 rounded-full shadow-token-img"
                  />

                  <div>
                    <div>{item.token}</div>
                    <div className="text-xs text-uni-gray-4">{item.ticker}</div>
                  </div>
                </div>

                {item.ticker === tokenValue?.ticker ? <RedCheck /> : null}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </ModalPortal>
  );
};
export default SwapModal;

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeOut", duration: 0.25 } },
  exit: { opacity: 0, transition: { ease: "easeIn", duration: 0.35 } },
};
