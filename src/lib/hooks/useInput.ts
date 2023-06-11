import { useState } from "react";

type UseInput = () => [
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput: UseInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (REG_EX.test(value)) {
      setValue(value);
    }
  };

  return [value, handleChange];
};
export default useInput;

const REG_EX = /^[0-9]*\.?[0-9]*$/;
