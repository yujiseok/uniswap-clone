interface SwapListProps {
  label: string;
  desc: string;
}

const SwapList = ({ label, desc }: SwapListProps) => {
  return (
    <li className="flex justify-between">
      <div>{label}</div>
      <span className="text-uni-black-1">{desc}</span>
    </li>
  );
};
export default SwapList;
