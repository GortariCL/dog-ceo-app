import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getAllBreeds } from "../../src/services/axios";
import { allBreeds } from "../../src/utils/allBreeds";

vi.mock("axios");

describe("given the getAllBreeds function", async () => {
  it("should return breeds data", async () => {
    // arrange
    const breeds = allBreeds;
    axios.mockResolvedValue({
      data: allBreeds,
    });

    // console.log(breeds);

    // act
    const expected = await getAllBreeds();

    // assert
    expect(expected).toEqual(breeds);
  });
});
