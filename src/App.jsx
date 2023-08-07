import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";

//components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// server
import "./server";

// pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import HostDashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="details" element={<HostVanDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
