import cmd from "../assets/cmd.svg";
import dollar from "../assets/dollar.svg";
import upArrow from "../assets/up-arrow.png";

const BottomSection = () => {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-8">
          {topGridArray.map((item) => (
            <div
              key={item.heading}
              className={`${item.bg} flex h-[360px] flex-col justify-between rounded-3xl border bg-white bg-auto-100 bg-right-center bg-no-repeat p-8 transition-colors duration-[250ms] hover:border-uni-gray-4`}
            >
              <div className="text-2xl font-semibold">{item.heading}</div>
              <div className="text-xl">
                <div className="max-w-[480px]">{item.desc}</div>
                <div className="mt-6 text-uni-pink-3">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8 pt-6">
          {bottomGridArray.map((item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={item.heading}
              className={`border-uni-gray-11 flex h-[260px] flex-col justify-between rounded-3xl border bg-uni-gray-5 bg-auto-100 bg-right-center bg-no-repeat p-8 transition-colors duration-[250ms] hover:border-uni-gray-4`}
            >
              <div className="flex items-center justify-between text-2xl font-semibold">
                {item.heading} <img src={item.src} alt={item.desc} />
              </div>
              <div className="text-xl">
                <div>{item.desc}</div>
                <div className="mt-6 text-uni-pink-3">{item.sub}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-linear-mesh my-20 flex h-[140px] items-center justify-between rounded-[34px] px-12 py-8 text-white shadow-proto">
          <div>
            <div className="mb-[10px] text-[28px] font-bold">
              Powered by the Uniswap Protocol
            </div>
            <div className="text-xl">
              The leading decentralized crypto trading protocol, governed by a
              global community.
            </div>
          </div>

          <a
            href="https://uniswap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[200px] justify-center rounded-[20px] border border-white p-4 transition-opacity duration-[250ms] hover:opacity-60"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};
export default BottomSection;

const topGridArray = [
  {
    heading: "Swap tokens",
    desc: "Buy, sell, and explore tokens on Ethereum, Polygon, Optimism, and more.",
    sub: "Trad Tokens",
    bg: "bg-swap-card",
  },
  {
    heading: "Trade NFTs",
    desc: "Buy and sell NFTs across marketplaces to find more listings at better prices.",
    sub: "Explore NFTs",
    bg: "bg-nft-card",
  },
];

const bottomGridArray = [
  {
    heading: "Buy crypto",
    desc: "Buy crypto with your credit card or bank account at the best rates.",
    sub: "Buy now",
    src: dollar,
    href: "https://support.uniswap.org/hc/en-us/articles/11306574799117-How-to-use-Moon-Pay-on-the-Uniswap-web-app-",
  },
  {
    heading: "Earn",
    desc: "Provide liquidity to pools on Uniswap and earn fees on swaps.",
    sub: "Buy now",
    src: upArrow,
    href: "https://app.uniswap.org/#/pools",
  },
  {
    heading: "Build dApps",
    desc: "Build apps and tools on the largest DeFi protocol on Ethereum.",
    sub: "Developer docs",
    src: cmd,
    href: "https://docs.uniswap.org/",
  },
];
