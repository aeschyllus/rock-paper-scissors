import { fireEvent, render, screen } from "@testing-library/react";
import RulesModal from "./RulesModal";

const mockClose = jest.fn();

it("should render correctly", () => {
  render(<RulesModal onClose={mockClose} show />);
  expect(screen.getByAltText("rules")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "close-modal-btn-mobile" })
  ).toBeInTheDocument();
});

it("should close", () => {
  render(<RulesModal onClose={mockClose} show />);
  fireEvent.click(
    screen.getByRole("button", { name: "close-modal-btn-mobile" })
  );
  expect(mockClose).toHaveBeenCalledTimes(1);
});
