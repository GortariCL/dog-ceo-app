import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import {
    getSubBreedList,
    getSubBreedListTryCatch,
} from "../../src/services";
import { subBreedList } from "../../src/utils/subBreedList";

vi.mock("axios");

describe("given the getSubBreed and getSubBreedTryCatch functions", async () => {
    it("should return sub-breed list", async () => {
        // arrange
        const list = subBreedList;
        axios.get.mockResolvedValue({
            data: subBreedList,
        });
        // act
        const expected = await getSubBreedList("bulldog");
        // assert
        expect(expected).toEqual(list);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.get.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getSubBreedList("bulldog")).rejects.toThrowError("API error");
    });

    it("should return sub-breed list with try/catch", async () => {
        // arrange
        const list = subBreedList;
        axios.mockResolvedValue({
            data: subBreedList,
        });
        // act
        const expected = await getSubBreedListTryCatch("bulldog");
        // assert
        expect(expected).toEqual(list);
    });

    it("should throw an error if API is down", async () => {
        // arrange
        axios.mockImplementation(() => Promise.reject());
        // act andassert
        await expect(() => getSubBreedListTryCatch("bulldog")).rejects.toThrowError("API error");
    });
});
