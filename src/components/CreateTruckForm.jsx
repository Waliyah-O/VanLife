import { useState } from "react";
import axios from "axios";

const CreateTruckForm = () => {
  const [formData, setFormData] = useState({
    // id: new Date().getTime(),
    name: "",
    price: 0,
    description: "",
    type: "",
    imageUrl: "",
    hostId: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/trucks", formData)
      .then((response) => {
        // console.log("new truck created", response.data);
        alert(`Status: truck ${response.statusText}` )
        //clear form daa
        setFormData({
          // id: 0,
          name: "",
          price: 0,
          description: "",
          type: "",
          imageUrl: "",
          hostId: 0,
        });
      })
      .catch((error) => console.error("error creating van", error));
  };
  return (
    <>
      <h3>Add new truck</h3>
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
              <option value="light">Light Duty</option>
              <option value="medium">luxury Duty</option>
              <option value="heavy">rugged Duty</option>
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

export default CreateTruckForm;
