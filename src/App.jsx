import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import "./server";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">
            #VAN LIFE
          </Link>
          <nav>
            <Link to="/about">About page</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
