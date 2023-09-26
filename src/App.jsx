import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// styles
import "./App.css";

//components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// server
import "./server/server";

// pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Vans, { loader as vansPageLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Trucks from "./pages/Trucks/Trucks";
import TruckDetail, {
  loader as truckDetailLoader,
} from "./pages/Trucks/TruckDetail";
import HostDashboard, {
  loader as hostDashboardLoader,
} from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetails";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFoundPage from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import { requireAuth } from "./utils";
import ContactUs from "./pages/ContactUs";
import CheckoutPage, { loader as checkoutLoader } from "./pages/CheckOut";
import CheckoutTruck, {
  loader as checkoutTruckLoader,
} from "./pages/CheckoutTruck";
import SuccessPage from "./pages/SuccessPage";
import SignUp from "./pages/Signup";
import CreateVanForm from "./components/CreateVanForm";
import CreateTruckForm from "./components/CreateTruckForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<ContactUs />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="signup" element={<SignUp />} />
      <Route
        path="van/:id/checkout"
        element={<CheckoutPage />}
        loader={checkoutLoader}
      />
      <Route
        path="truck/:id/checkout"
        element={<CheckoutTruck />}
        loader={checkoutTruckLoader}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansPageLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />
      <Route path="trucks" element={<Trucks />} errorElement={<Error />} />
      <Route
        path="trucks/:id"
        element={<TruckDetail />}
        errorElement={<Error />}
        loader={truckDetailLoader}
      />

      <Route path="host" element={<HostLayout />} errorElement={<Error />}>
        <Route
          index
          element={<HostDashboard />}
          loader={hostDashboardLoader}
          // loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route path="createVan" element={<CreateVanForm />} />
        <Route path="createTruck" element={<CreateTruckForm />} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="paymentsuccessful" element={<SuccessPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="trucks" element={<Trucks />} />
            <Route path="trucks/:id" element={<TruckDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */
}
