import CardSkeleton from "../components/CardSkeleton";
import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  console.log(params);
  const [van, setVan] = useState([]);
  // console.log(van);

  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <p>page under construction!</p>
      <p>stay tuned on articles on truck and van maintainance!</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          // border: "2px solid red",
          placeItems: "center",
        }}
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <h1></h1>
      </div>
    </div>
  );
};

export default Blog;
