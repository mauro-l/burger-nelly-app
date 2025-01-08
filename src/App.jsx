import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className="text-5xl font-bold text-teal-500">
        Hola nelly desde TailwindCss 
      </h1>
    </div>
  );
}

export default App;

