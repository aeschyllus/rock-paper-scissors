import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";

it("should render", () => {
  render(<Footer />);
  const rulesModal = screen.getByTestId("rules-modal");
  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(rulesModal.classList.contains("hidden")).toBe(true);
});

it("should open rules modal", () => {
  render(<Footer />);
  const btn = screen.getByRole("button", { name: "open-modal-btn" });
  const rulesModal = screen.getByTestId("rules-modal");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(rulesModal.classList.contains("hidden")).toBe(false);
});

it("should close rules modal", () => {
  render(<Footer />);
  const openBtn = screen.getByRole("button", { name: "open-modal-btn" });
  const closeBtn = screen.getByRole("button", { name: "close-modal-btn" });
  const rulesModal = screen.getByTestId("rules-modal");
  expect(openBtn).toBeInTheDocument();
  expect(closeBtn).toBeInTheDocument();

  fireEvent.click(openBtn);
  expect(rulesModal.classList.contains("hidden")).toBe(false);

  fireEvent.click(closeBtn);
  expect(rulesModal.classList.contains("hidden")).toBe(true);
});
