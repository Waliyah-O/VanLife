import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
("../../api/vans");

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans))
      .catch((error) => console.log(error));
  }, []);

  // console.log(hostVans);

  return (
    <div>
      <h1>Your listed vans</h1>

      {hostVans.map((van) => (
        <div key={van.id}>
          <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} alt="" />
            <h3>{van.name}</h3>
            <p>
              {van.price} <span>/day</span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HostVans;
