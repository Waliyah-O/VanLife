import { useState } from "react";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";
import { loginUser } from "../api/vanapi";

export function loader({ request }) {
  // ibile (native) javascript lol
  return new URL(request.url).searchParams.get("message");
}

export async function action() {
  console.log("action function");
  return null
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const message = useLoaderData();
  // console.log(message);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="login-container">
      <h1>sign in to your account</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {error && <h4 className="login-error">{error.message}</h4>}

      <Form method="post" className="login-form">
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
        <button 
          disabled={status === "submitting"}
        >
            {status === "submitting" 
            ? "Logging in..." 
            : "Log in"
          }
        </button>
      </Form>
    </div>
  );
};

export default Login;
