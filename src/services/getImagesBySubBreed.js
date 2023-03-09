import axios from "axios";

// getImagesByBreed .then
export const getImagesBySubBreed = async (breed, subbreed) => {
    if (typeof breed !== "string" && typeof subbreed !== "string") {
        throw new Error("invalid param!");
    }
    const result = await axios
        .get(`https://dog.ceo/api/breed/${breed}/${subbreed}/images`)
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
export const getImagesBySubBreedTryCatch = async (breed, subbreed) => {
    if (typeof breed !== "string" && typeof subbreed !== "string") {
        throw new Error("invalid param!");
    }
    try {
        const response = await axios(`https://dog.ceo/api/breed/${breed}/${subbreed}/images`);
        const result = response.data;
        return result;
    } catch (err) {
        throw new Error("API error");
    }
};