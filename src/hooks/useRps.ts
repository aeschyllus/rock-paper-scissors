import { useState } from "react";

const RPS = ["ROCK", "PAPER", "SCISSORS"];

export function useRps() {
  const [score, setScore] = useState(0);
  const [userPick, setUserPick] = useState("");

  /**
   * @return "ROCK" | "PAPER" | "SCISSORS"
   */
  const getHousePick = () => {
    const index = Math.floor(Math.random() * 3);
    return RPS[index];
  };

  /**
   * Get the result of the epic battle between the user and the house!
   *
   * @param user The user's awesome pick
   * @param house The house's equally awesome pick
   * @return
   *   -1 = something went wrong
   *    0 = lose
   *    1 = win (hell yeah)
   *    2 = tie
   */
  const getResult = (user: string, house: string) => {
    if (user === house && RPS.includes(user) && RPS.includes(house)) {
      return 2; // tie
    }

    if (user === "ROCK") {
      if (house === "PAPER") {
        setScore((prev) => prev - 1);
        return 0;
      } else {
        setScore((prev) => prev + 1);
        return 1;
      }
    } else if (user === "PAPER") {
      if (house === "SCISSORS") {
        setScore((prev) => prev - 1);
        return 0;
      } else {
        setScore((prev) => prev + 1);
        return 1;
      }
    } else if (user === "SCISSORS") {
      if (house === "ROCK") {
        setScore((prev) => prev - 1);
        return 0;
      } else {
        setScore((prev) => prev + 1);
        return 1;
      }
    }

    return -1;
  };

  return { score, userPick, getHousePick, getResult, setUserPick };
}
