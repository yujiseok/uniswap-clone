import BottomSection from "./components/BottomSection";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36">
        <Swap />
        {/* <MiddleSection />
        <BottomSection /> */}
      </main>
      <div className="bg-radial-gradient" />
    </>
  );
};
export default App;
