import { fireEvent, render, screen } from "@testing-library/react";
import Rps from "./Rps";

it("should render", () => {
  render(<Rps setUserPick={jest.fn()} />);
  expect(screen.getByTestId("rps")).toBeInTheDocument();
  expect(screen.getAllByRole("button").length).toBe(3);
});

it("should be able to pick", () => {
  const mockUserPick = jest.fn();
  render(<Rps setUserPick={mockUserPick} />);

  fireEvent.click(screen.getByRole("button", { name: "rps-btn-rock" }));
  expect(mockUserPick).toHaveBeenCalledWith("ROCK");
  fireEvent.click(screen.getByRole("button", { name: "rps-btn-paper" }));
  expect(mockUserPick).toHaveBeenCalledWith("PAPER");
  fireEvent.click(screen.getByRole("button", { name: "rps-btn-scissors" }));
  expect(mockUserPick).toHaveBeenCalledWith("SCISSORS");
});
