import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);

  // console.log(vans);

  useEffect(() => {
    fetch("/api/host/trucks")
      .then((res) => res.json())
      .then((data) => setTrucks(data.trucks))
      .catch((error) => console.log(error));
  }, []);
  // console.log(trucks);

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
    <section>
      <h1 className="host-vans-title">Your listed rigs</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <div>
            <section>{hostVansEls}</section>
            <section>{hostTruckEls}</section>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
