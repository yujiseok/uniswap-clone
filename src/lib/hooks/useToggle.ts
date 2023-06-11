import { useState } from "react";

type UseToggle = (initialState: boolean) => [boolean, () => void];

const useToggle: UseToggle = (initialState) => {
  const [toggle, setToggle] = useState(initialState);

  const handleClickToggle = () => setToggle((prev) => !prev);

  return [toggle, handleClickToggle];
};
export default useToggle;
