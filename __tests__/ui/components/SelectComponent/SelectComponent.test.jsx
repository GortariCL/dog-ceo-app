import { fireEvent, getByTestId, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectComponent } from "../../../../src/ui/components/SelectComponent/SelectComponent";

const mockSetBreed = vi.fn();
const breedOptions = [
  { value: "Hound", label: "Hound" },
  { value: "Beagle", label: "Beagle" },
  { value: "Akita", label: "Akita" },
  { value: "Bulldog", label: "Bulldog" },
];
const subBreedOptions = [];

describe("given the <SelectComponent />", () => {
  it("should render with options as an empty array", () => {
    // Arrange
    const { getByText, getByTestId } = render(
      <SelectComponent
        breedsOptions={[]}
        subBreedOptions={subBreedOptions}
        setBreed={mockSetBreed}
        breed=""
      />
    );
    // Act
    const selectBreed = getByTestId("select-breed-no-info");
    const breedOption1 = getByText("Select a breed");
    const breedOption2 = getByText("No hay razas para mostrar");
    // Assert
    expect(breedOption1).toBeInTheDocument();
    expect(breedOption2).toBeInTheDocument();
    expect(selectBreed).toBeInTheDocument();
    expect(selectBreed).toHaveValue("default");
  });

  it("should render the breed select options", () => {
    // Arrange
    const { getByText, getByTestId } = render(
      <SelectComponent
        breedsOptions={breedOptions}
        subBreedOptions={subBreedOptions}
        setBreed={mockSetBreed}
        breed=""
      />
    );
    // Act
    const selectBreed = getByTestId("select-breed");
    const breedOption1 = getByText("Hound");
    const breedOption2 = getByText("Beagle");
    const breedOption3 = getByText("Akita");
    const breedOption4 = getByText("Bulldog");
    // Assert
    expect(selectBreed).toBeInTheDocument();
    expect(breedOption1).toBeInTheDocument();
    expect(breedOption2).toBeInTheDocument();
    expect(breedOption3).toBeInTheDocument();
    expect(breedOption4).toBeInTheDocument();
  });

  it("should simulate the selection of the Beagle breed by the user", () => {
    // Arrange
    const { getByTestId, getAllByTestId } = render(
      <SelectComponent
        breedsOptions={breedOptions}
        subBreedOptions={subBreedOptions}
        setBreed={mockSetBreed}
        breed=""
      />
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
    expect(mockSetBreed).toHaveBeenCalledWith("Beagle");
  });
});
