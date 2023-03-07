import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { SelectComponent } from "../../../../src/ui/components/SelectComponent/SelectComponent";

const options = [
  { value: "Hound", label: "Hound" },
  { value: "Beagle", label: "Beagle" },
  { value: "Akita", label: "Akita" },
  { value: "Bulldog", label: "Bulldog" },
];

describe("given the <SelectComponent />", () => {
  it("should render", () => {
    render(<SelectComponent breedsOptions={[]} />);
    screen.debug();
    // const selectBreed = screen.queryByTestId("select-breed");
  });
});
