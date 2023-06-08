import BottomSection from "./components/BottomSection";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main className="h-[4000px] min-h-screen">
        <Navbar />

        <MiddleSection />
        <BottomSection />
      </main>
      <div className="bg-radial-gradient" />
    </>
  );
};
export default App;
