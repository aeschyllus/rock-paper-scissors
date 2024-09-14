import { fireEvent, render, screen } from "@testing-library/react";
import Rps from "./Rps";

it("should render", () => {
  render(<Rps setUserPick={jest.fn()} hasUserPicked={false} />);
  expect(screen.getByTestId("rps")).toBeInTheDocument();
  expect(screen.getAllByRole("button").length).toBe(3);
});

it("should be able to pick", () => {
  const mockUserPick = jest.fn();
  render(<Rps setUserPick={mockUserPick} hasUserPicked={false} />);

  fireEvent.click(screen.getByRole("button", { name: "rps-btn-rock" }));
  expect(mockUserPick).toHaveBeenCalledWith("ROCK");
  fireEvent.click(screen.getByRole("button", { name: "rps-btn-paper" }));
  expect(mockUserPick).toHaveBeenCalledWith("PAPER");
  fireEvent.click(screen.getByRole("button", { name: "rps-btn-scissors" }));
  expect(mockUserPick).toHaveBeenCalledWith("SCISSORS");
});

it("should be hidden upon user picking", () => {
  render(<Rps setUserPick={jest.fn()} hasUserPicked />);
  const rps = screen.getByTestId("rps");
  fireEvent.click(screen.getByRole("button", { name: "rps-btn-rock" }));
  expect(rps.classList).toContain("hidden");
});
