import { Suspense, useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans, checkHostIdExists } from "../../api/vanapi";
import { getHostTrucks } from "../../api/truckapi";
import { requireAuth } from "../../utils";
import Loader from "../../components/Loader";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans(), trucks: getHostTrucks() });
}

const HostVans = () => {
  const [trucks, setTrucks] = useState([]);
  const dataPromise = useLoaderData();
  // const trucks = useLoaderData()

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

  useEffect(() => {
    // Get the hostId from user input or any other source
    const hostId = "123"; // Replace with your logic to get hostId

    const fetchData = async () => {
      // Check if the hostId exists in Firebase
      const hostExists = await checkHostIdExists(hostId);

      if (hostExists) {
        // If host exists, get the host's vans
        const hostVans = await getHostVans(hostId);
        console.log("Host's Vans:", hostVans);
      } else {
        console.log("Host with ID", hostId, "not found in Firebase.");
      }
    };

    fetchData(); // Fetch data when the component mounts or when hostId changes
  }, []);

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
