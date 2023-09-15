import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <h1>sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          placeholder=" Email address"
          type="email"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
