import { motion } from "framer-motion";
import { ReactComponent as Config } from "../../assets/config.svg";
import { ReactComponent as DoubleChev } from "../../assets/double-chev.svg";

const Drawer = () => {
  return (
    <motion.aside className="fixed right-2 top-2 z-10 flex h-[calc(100%-16px)]">
      <div className="cursor-pointer rounded-l-[20px] py-6 pl-[14px] pr-7 transition-all duration-200 hover:-mr-2 hover:bg-uni-gray-14">
        <DoubleChev className="text-uni-gray-12" />
      </div>
      <div className="h-full w-80 rounded-xl border border-uni-gray-11 bg-white p-4 shadow-banner">
        <div className="pr-[2px]">
          <div className="flex items-center justify-between pb-5">
            <div>Connect a wallet</div>
            <button className="rounded-xl bg-uni-gray-8 px-2 py-2">
              <Config width={16} height={16} className="text-uni-gray-12" />
            </button>
          </div>

          <ul className="grid gap-[2px] overflow-hidden rounded-xl">
            {drawerArr.map((item) => (
              <li
                key={item.label}
                className="flex cursor-pointer items-center gap-2 bg-uni-gray-5 p-[18px] font-semibold transition-colors hover:bg-uni-search-slash-1"
              >
                <img src={item.src} alt={item.label} className="h-10 w-10" />
                <div>{item.label}</div>
                {item.badge ? (
                  <div className="badge-linear-gradient rounded-[5px] px-1 py-[2px] text-[8px] font-normal leading-3 text-white">
                    {item.badge}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="px-1 pt-4 text-xs font-light text-uni-gray-2">
            지갑을 연결하면 Uniswap Labs에 동의하는 것입니다. <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://uniswap.org/terms-of-service/"
              className="font-semibold text-uni-gray-12 hover:opacity-60"
            >
              서비스 약관{" "}
            </a>
            그리고 그것에 동의{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://uniswap.org/privacy-policy"
              className="font-semibold text-uni-gray-12 hover:opacity-60"
            >
              개인 정보 정책
            </a>
            . (마지막 업데이트 11.17.22)
          </div>
        </div>
      </div>
    </motion.aside>
  );
};
export default Drawer;

const drawerArr = [
  {
    src: "https://app.uniswap.org/static/media/uniwallet.c69004d199c2519778d1.png",
    label: "Uniswap Wallet",
    badge: "NEW",
  },
  {
    src: "https://app.uniswap.org/static/media/metamask.a8bd577376764ebfd421e669e37b0ebb.svg",
    label: "MetaMask",
  },
  {
    src: "https://app.uniswap.org/static/media/walletConnectIcon.1dbab988fae0fcca5455f5eaed5e4417.svg",
    label: "WalletConnect",
  },
  {
    src: "https://app.uniswap.org/static/media/coinbaseWalletIcon.07499ce0896d18990e93182d478a70cd.svg",
    label: "Coinbase Wallet",
  },
];
