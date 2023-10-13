import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
// import { getVans } from "../../api/vanapi";
import { getVan } from "../../api/vanapi";

export function loader({ params }) {
  // return getVans(params.id);
  return getVan(params.id);
}


const VanDetail = () => {
  const location = useLocation();
  const van = useLoaderData();
  // console.log(van);

  //optional chaining
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        <span> &larr; Back to {type} vans</span>
      </Link>
      <div className="van-detail">
        <img src={van.imageUrl} alt="" />
        <i className={`van.imageUrl ${van.type} selected`}></i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">
          <Link
            to={{
              pathname: `/van/${van.id}/checkout`,
              state: { van },
            }}
          >
            Rent this van
          </Link>
        </button>
      </div>
    </div>
  );
};


export default VanDetail;
