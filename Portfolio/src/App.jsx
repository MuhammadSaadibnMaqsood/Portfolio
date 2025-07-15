import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className="h-[100vh] w-full bg-zinc-300">
      <Navbar/>
    </div>
    </>
  );
}

export default App;
