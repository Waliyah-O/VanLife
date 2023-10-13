import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { requireAuth } from "../utils";
import { getHostVans } from "../api/vanapi";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
  // return getVan(params.id);
}

const CreateVanForm = () => {
  const [formData, setFormData] = useState({
    // id: new Date().getTime(),
    name: "",
    price: 0,
    description: "",
    type: "",
    imageUrl: "",
    hostId: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("/api/vans", formData)
  //     .then((response) => {
  //       console.log("new van created", response.data);
  //       console.log(`/host/vans/${response.data.id}`);
  //       //clear form daa
  //       setFormData({
  //         // id: 0,
  //         name: "",
  //         price: 0,
  //         description: "",
  //         type: "",
  //         imageUrl: "",
  //         hostId: 0,
  //       });
  //     })
  //     .catch((error) => console.error("error creating van", error));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/vans", formData)
      .then((response) => {
        // console.log("Response from server:", response);
        alert(`Status: van ${response.statusText}` )

        if (response.data.id !== undefined) {
          // Save the van data to local storage
          const vanData = {
            id: response.data.id,
            name: formData.name,
            price: formData.price,
            description: formData.description,
            type: formData.type,
            imageUrl: formData.imageUrl,
            hostId: formData.hostId,
          };

          // Convert vanData to a JSON string
          const vanDataString = JSON.stringify(vanData);

          // Save vanDataString to local storage
          localStorage.setItem(`van_${response.data.id}`, vanDataString);

          // Clear form data
          setFormData({
            name: "",
            price: 0,
            description: "",
            type: "",
            imageUrl: "",
            hostId: 0,
          });

          // Navigate to the van's details page
          // navigate(`/host/vans/${response.data.id}`);
        } else {
          // console.error("Error: No 'id' found in the server response.");
        }
      })
      .catch((error) => console.error("error creating van", error));
  };

  return (
    <>
      <h3>Add new van</h3>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: "flex", gap: "1em" }}>
          <div>
            <select
              value={formData.type}
              id="type"
              name="type"
              onChange={handleInputChange}
            >
              <option value="">Select option</option>
              <option value="simple">simple</option>
              <option value="luxury">luxury</option>
              <option value="rugged">rugged</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="">imageUrl:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">hostId:</label>
          <input
            type="number"
            id="hostId"
            name="hostId"
            value={formData.hostId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default CreateVanForm;
