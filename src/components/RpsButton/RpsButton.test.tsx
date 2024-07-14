import { fireEvent, render } from "@testing-library/react";
import RpsButton from "./RpsButton";

const mockOnClick = jest.fn();

it("should render", () => {
  const { getByRole } = render(<RpsButton type="ROCK" onClick={mockOnClick} />);
  const btn = getByRole("button", { name: "rps-button" });
  expect(btn).toBeDefined();
});

it("should be clickable", () => {
  const { getByRole } = render(<RpsButton type="ROCK" onClick={mockOnClick} />);
  const btn = getByRole("button", { name: "rps-button" });

  fireEvent.click(btn);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

it("should not be clickable", () => {
  const { getByRole } = render(
    <RpsButton type="ROCK" onClick={mockOnClick} disabled />
  );
  const btn = getByRole("button", { name: "rps-button" });

  fireEvent.click(btn);

  expect(mockOnClick).not.toHaveBeenCalled();
});
