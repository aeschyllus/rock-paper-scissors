import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render header", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
});

it("should render footer", () => {
  render(<App />);
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});
