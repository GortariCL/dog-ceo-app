import { useEffect, useState } from "react";
import { getAllBreedsTryCatch, getImagesByBreed } from "./services/axios";

import "./App.css";

function App() {
  const [breeds, setBreeds] = useState({});
  const [breedImages, setBreedImages] = useState();

  useEffect(() => {
    getAllBreedsTryCatch().then((res) => {
      setBreeds(res.message);
    });

    getImagesByBreed("beagle").then((res) => {
      setBreedImages(res.message);
    });
  }, [getAllBreedsTryCatch, getImagesByBreed]);

  return (
    <>
      <h1>Dog Ceo App</h1>
      {
        <div>
          {breedImages &&
            breedImages.map((element, index) => {
              return (
                <img
                  key={index}
                  className="dog__image"
                  src={element}
                  alt="perros"
                />
              );
            })}
        </div>
      }
    </>
  );
}

export default App;
