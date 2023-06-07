import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";

const MiddleSection = () => {
  return (
    <section className="mx-auto flex max-w-[720px] flex-col items-center text-center">
      <h1 className="text-linear mb-6 text-[64px] font-bold leading-[72px]">
        안심하고 암호화폐 및 NFT 거래
      </h1>
      <div className="text-xl text-uni-gray-2">
        토큰 및 NFT 구매, 판매 및 탐색
      </div>
      <button className="bg-linear mb-9 mt-8 min-w-[300px] rounded-3xl py-4 text-xl font-medium text-white transition-all duration-[250ms] hover:shadow-uni-pink">
        시작하다
      </button>

      <button className="flex items-center justify-center gap-[14px] text-xl font-semibold text-uni-gray-4 transition-opacity duration-[250ms] hover:opacity-60">
        더 알아보기 <ArrowDown />
      </button>
    </section>
  );
};
export default MiddleSection;
