import axios from "axios";

// getImagesByBreed .then
export const getImagesByBreed = async (breed) => {
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