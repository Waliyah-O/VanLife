import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const TruckDetail = () => {
  const [truck, setTruck] = useState([]);
  const params = useParams();
  const location = useLocation()
  // console.log(location);
  
  useEffect(() => {
    fetch(`/api/trucks/${params.id}`)
      .then((res) => res.json())
      .then((data) => setTruck(data.trucks))
      .catch((error) => console.log(error));
  }, [params.id]);

  if (!truck) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="van-detail-container">
      <Link to=".." relative="path" className="back-button">
        <span> &larr; Back to all trucks</span>
      </Link>
      {truck ? (
        <div className="van-detail">
          <img src={truck.imageUrl} alt="" />
          <i className={`van.imageUrl ${truck.type} selected`}></i>
          <h2>{truck.name}</h2>
          <p className="van-price">
            <span>${truck.price}</span>/day
          </p>
          <p>{truck.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default TruckDetail;
