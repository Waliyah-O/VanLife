import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to='/'>#VAN LIFE</Link>
          <nav>
            <Link to="/">Home page</Link>
            <Link to="/about">About page</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
