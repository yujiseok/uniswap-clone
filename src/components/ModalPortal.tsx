import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const modalContainer = document.getElementById(
    "modal-container"
  ) as HTMLDivElement;

  return createPortal(children, modalContainer);
};
export default ModalPortal;
