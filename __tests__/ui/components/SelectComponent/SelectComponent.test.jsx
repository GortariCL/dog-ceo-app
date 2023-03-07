import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SelectComponent } from "../../../../src/ui/components/SelectComponent/SelectComponent";

const options = [
  { value: "Hound", label: "Hound" },
  { value: "Beagle", label: "Beagle" },
  { value: "Akita", label: "Akita" },
  { value: "Bulldog", label: "Bulldog" },
];

describe("given the <SelectComponent />", () => {
  it("should render with options as an empty array", () => {
    // Arrange
    render(<SelectComponent breedsOptions={[]} />);
    // Act
    const breedOption1 = screen.getByText("Select a breed");
    const breedOption2 = screen.getByText("No hay razas para mostrar");
    // Assert
    expect(breedOption1).toBeInTheDocument();
    expect(breedOption2).toBeInTheDocument();
  });

  it("should render with selectable options", () => {
    // Arrange
    render(<SelectComponent breedsOptions={options} />);
    // Act
    const breedOption1 = screen.getByText("Hound");
    const breedOption2 = screen.getByText("Beagle");
    const breedOption3 = screen.getByText("Akita");
    const breedOption4 = screen.getByText("Bulldog");
    // Assert
    expect(breedOption1).toBeDefined();
    expect(breedOption2).toBeDefined();
    expect(breedOption3).toBeDefined();
    expect(breedOption4).toBeDefined();
  });

  it("", () => {
    // Arrange
    const { getByTestId, getAllByTestId } = render(
      <SelectComponent breedsOptions={options} />
    );
    // Act
    const selectBreed = getByTestId("select-breed");
    fireEvent.change(selectBreed, { target: { value: "Beagle" } });
    const breedsOptions = getAllByTestId("select-option");
    // Assert
    expect(breedsOptions[0].selected).toBeFalsy();
    expect(breedsOptions[1].selected).toBeFalsy();
    expect(breedsOptions[2].selected).toBeTruthy();
    expect(breedsOptions[3].selected).toBeFalsy();
    expect(breedsOptions[4].selected).toBeFalsy();
  });
});
