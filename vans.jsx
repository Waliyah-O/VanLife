// import { useEffect, useState } from "react";
// import { Link, useSearchParams, useLoaderData } from "react-router-dom";
// import { getVans } from "../../api/vanapi";
// import LoadingDots from "../../components/LoadingDots";

// export function loader() {
//   return getVans();
// }

// const Vans = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const [vans, setVans] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const vans = useLoaderData();
//   // console.log(data);

//   const typeFilter = searchParams.get("type");
//   // console.log(typeFilter);
//   // console.log(searchParams.toString());

//   // useEffect(() => {
//   //   async function loadVans() {
//   //     setLoading(true);
//   //     try {
//   //       const data = await getVans();
//   //       setVans(data);
//   //     } catch (err) {
//   //       setError(err);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //     setLoading(false);
//   //   }

//   //   loadVans();
//   // }, []);

//   const displayedVans = typeFilter
//     ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
//     : vans;

//   function handleFilterChange(key, value) {
//     setSearchParams((prevParams) => {
//       if (value === null) {
//         prevParams.delete(key);
//       } else {
//         prevParams.set(key, value);
//       }
//       return prevParams;
//     });
//   }

//   // if (loading) {
//   //   return (
//   //     <h1>
//   //       Loading <LoadingDots />
//   //     </h1>
//   //   );
//   // }

//   if (error) {
//     return <h1>There was an error: {error.message} </h1>;
//   }

//   const vanElements = displayedVans.map((van) => (
//     <div key={van.id} className="van-tile">
//       {/* save search filters */}
//       <Link
//         to={van.id}
//         state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
//       >
//         <img className="van-image " src={van.imageUrl} alt="" />
//         <div className="van-info">
//           <h3>{van.name}</h3>
//           <p>
//             {van.price}
//             <span>/day</span>
//           </p>
//         </div>
//         <i className={`van-type ${van.type} selected`}>{van.type}</i>
//       </Link>
//     </div>
//   ));

//   return (
//     <div className="van-list-container">
//       <h1>Explore our van options</h1>
//       <div className="van-list-filter-buttons">
//         <button
//           className={`${
//             typeFilter === "simple"
//               ? "van-type simple selected"
//               : "van-type simple"
//           }`}
//           onClick={() => handleFilterChange("type", "simple")}
//         >
//           Simple
//         </button>
//         <button
//           className={`${
//             typeFilter === "luxury"
//               ? "van-type luxury selected"
//               : "van-type luxury"
//           }`}
//           onClick={() => handleFilterChange("type", "luxury")}
//         >
//           luxury
//         </button>
//         <button
//           className={`${
//             typeFilter === "rugged"
//               ? "van-type rugged selected"
//               : "van-type rugged"
//           }`}
//           onClick={() => handleFilterChange("type", "rugged")}
//         >
//           rugged
//         </button>
//         {typeFilter ? (
//           <button
//             className="van-type clear-filters"
//             onClick={() => handleFilterChange("type", null)}
//           >
//             clear filter
//           </button>
//         ) : null}
//       </div>
//       <div className="van-list">{vanElements}</div>
//     </div>
//   );
// };

// export default Vans;

// import { useEffect, useState } from "react";
// import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
// import { getVans } from "../../api/vanapi";

// export function loader({ params }) {
//   console.log(params);
//   return getVans(params.id);
// }

// const VanDetail = () => {
//   const params = useParams();
//   const location = useLocation();
//   // console.log(location);
//   // const [van, setVan] = useState([]);
//   const van = useLoaderData();
//   console.log(van);

//   // useEffect(() => {
//   //   fetch(`/api/vans/${params.id}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setVan(data.vans))
//   //     .catch((error) => console.log(error));
//   // }, [params.id]);

//   // incase location.state.search does not exists
//   // const search = location.state && location.state.search || ""

//   //optional chaining
//   const search = location.state?.search || "";
//   const type = location.state?.type || "all";

//   return (
//     <div className="van-detail-container">
//       <Link to={`..${search}`} relative="path" className="back-button">
//         <span> &larr; Back to {type} vans</span>
//       </Link>
//       {van ? (
//         <div className="van-detail">
//           <img src={van.imageUrl} alt="" />
//           <i className={`van.imageUrl ${van.type} selected`}></i>
//           <h2>{van.name}</h2>
//           <p className="van-price">
//             <span>${van.price}</span>/day
//           </p>
//           <p>{van.description}</p>
//           <button className="link-button">Rent this van</button>
//         </div>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// };

// export default VanDetail;

import { useState } from "react";
import {
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api/vanapi";

export function loader({ request }) {
  // ibile (native) javascript lol!
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    console.log(data);
    const response = redirect("/host");
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }

  // save user data in local storage
  // save token in a cookie
}

const Login = () => {
  // const [loginFormData, setLoginFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [status, setStatus] = useState("idle");
  // const [error, setError] = useState(null);
  // const navigate = useNavigate();
  const message = useLoaderData();
  // console.log(message);
  const errorMessage = useActionData();
  const navigation = useNavigation();
  console.log(navigation.state);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus("submitting");
  //   setError(null);
  //   loginUser(loginFormData)
  //     .then(() => navigate("/host", { replace: true }))
  //     .finally(() => setStatus("idle"));
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="login-container">
      <h1>sign in to your account</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {errorMessage && <h4 className="login-error">{errorMessage}</h4>}

      <Form method="post" className="login-form" replace>
        <input
          name="email"
          placeholder=" Email address"
          type="email"
          // value={loginFormData.email}
          // onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          // value={loginFormData.password}
          // onChange={handleChange}
        />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;
