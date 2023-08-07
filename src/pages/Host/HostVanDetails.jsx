import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetails = () => {
	const [van, setVan] = useState([])
	const params = useParams()
	console.log(params);

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
	},[params.id])

  return (
    <div>
      <h1>host van details</h1>
    </div>
  );
};

export default HostVanDetails;
