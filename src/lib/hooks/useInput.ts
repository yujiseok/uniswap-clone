import { useState } from "react";

type UseInput = () => [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput: UseInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);

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
