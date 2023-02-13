import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App";

describe("given the <App />", () => {
  it("should render the App component", () => {
    render(<App />);
  });
});
