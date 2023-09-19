import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader";

const Trucks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trucks, setTrucks] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const typeFilter = searchParams.get("type");
  // console.log(typeFilter);
  // console.log(searchParams.toString());

  useEffect(() => {
    fetch("/api/trucks")
      .then((res) => res.json())
      .then((data) => {
        setTrucks(data.trucks);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const displayedTrucks = typeFilter
    ? trucks.filter((truck) => truck.type.toLowerCase() === typeFilter)
    : trucks;

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

  const truckElements =
    displayedTrucks.length > 0 ? (
      displayedTrucks.map((truck) => (
        <div key={truck.id} className="van-tile">
          {/* save search filters */}
          <Link
            to={truck.id}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter,
            }}
          >
            <img className="van-image " src={truck.imageUrl} alt="" />
            <div className="van-info">
              <h3>{truck.name}</h3>
              <p>
                ${truck.price}
                <span>/day</span>
              </p>
            </div>
            <i className={`truck-type ${truck.type} selected`}>{truck.type}</i>
          </Link>
        </div>
      ))
    ) : (
      // <div>{<h1>{typeFilter} duty trucks not available yet</h1>}</div>
      <div className="loaderComponent">
        <Loader /> <h2>loading trucks</h2>
      </div>
    );

  return (
    <div className="van-list-container">
      <h1>Explore our truck options</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="van-list-filter-buttons">
            <button
              className={`${
                typeFilter === "light"
                  ? "van-type simple selected"
                  : "van-type simple"
              }`}
              onClick={() => handleFilterChange("type", "light")}
            >
              Light Duty
            </button>
            <button
              className={`${
                typeFilter === "medium"
                  ? "van-type rugged selected"
                  : "van-type rugged"
              }`}
              onClick={() => handleFilterChange("type", "medium")}
            >
              Medium Duty
            </button>
            <button
              className={`${
                typeFilter === "heavy"
                  ? "van-type luxury selected"
                  : "van-type luxury"
              }`}
              onClick={() => handleFilterChange("type", "heavy")}
            >
              Heavy Duty
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
          <div className="van-list">{truckElements}</div>
        </>
      )}
    </div>
  );
};

export default Trucks;

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
