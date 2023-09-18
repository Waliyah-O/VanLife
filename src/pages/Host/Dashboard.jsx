import { Suspense } from "react";
import { Link, defer, Await, useLoaderData, redirect } from "react-router-dom";
import { getHostVans } from "../../api/vanapi";
import { BsStarFill } from "react-icons/bs";
import Loader from "../../components/Loader";

export async function loader({ request }) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    const response = redirect("/login?message=You must log in first!");
    response.body = true;
    return response;
  }
  return defer({ vans: getHostVans() });
}

const HostDashboard = () => {
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed rigs</h2>
          <Link to="vans">View all</Link>
        </div>
        <Suspense
          fallback={
            <>
              <Loader /> <h1>Loading dashboard</h1>
            </>
          }
        >
          <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </>
  );
};

export default HostDashboard;
