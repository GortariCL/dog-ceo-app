import { useEffect, useState } from "react";
import { getAllBreeds } from "./services/axios";

import "./App.css";

function App() {
  const [breeds, setBreeds] = useState();

  useEffect(() => {
    getAllBreeds().then((res) => {
      setBreeds(res.message);
    });
  }, [getAllBreeds]);

  console.log(breeds);

  return (
    <>
      <h1>Dog Ceo App</h1>
    </>
  );
}

export default App;
