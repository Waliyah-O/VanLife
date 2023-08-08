import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetails = () => {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans))
      .catch((error) => console.log(error));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Host Van Details</h1>
      <div>
        <img src={currentVan.imageUrl} alt="" />
        <h2>{currentVan.name}</h2>
        <p>${currentVan.price}/day</p>
        <p>{currentVan.type}</p>
      </div>
    </div>
  );
};

export default HostVanDetails;
