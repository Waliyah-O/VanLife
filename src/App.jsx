import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

// server
import "./server";
import Layout from "./components/Layout";
import HostDashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<HostDashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
