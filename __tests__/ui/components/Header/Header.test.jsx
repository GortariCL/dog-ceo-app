import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "../../../../src/ui/components/Header/Header";

const mockSetBreed = vi.fn();
describe("given the header component", () => {
  it("should render", () => {
    render(
      <Header
        breedsOptions={[]}
        subBreedOptions={[]}
        setBreed={mockSetBreed}
        breed=""
      />
    );
  });
});
