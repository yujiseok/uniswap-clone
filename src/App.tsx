import { AnimatePresence } from "framer-motion";
import Drawer from "./components/drawer/Drawer";
import Navbar from "./components/Navbar";
import Swap from "./components/swap/Swap";
import { useDrawerState } from "./context/DrawerContext";

const App = () => {
  const isDrawerOpen = useDrawerState();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36">
        <Swap />
      </main>
      <div className="bg-radial-gradient" />
      <AnimatePresence>{isDrawerOpen ? <Drawer /> : null}</AnimatePresence>
    </>
  );
};
export default App;
