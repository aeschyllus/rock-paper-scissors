import { fireEvent, render } from "@testing-library/react";
import RulesModal from "./RulesModal";

const mockClose = jest.fn();

it("should render correctly", () => {
  const { getByAltText, getByRole } = render(
    <RulesModal onClose={mockClose} show />
  );
  expect(getByAltText("rules")).toBeInTheDocument();
  expect(
    getByRole("button", { name: "close-modal-btn-mobile" })
  ).toBeInTheDocument();
});

it("should close", () => {
  const { getByRole } = render(<RulesModal onClose={mockClose} show />);
  fireEvent.click(getByRole("button", { name: "close-modal-btn-mobile" }));
  expect(mockClose).toHaveBeenCalledTimes(1);
});
