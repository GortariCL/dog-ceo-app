import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Card } from "../../../../src/ui/components/Card/Card";

const imagesByBreed = [
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg",
];

describe("given the <Card /> component", () => {
  it("should render with images as empty array", () => {
    // Arrange
    const { getByTestId, getByText } = render(<Card breedImages={[]} />);
    // Act
    const breedImagesList = getByTestId("breed-images-list");
    const messageImages = getByText("Select a breed");
    // Assert
    expect(breedImagesList).toBeInTheDocument();
    expect(messageImages).toBeInTheDocument();
  });

  it("should render with images array", () => {
    // Arrange
    const { getByTestId, getAllByTestId } = render(<Card breedImages={imagesByBreed} />);
    // Act
    const breedImagesList = getByTestId("breed-images-list");
    const imagesList = getAllByTestId("breed-image");
    // Assert
    expect(breedImagesList).toBeInTheDocument();
    expect(imagesList).toBeDefined();
  });
});
