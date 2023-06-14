import { AnimatePresence, motion, Variants } from "framer-motion";

interface AnimatedDropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
}
const AnimatedDropdown = ({ isOpen, children }: AnimatedDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={dropdownVariants}
          className="overflow-hidden will-change-[height]"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default AnimatedDropdown;

const dropdownVariants: Variants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.15,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.15,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
};
