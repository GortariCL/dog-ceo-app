import axios from "axios";

export const getAllBreeds = async () => {
  const result = await axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch((error) => {
      throw new Error("API error");
    });
  return result;
};

export const getAllBreedsTryCatch = async () => {
  try {
    const response = await axios("https://dog.ceo/api/breeds/list/all");
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error("API error");
  }
};

export const getImagesByBreed = async (breed = "hound") => {
  const result = await axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch((error) => {
      throw new Error("API error");
    });
  return result;
};

export const getImagesByBreedTryCatch = async (breed) => {
  if (typeof breed !== "string") {
    throw new Error("invalid param!");
  }
  try {
    const response = await axios(`https://dog.ceo/api/breed/${breed}/images`);
    const result = response.data;
    return result;
  } catch (err) {
    throw new Error("API error");
  }
};
