import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectComponent } from "../../../../src/ui/components/SelectComponent/SelectComponent";

const mockSetBreed = vi.fn();
const breedsOptions = [
  { value: "Hound", label: "Hound" },
  { value: "Beagle", label: "Beagle" },
  { value: "Akita", label: "Akita" },
  { value: "Bulldog", label: "Bulldog" },
];
const subBreedOptions = [
  { value: "Boston", label: "Boston" },
  { value: "English", label: "English" },
  { value: "French", label: "French" },
];

describe("given the <SelectComponent />", () => {
  it("should render with options as an empty array", () => {
    // Arrange
    const { getByText, getByTestId } = render(
      <SelectComponent
        breedsOptions={[]}
        subBreedOptions={[]}
        setBreed={mockSetBreed}
        breed=""
      />
    );
    // Act
    const selectBreed = getByTestId("select-breed-no-info");
    const breedOption1 = getByText("Select a breed");
    const breedOption2 = getByText("No breed info");

    const selectSubBreed = getByTestId("select-sub-breed-no-info");
    const subBreedOption1 = getByText("Select a sub-breed");
    const subBreedOption2 = getByText("No sub-breed info");
    // Assert
    expect(breedOption1).toBeInTheDocument();
    expect(breedOption2).toBeInTheDocument();
    expect(selectBreed).toBeInTheDocument();
    expect(selectBreed).toHaveValue("default");

    expect(subBreedOption1).toBeInTheDocument();
    expect(subBreedOption2).toBeInTheDocument();
    expect(selectSubBreed).toBeInTheDocument();
    expect(selectSubBreed).toHaveValue("default");
  });

  it("should render the breed select options", () => {
    // Arrange
    const { getByText, getByTestId } = render(
      <SelectComponent
        breedsOptions={breedsOptions}
        subBreedOptions={[]}
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
        breedsOptions={breedsOptions}
        subBreedOptions={[]}
        setBreed={mockSetBreed}
        breed=""
      />
    );
    // Act
    const selectBreed = getByTestId("select-breed");
    fireEvent.change(selectBreed, { target: { value: "Beagle" } });
    const breedOptions = getAllByTestId("select-breed-option");
    // Assert
    expect(breedOptions[0].selected).toBeFalsy();
    expect(breedOptions[1].selected).toBeFalsy();
    expect(breedOptions[2].selected).toBeTruthy();
    expect(breedOptions[3].selected).toBeFalsy();
    expect(breedOptions[4].selected).toBeFalsy();
    expect(mockSetBreed).toHaveBeenCalledWith("Beagle");
  });

  it("should render the sub-breed select", () => {
    // Arrange
    const { getByText } = render(
      <SelectComponent
        breedsOptions={breedsOptions}
        subBreedOptions={subBreedOptions}
        setBreed={mockSetBreed}
        breed=""
      />
    );
    // Act
    const subBreedSelect = getByText("Sub-breed:");
    // Assert
    expect(subBreedSelect).toBeInTheDocument();
  });

  it("should simulate the selection of the Bulldog breed and English sub-breed by the user", () => {
    // Arrange
    const { getByTestId, getAllByTestId } = render(
      <SelectComponent
        breedsOptions={breedsOptions}
        subBreedOptions={subBreedOptions}
        setBreed={mockSetBreed}
        breed=""
      />
    );
    // Act
    const selectBreed = getByTestId("select-breed");
    fireEvent.change(selectBreed, { target: { value: "Bulldog" } });
    const breedOptions = getAllByTestId("select-breed-option");

    const selectSubBreed = getByTestId("select-sub-breed");
    fireEvent.change(selectSubBreed, { target: { value: "English" } });
    const subBreedOption = getAllByTestId("select-sub-breed-option");
    // Assert
    expect(breedOptions[0].selected).toBeFalsy();
    expect(breedOptions[1].selected).toBeFalsy();
    expect(breedOptions[2].selected).toBeFalsy();
    expect(breedOptions[3].selected).toBeFalsy();
    expect(breedOptions[4].selected).toBeTruthy();

    expect(subBreedOption[0].selected).toBeFalsy();
    expect(subBreedOption[1].selected).toBeFalsy();
    expect(subBreedOption[2].selected).toBeTruthy();
    expect(subBreedOption[3].selected).toBeFalsy();

    expect(mockSetBreed).toHaveBeenCalledWith("Bulldog");
  });
});
