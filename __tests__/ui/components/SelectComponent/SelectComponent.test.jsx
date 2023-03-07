import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
    const { getByText } = render(<SelectComponent breedsOptions={[]} />);
    // Act
    const breedOption1 = getByText("Select a breed");
    const breedOption2 = getByText("No hay razas para mostrar");
    // Assert
    expect(breedOption1).toBeInTheDocument();
    expect(breedOption2).toBeInTheDocument();
  });

  it("should render with selectable options", () => {
    // Arrange
    const { getByText } = render(<SelectComponent breedsOptions={options} />);
    // Act
    const breedOption1 = getByText("Hound");
    const breedOption2 = getByText("Beagle");
    const breedOption3 = getByText("Akita");
    const breedOption4 = getByText("Bulldog");
    // Assert
    expect(breedOption1).toBeInTheDocument();
    expect(breedOption2).toBeInTheDocument();
    expect(breedOption3).toBeInTheDocument();
    expect(breedOption4).toBeInTheDocument();
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
