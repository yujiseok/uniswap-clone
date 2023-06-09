import { useState } from "react";

type UseInput = () => [
  value: number,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput: UseInput = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    e.target.value = value
      .replace(/[^\d.]/g, "")
      .replace(/^(\d*\.?\d*).*/, "$1");

    setValue(+value);
  };

  return [value, handleChange];
};
export default useInput;
