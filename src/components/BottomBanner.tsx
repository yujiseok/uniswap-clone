import { ReactComponent as Close } from "../assets/close.svg";

const BottomBanner = ({
  handleClickClose,
}: {
  handleClickClose: () => void;
}) => {
  return (
    <div className="banner-bg border-uni-gray-11 fixed bottom-5 right-5 z-10 flex h-[164px] w-[390px] flex-col justify-between rounded-[20px] border px-4 py-6 shadow-banner transition-all duration-[250ms] ease-in-out hover:bg-170">
      <div className="flex items-start justify-between text-2xl font-medium text-white">
        주머니 속 유니스왑
        <button
          className="transition-opacity duration-[250ms] hover:opacity-60"
          onClick={handleClickClose}
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
  );
};
export default BottomBanner;
