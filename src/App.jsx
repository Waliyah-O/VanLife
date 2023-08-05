import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

//components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// server
import "./server";
import HostDashboard from "./pages/Host/Dashboard";

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

            <Route path="host" element={<HostLayout />}>
            <Route path="host" element={<HostDashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
