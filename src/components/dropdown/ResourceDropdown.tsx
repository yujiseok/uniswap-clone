import { forwardRef } from "react";
import { ReactComponent as Apple } from "../../assets/apple.svg";
import { ReactComponent as Chart } from "../../assets/chart.svg";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Poll } from "../../assets/poll.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import Hr from "../Hr";

const ResourceDropdown = forwardRef(
  (_: unknown, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="absolute left-36 top-14 flex flex-col gap-4 rounded-xl border border-uni-dropdown-border bg-white px-2 py-2 shadow-uni-dropdown"
      >
        <ul className="text-black">
          {dropdownArrTop.map((item) => (
            <li key={item.label} className="rounded-xl hover:bg-uni-gray-14">
              <a className="flex items-center gap-3 p-2">
                <span>{item.icon}</span> {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Hr />
        <ul>
          {dropdownArrBottom.map((item) => (
            <li key={item.label} className="rounded-xl hover:bg-uni-gray-14">
              <a className="flex gap-3 p-2 text-sm">{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 px-3">
          {dropdownIconArr.map((item, i) => (
            <div key={i} className="rounded-xl hover:bg-uni-gray-14">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
export default ResourceDropdown;

const dropdownArrTop = [
  {
    icon: <Apple />,
    label: "유니스왑 지갑 다운로드",
  },
  {
    icon: <Poll />,
    label: "거버넌스 투표",
  },
  {
    icon: <Chart />,
    label: "더 많은 분석 보기",
  },
];

const dropdownArrBottom = [
  {
    label: "지원 센터 ↗",
  },
  {
    label: "선적 서류 비치 ↗",
  },
  {
    label: "피드백 ↗",
  },
  {
    label: "법률 및 개인정보 보호 ↗",
  },
];

const dropdownIconArr = [
  { icon: <Discord /> },
  { icon: <Twitter /> },
  { icon: <Github /> },
];
