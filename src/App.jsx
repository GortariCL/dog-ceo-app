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

    getImagesByBreed().then((res) => {
      setBreedImages(res.message);
    });
  }, [getAllBreedsTryCatch, getImagesByBreed]);

  return (
    <>
      <h1>Dog Ceo App</h1>
    </>
  );
}

export default App;
