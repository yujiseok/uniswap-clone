interface IRouterDropdown {
  handleClickActive: (i: number) => void;
  active: number;
}

const RouterDropdown = ({ handleClickActive, active }: IRouterDropdown) => {
  return (
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
              active === i ? "border-uni-pink-2" : "border-uni-gray-11"
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
  );
};
export default RouterDropdown;

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
