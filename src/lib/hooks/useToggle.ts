import { useState } from "react";

type UseToggle = () => [boolean, () => void];

const useToggle: UseToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const handleClickToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, handleClickToggle];
};
export default useToggle;
