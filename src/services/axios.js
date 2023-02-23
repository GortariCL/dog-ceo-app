import axios from "axios";
// getAllBreeds .then
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
// getAllBreeds .try .catch
export const getAllBreedsTryCatch = async () => {
  try {
    const response = await axios("https://dog.ceo/api/breeds/list/all");
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error("API error");
  }
};
// getImagesByBreed .then
export const getImagesByBreed = async (breed = "beagle") => {
  if (typeof breed !== "string") {
    throw new Error("invalid param!");
  }
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
// getImagesByBreed .try .catch
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

export const getSubBreedListTryCatch = async (breed) => {
  if (typeof breed !== "string") {
    throw new Error("invalid param!");
  }
  try {
    const response = await axios(`https://dog.ceo/api/breed/${breed}/list`);
    const result = response.data;
    return result;
  } catch (err) {
    throw new Error("API error");
  }
};
