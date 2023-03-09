import { render } from "@testing-library/react";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import App from "../src/App";
import { getAllBreeds } from "../src/services";
import { allBreeds } from "../src/utils/allBreeds";
import { imagesByBreed } from "../src/utils/imagesByBreed";
import { subBreedList } from "../src/utils/subBreedList";

vi.mock("axios");

describe("given the <App />", () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: allBreeds,
    }).mockResolvedValueOnce({
      data: imagesByBreed,
    }).mockResolvedValueOnce({
      data: subBreedList,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should set breeds options when API calls succeeds", async () => {
    render(<App />);
  });
});
