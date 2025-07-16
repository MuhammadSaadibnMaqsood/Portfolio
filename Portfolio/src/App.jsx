
import { Hero } from './components/Hero';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className="h-[100vh] bg-gradient-to-b from-gray-950 via- to-cyan-800">
      <div className=''>
      <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
        
    </div>
    </>
  );
}

export default App;
