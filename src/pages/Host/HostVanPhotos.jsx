import { useOutletContext, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

const HostVanPhotos = () => {
  const [searchparams, setSearchParams] = useSearchParams();

  console.log(searchparams.toString());

  const charEls = swCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  const { currentVan } = useOutletContext();

  return (
    <div>
      <img
        className="host-van-detail-image"
        src={currentVan.imageUrl}
        alt={`Photo of ${currentVan.name}`}
      />

      <div>{charEls}</div>
    </div>
  );
};

export default HostVanPhotos;
