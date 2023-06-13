const SwapList = ({ label, desc }: { label: string; desc: string }) => {
  return (
    <li className="flex justify-between">
      <div>{label}</div>
      <span className="text-uni-black-1">{desc}</span>
    </li>
  );
};
export default SwapList;
