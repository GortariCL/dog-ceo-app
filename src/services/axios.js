import axios from "axios";

export const getAllBreeds = async () => {
  const result = await axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch((error) => {
      throw new Error("API error: ", error);
    });

  return result;
};
