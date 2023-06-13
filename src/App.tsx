import Drawer from "./components/drawer/Drawer";
import Navbar from "./components/Navbar";
import Swap from "./components/swap/Swap";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36">
        <Swap />
      </main>
      <div className="bg-radial-gradient" />
      <Drawer />
    </>
  );
};
export default App;
