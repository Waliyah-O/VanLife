import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get("type");
  // console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id}>
        <img className="van-image " src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            {van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`${
            typeFilter === "simple"
              ? "selected"
              : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`${
            typeFilter === "luxury"
              ? "selected"
              : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          luxury
        </button>
        <button
          className={`${
            typeFilter === "rugged"
              ? "selected"
              : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          rugged
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange("type", null)}
          >
            clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;

{
  /* <div className="van-list-filter-buttons">
        <button
          className="van-type simple"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className="van-type luxury"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          luxury
        </button>
        <button
          className="van-type rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          rugged
        </button>
        <button
          className="van-type clear-filters"
          onClick={() => setSearchParams({})}
        >
          clear filter
        </button>
      </div> */
}

// function genNewSearchParamString(key, value) {
//   const searchParams = new URLSearchParams(searchParams);
//   if (value === null) {
//     searchParams.delete(key);
//   } else {
//     searchParams.set(key, value);
//   }
//  return `?${searchParams.toString()}
// }

{
  /* <Link to={genNewSearchParamString("type", "luxury")}>Luxury</Link>
<Link to={genNewSearchParamString("type", "simple")}>Simple</Link>
<Link to={genNewSearchParamString("type", "rugged")}>Rugged</Link>
<Link to={genNewSearchParamString("type", null)}>Clear</Link> */
}

{
  /* <Link className="van-type simple" to="?type=simple">
          Simple
        </Link>
        <Link className="van-type luxury" to="?type=luxury">
          Luxury
        </Link>
        <Link className="van-type rugged" to="?type=rugged">
          Rugged
        </Link>
        <Link className="van-type clear-filters" to=".">
          Clear
        </Link> */
}
