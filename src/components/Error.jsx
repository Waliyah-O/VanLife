import errorImg from "../assets/images/X.png";

const errorStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Error = () => {
  return (
    <div style={errorStyles}>
      <img style={{ width: "300px" }} src={errorImg} alt="" />
      <h1>An error occurred!</h1>
    </div>
  );
};

export default Error;
