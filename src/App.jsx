import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-center items-center w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

