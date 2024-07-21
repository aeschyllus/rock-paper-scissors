import BgTriangle from "../assets/bg-triangle.svg";
import IconClose from "../assets/icon-close.svg";
import IconPaper from "../assets/icon-paper.svg";
import IconRock from "../assets/icon-rock.svg";
import IconScissors from "../assets/icon-scissors.svg";
import Logo from "../assets/logo.svg";
import Rules from "../assets/image-rules.svg";

enum SvgKeys {
  BG_TRIANGLE = "BG_TRIANGLE",
  CLOSE = "CLOSE",
  PAPER = "PAPER",
  ROCK = "ROCK",
  SCISSORS = "SCISSORS",
  LOGO = "LOGO",
  RULES = "RULES",
}

export const SVG: { [key in SvgKeys]: string } = {
  [SvgKeys.BG_TRIANGLE]: BgTriangle,
  [SvgKeys.CLOSE]: IconClose,
  [SvgKeys.PAPER]: IconPaper,
  [SvgKeys.ROCK]: IconRock,
  [SvgKeys.SCISSORS]: IconScissors,
  [SvgKeys.LOGO]: Logo,
  [SvgKeys.RULES]: Rules,
};
