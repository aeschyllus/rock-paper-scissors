import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("should render", () => {
  render(<Header score={69} />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByText("69")).toBeInTheDocument();
});
