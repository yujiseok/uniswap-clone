import BottomSection from "./components/BottomSection";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="h-[4000px] min-h-screen bg-gray-200">
      {/* <Navbar /> */}

      <MiddleSection />
      <BottomSection />
    </main>
  );
};
export default App;
