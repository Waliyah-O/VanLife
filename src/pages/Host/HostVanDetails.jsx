import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { activeStyle } from "../../components/HostLayout";
import { getHostVans } from "../../api/vanapi";
// import { getVan } from "../../api/vanapi";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
  // return getVan(params.id);
}

const HostVanDetails = () => {
  const currentVan = useLoaderData();

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans))
  //     .catch((error) => console.log(error));
  // }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        <span> &larr; Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h2>{currentVan.name}</h2>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetails;
