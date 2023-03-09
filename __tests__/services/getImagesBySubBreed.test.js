import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getImagesBySubBreed, getImagesBySubBreedTryCatch } from "../../src/services";
import { imagesBySubBreed } from "../../src/utils/imagesBySubBreed";

vi.mock("axios");

describe("given the getImagesBySubBreed and getImagesBySubBreedTryCatch functions", async () => {
    // .then .catch
    it("should return images by sub-breed", async () => {
        // arrange
        const subBreedImages = imagesBySubBreed;
        axios.get.mockResolvedValue({
            data: imagesBySubBreed,
        })
        // act
        const expected = await getImagesBySubBreed("hound", "afghan");
        // assert
        expect(expected).toEqual(subBreedImages);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.get.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getImagesBySubBreed("hound", "afghan")).rejects.toThrowError("API error");
    });

    it("should throw an error if the parameters are not a string", async () => {
        vi.clearAllMocks();
        // arrange
        const numParam = 13;
        const arrayParam = [];
        const booleanParam = false;
        const objectParam = {};
        const undefinedParam = undefined;
        const nullParam = null;

        // act and assert
        await expect(() => getImagesBySubBreed(numParam, numParam)).rejects.toThrowError(
            "invalid param!"
        );

        await expect(() =>
            getImagesBySubBreed(arrayParam, arrayParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreed(booleanParam, booleanParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreed(objectParam, objectParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreed(undefinedParam, undefinedParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreed(nullParam, nullParam)
        ).rejects.toThrowError("invalid param!");

        axios.get.mockResolvedValue({
            data: imagesBySubBreed,
        });

        const expected = await getImagesBySubBreed("hound", "afghan");

        expect(expected).toEqual(imagesBySubBreed);
    });

    // .try .catch
    it("should return images by sub-breed", async () => {
        // arrange
        const subBreedImages = imagesBySubBreed;
        axios.mockResolvedValue({
            data: imagesBySubBreed,
        })
        // act
        const expected = await getImagesBySubBreedTryCatch("hound", "afghan");
        // assert
        expect(expected).toEqual(subBreedImages);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getImagesBySubBreedTryCatch("hound", "afghan")).rejects.toThrowError("API error");
    });

    it("should throw an error if the parameters are not a string", async () => {
        vi.clearAllMocks();
        // arrange
        const numParam = 13;
        const arrayParam = [];
        const booleanParam = false;
        const objectParam = {};
        const undefinedParam = undefined;
        const nullParam = null;

        // act and assert
        await expect(() => getImagesBySubBreedTryCatch(numParam, numParam)).rejects.toThrowError(
            "invalid param!"
        );

        await expect(() =>
            getImagesBySubBreedTryCatch(arrayParam, arrayParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreedTryCatch(booleanParam, booleanParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreedTryCatch(objectParam, objectParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreedTryCatch(undefinedParam, undefinedParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesBySubBreedTryCatch(nullParam, nullParam)
        ).rejects.toThrowError("invalid param!");

        axios.mockResolvedValue({
            data: imagesBySubBreed,
        });

        const expected = await getImagesBySubBreedTryCatch("hound", "afghan");

        expect(expected).toEqual(imagesBySubBreed);
    });
});
