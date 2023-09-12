import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const location = useLocation();
  // console.log(location);
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((error) => console.log(error));
  }, [params.id]);

  // incase location.state.search does not exists
  // const search = location.state && location.state.search || ""

  //optional chaining
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        <span> &larr; Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="" />
          <i className={`van.imageUrl ${van.type} selected`}></i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
