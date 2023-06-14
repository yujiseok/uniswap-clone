interface SwapInputProps {
  value: string;
  handleSwapValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwapInput = ({ value, handleSwapValue }: SwapInputProps) => {
  return (
    <input
      type="text"
      placeholder="0"
      minLength={1}
      maxLength={79}
      value={value}
      onChange={handleSwapValue}
      className="placeholder:text-uni-search-slash-2 w-0 flex-1 bg-transparent text-4xl outline-none"
    />
  );
};
export default SwapInput;
