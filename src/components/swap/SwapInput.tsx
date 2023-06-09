const SwapInput = ({
  value,
  handleSwapValue,
}: {
  value: string;
  handleSwapValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const strValue = value.toString();

  return (
    <input
      type="text"
      placeholder="0"
      minLength={1}
      maxLength={79}
      value={`${strValue === "0" ? "" : strValue}`}
      onChange={handleSwapValue}
      className="placeholder:text-uni-gray-12 w-0 flex-1 bg-transparent text-4xl outline-none"
    />
  );
};
export default SwapInput;
