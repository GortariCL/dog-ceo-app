export const getAllBreeds = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const result = response.json();
    return result;
  } catch (error) {
    throw new Error("error");
  }
};
