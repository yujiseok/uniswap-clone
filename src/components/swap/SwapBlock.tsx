const SwapBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="focus-within:border-uni-gray-13 rounded-2xl border border-transparent bg-uni-gray-5 p-4 text-uni-black-1">
      {children}
    </div>
  );
};
export default SwapBlock;
