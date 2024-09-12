import { fireEvent, render, screen } from "@testing-library/react";
import RpsButton from "./RpsButton";

const mockOnClick = jest.fn();

it("should render", () => {
  render(<RpsButton type="ROCK" onClick={mockOnClick} />);
  const btn = screen.getByRole("button", { name: "rps-button" });
  expect(btn).toBeInTheDocument();
});

it("should be clickable", () => {
  render(<RpsButton type="ROCK" onClick={mockOnClick} />);
  const btn = screen.getByRole("button", { name: "rps-button" });

  fireEvent.click(btn);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

it("should not be clickable", () => {
  render(<RpsButton type="ROCK" onClick={mockOnClick} disabled />);
  const btn = screen.getByRole("button", { name: "rps-button" });

  fireEvent.click(btn);

  expect(mockOnClick).not.toHaveBeenCalled();
});
