import { useEffect } from "react";

type UseClickOutside = (
  triggerRef: React.RefObject<HTMLElement>,
  dropdownRef?: React.RefObject<HTMLElement>,
  handler?: VoidFunction,
  setState?: React.Dispatch<boolean>
) => void;

const useClickOutside: UseClickOutside = (
  triggerRef,
  dropdownRef,
  handler,
  setState
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as HTMLElement) &&
        !dropdownRef?.current?.contains(e.target as HTMLElement)
      ) {
        setState?.(false);
        handler?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [triggerRef, dropdownRef, handler, setState]);
};
export default useClickOutside;
