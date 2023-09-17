import { Suspense, useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api/vanapi";
import { requireAuth } from "../../utils";
import Loader from "../../components/Loader";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

const HostVans = () => {
  const [trucks, setTrucks] = useState([]);
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <>
        <div className="host-vans-list">
          <div>
            <section>{hostVansEls}</section>
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
    fetch("/api/host/trucks")
      .then((res) => res.json())
      .then((data) => setTrucks(data.trucks))
      .catch((error) => console.log(error));
  }, []);
  // console.log(trucks);

  const hostTruckEls = trucks.map((truck) => (
    <Link to={truck.id} key={truck.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={truck.id}>
        <img src={truck.imageUrl} alt={`Photo of ${truck.name}`} />
        <div className="host-van-info">
          <h3>{truck.name}</h3>
          <p>${truck.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1 className="host-vans-title">Your listed rigs</h1>
      <Suspense
        fallback={
          <>
            <Loader /> <h2>Loading rigs...</h2>
          </>
        }
      >
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
      <section>{hostTruckEls}</section>
    </div>
  );
};

export default HostVans;
