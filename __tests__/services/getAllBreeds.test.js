import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import {
    getAllBreeds,
    getAllBreedsTryCatch,
} from "../../src/services";
import { allBreeds } from "../../src/utils/allBreeds";

vi.mock("axios");

describe("given the getAllBreeds and getAllBreedsTryCatch functions", async () => {
    it("should return all breeds data", async () => {
        // arrange
        const breeds = allBreeds;
        axios.get.mockResolvedValue({
            data: allBreeds,
        });
        // act
        const expected = await getAllBreeds();
        // assert
        expect(expected).toEqual(breeds);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.get.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getAllBreeds()).rejects.toThrowError("API error");
    });

    it("should return all breeds data with try/catch", async () => {
        // arrange
        const breeds = allBreeds;
        axios.mockResolvedValue({
            data: allBreeds,
        });
        // act
        const expected = await getAllBreedsTryCatch();
        // assert
        expect(expected).toEqual(breeds);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getAllBreedsTryCatch()).rejects.toThrowError("API error");
    });
});
