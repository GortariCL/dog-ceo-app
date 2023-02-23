import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import {
  getAllBreeds,
  getAllBreedsTryCatch,
  getImagesByBreed,
  getImagesByBreedTryCatch,
  getSubBreedList,
} from "../../src/services/axios";
import { allBreeds } from "../../src/utils/allBreeds";
import { beagleImages } from "../../src/utils/beagleImages";
import { imagesByBreed } from "../../src/utils/imagesByBreed";
import { subBreedList } from "../../src/utils/subBreedList";

vi.mock("axios");

describe("given the getAllBreeds, getImagesByBreed, getSubBreed functions", async () => {
  it.skip("should return all breeds data", async () => {
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

  it("should return images by breed", async () => {
    // arrange
    const breedImages = imagesByBreed;
    axios.get.mockResolvedValue({
      data: imagesByBreed,
    });
    // act
    const expected = await getImagesByBreed();
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
    axios.get.mockImplementation(() => Promise.reject());
    // act andassert
    await expect(() => getAllBreeds()).rejects.toThrowError("API error");
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
});
