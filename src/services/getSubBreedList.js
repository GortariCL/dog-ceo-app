import axios from "axios";

// getSubBreed .then
export const getSubBreedList = async (breed) => {
  const result = await axios
    .get(`https://dog.ceo/api/breed/${breed}/list`)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch((error) => {
      throw new Error("API error");
    });
  return result;
};

// getSubBreedList .try .catch
export const getSubBreedListTryCatch = async (breed) => {
  try {
    const response = await axios(`https://dog.ceo/api/breed/${breed}/list`);
    const result = response.data;
    return result;
  } catch (err) {
    throw new Error("API error");
  }
};
