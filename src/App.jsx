import { useEffect, useState } from "react";
import { getAllBreeds, getImagesByBreed, getSubBreedList } from "./services";
import { Card } from "./ui/components/Card/Card";
import { Header } from "./ui/components/Header/Header";

function App() {
  const [breed, setBreed] = useState("");
  const [breedImages, setBreedImages] = useState([]);
  const [breedsOptions, setBreedsOptions] = useState([]);
  const [subBreedOptions, setSubBreedOptions] = useState([]);

  useEffect(() => {
    getAllBreeds().then((res) => {
      console.log("allBreeds => ", res);
      setBreedsOptions(
        Object.keys(res.message).map((breed) => {
          return { label: breed, value: breed };
        })
      );

      // for (let arrBreed of Object.entries(res.message)) {
      //   if (arrBreed[0] === breed) {
      //     setSubBreedOptions(
      //       arrBreed[1].map((subBreed) => {
      //         return { label: subBreed, value: subBreed };
      //       })
      //     );
      //   }
      // }
    });

    getImagesByBreed(breed).then((res) => {
      console.log("getImagesByBreed => ", res);
      setBreedImages(res.message);
    });

    getSubBreedList(breed).then((res) => {
      console.log("subBreedList => ", res);
      setSubBreedOptions(
        res.message.map((subBreed) => {
          return { label: subBreed, value: subBreed };
        })
      );
    });
  }, [getAllBreeds, getImagesByBreed, getSubBreedList, breed]);

  return (
    <>
      <Header
        breedsOptions={breedsOptions}
        subBreedOptions={subBreedOptions}
        setBreed={setBreed}
        breed={breed}
        data-testid="header"
      />
      <Card breedImages={breedImages} data-testid="card" />
    </>
  );
}

export default App;
