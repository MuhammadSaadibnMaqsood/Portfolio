import  AboutMe  from "./components/AboutMe";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <div className="h-[100vh] bg-gradient-to-b from-gray-950 via- to-blue-900">
          <div className="">
            <Navbar />
          </div>
          <div>
            <Hero />
          </div>
        </div>
        <div className="bg-gray-200 h-[100vh]">
            <AboutMe/>
        </div>
      </div>
    </>
  );
}

export default App;
