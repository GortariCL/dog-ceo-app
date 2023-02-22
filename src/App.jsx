import { useEffect, useState } from "react";
import { getAllBreeds, getImagesByBreed } from "./services/axios";
import { Card } from "./ui/components/Card/Card";
import { Header } from "./ui/components/Header/Header";

function App() {
  const [breed, setBreed] = useState();
  const [breedImages, setBreedImages] = useState([]);
  const [breedsOptions, setBreedsOptions] = useState([]);
  const [subBreedOptions, setSubBreedOptions] = useState([]);

  useEffect(() => {
    getAllBreeds().then((res) => {
      setBreedsOptions(
        Object.keys(res.message).map((breed) => {
          return { label: breed, value: breed };
        })
      );

      for (let arrBreed of Object.entries(res.message)) {
        if (arrBreed[0] === breed) {
          setSubBreedOptions(
            arrBreed[1].map((subBreed) => {
              return { label: subBreed, value: subBreed };
            })
          );
        }
      }
    });

    getImagesByBreed(breed).then((res) => {
      setBreedImages(res.message);
    });
  }, [getAllBreeds, getImagesByBreed, breed]);

  return (
    <>
      <Header
        breedsOptions={breedsOptions}
        subBreedOptions={subBreedOptions}
        setBreed={setBreed}
      />
      <Card breedImages={breedImages} />
    </>
  );
}

export default App;
