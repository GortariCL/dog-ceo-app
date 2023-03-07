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