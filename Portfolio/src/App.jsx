import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

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
        <div className="bg-gradient-to-b from-white to-cyan-50">
          <AboutMe />
        </div>
        <div className="bg-gradient-to-b from-gray-950 via- to-blue-900 ">
          <Projects />
        </div>
        <div className="bg-gradient-to-b from-white to-cyan-50">
          <ContactMe />
        </div>
        <div className="bg-gradient-to-b from-white to-cyan-50">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
