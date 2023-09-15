import { useRouteError } from "react-router-dom";

import errorImg from "../assets/images/X.png";

const errorStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Error = () => {
  const error = useRouteError();

  return (
    <div style={errorStyles}>
      <img style={{ width: "300px" }} src={errorImg} alt="" />
      <h1>Error: {error.message}!</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
};

export default Error;
