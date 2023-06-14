import { useState } from "react";
import { REG_EX } from "../../constants/constants";

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
