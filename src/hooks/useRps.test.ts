import { act, renderHook } from "@testing-library/react";
import { useRps } from "./useRps";

it("should render initial values", () => {
  const { result } = renderHook(useRps);
  expect(result.current.score).toBe(0);
  expect(result.current.userPick).toBe("");
});

it("should randomly generate a house pick", () => {
  const { result } = renderHook(useRps);
  const housePick = result.current.getHousePick();
  expect(housePick).toMatch(/ROCK|SCISSORS|PAPER/);
});

describe("getResult", () => {
  test("tie", () => {
    const { result } = renderHook(useRps);
    const { getResult } = result.current;
    let output1, output2, output3;

    act(() => {
      output1 = getResult("ROCK", "ROCK");
      output2 = getResult("PAPER", "PAPER");
      output3 = getResult("SCISSORS", "SCISSORS");
    });

    expect(output1).toBe(2);
    expect(output2).toBe(2);
    expect(output3).toBe(2);
  });

  test("something went wrong", () => {
    const { result } = renderHook(useRps);
    const { getResult } = result.current;
    let output;

    act(() => {
      output = getResult("test", "test");
    });

    expect(output).toBe(-1);
  });

  describe("rock", () => {
    it("should beat scissors", async () => {
      const { result } = renderHook(useRps);
      const { getResult } = result.current;
      let output;

      act(() => {
        output = getResult("ROCK", "SCISSORS");
      });

      expect(output).toBe(1);
    });

    it("should lose to paper", () => {
      const { result } = renderHook(useRps);
      const { getResult } = result.current;
      let output;

      act(() => {
        output = getResult("ROCK", "PAPER");
      });

      expect(output).toBe(0);
    });
  });

  describe("paper", () => {
    it("should beat rock", () => {
      const { result } = renderHook(useRps);
      const { getResult } = result.current;
      let output;

      act(() => {
        output = getResult("PAPER", "ROCK");
      });

      expect(output).toBe(1);
    });

    it("should lose to scissors", () => {
      const { result } = renderHook(useRps);
      const { getResult } = result.current;
      let output;

      act(() => {
        output = getResult("PAPER", "SCISSORS");
      });

      expect(output).toBe(0);
    });
  });

  describe("scissors", () => {
    it("should beat paper", () => {
      const { result } = renderHook(useRps);
      const { getResult } = result.current;
      let output;

      act(() => {
        output = getResult("SCISSORS", "PAPER");
      });

      expect(output).toBe(1);
    });

    it("should lose to rock", () => {
      const { result } = renderHook(useRps);
      const { getResult } = result.current;
      let output;

      act(() => {
        output = getResult("SCISSORS", "ROCK");
      });

      expect(output).toBe(0);
    });
  });
});
