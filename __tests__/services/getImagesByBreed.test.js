import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import {
    getImagesByBreed,
    getImagesByBreedTryCatch,
} from "../../src/services";
import { beagleImages } from "../../src/utils/beagleImages";
import { imagesByBreed } from "../../src/utils/imagesByBreed";

vi.mock("axios");

describe("given the getImagesByBreed and getImagesByBreedTryCatch functions", async () => {
    it("should return images by breed", async () => {
        // arrange
        const breedImages = imagesByBreed;
        axios.get.mockResolvedValue({
            data: imagesByBreed,
        });
        // act
        const expected = await getImagesByBreed("hound");
        // assert
        expect(expected).toEqual(breedImages);
    });

    it("should return beagle images", async () => {
        // arrange
        const breedImages = beagleImages;
        axios.get.mockResolvedValue({
            data: beagleImages,
        });
        // act
        const expected = await getImagesByBreed("beagle");
        // assert
        expect(expected).toEqual(breedImages);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.get.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getImagesByBreed("beagle")).rejects.toThrowError("API error");
    });

    it("should throw an error if the parameter is not a string", async () => {
        vi.clearAllMocks();
        // arrange
        const numParam = 13;
        const arrayParam = [];
        const booleanParam = false;
        const objectParam = {};
        const undefinedParam = undefined;
        const nullParam = null;

        // act and assert
        await expect(() => getImagesByBreed(numParam)).rejects.toThrowError(
            "invalid param!"
        );

        await expect(() =>
            getImagesByBreed(arrayParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreed(booleanParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreed(objectParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreed(undefinedParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreed(nullParam)
        ).rejects.toThrowError("invalid param!");

        axios.get.mockResolvedValue({
            data: beagleImages,
        });

        const expected = await getImagesByBreed("beagle");

        expect(expected).toEqual(beagleImages);
    });

    it("should return images by breed", async () => {
        // arrange
        const breedImages = imagesByBreed;
        axios.mockResolvedValue({
            data: imagesByBreed,
        });
        // act
        const expected = await getImagesByBreedTryCatch("beagle");
        // assert
        expect(expected).toEqual(breedImages);
    });

    it("should return beagle images", async () => {
        // arrange
        const breedImages = beagleImages;
        axios.mockResolvedValue({
            data: beagleImages,
        });
        // act
        const expected = await getImagesByBreedTryCatch("beagle");
        // assert
        expect(expected).toEqual(breedImages);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getImagesByBreedTryCatch("beagle")).rejects.toThrowError("API error");
    });

    it("should throw an error if the parameter is not a string", async () => {
        vi.clearAllMocks();
        // arrange
        const numParam = 13;
        const arrayParam = [];
        const booleanParam = false;
        const objectParam = {};
        const undefinedParam = undefined;
        const nullParam = null;

        // act and assert
        await expect(() => getImagesByBreedTryCatch(numParam)).rejects.toThrowError(
            "invalid param!"
        );

        await expect(() =>
            getImagesByBreedTryCatch(arrayParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreedTryCatch(booleanParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreedTryCatch(objectParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreedTryCatch(undefinedParam)
        ).rejects.toThrowError("invalid param!");

        await expect(() =>
            getImagesByBreedTryCatch(nullParam)
        ).rejects.toThrowError("invalid param!");

        axios.mockResolvedValue({
            data: beagleImages,
        });

        const expected = await getImagesByBreedTryCatch("beagle");

        expect(expected).toEqual(beagleImages);
    });
});
