import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.vans))
      .catch((error) => console.log(error));
  }, [params.id]);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
