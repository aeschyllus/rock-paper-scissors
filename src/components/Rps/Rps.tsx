import classNames from "classnames";
import { RpsButton } from "..";
import { SVG } from "../../constants/images";
import "./Rps.scss";

type RpsProps = {
  setUserPick: (pick: string) => void;
  hasUserPicked: boolean;
};

export default function Rps({ hasUserPicked, setUserPick }: RpsProps) {
  return (
    <section
      className={classNames("rps", { hidden: hasUserPicked })}
      data-testid="rps"
    >
      <img
        className="rps__triangle"
        src={SVG.BG_TRIANGLE}
        alt="background triangle"
      />
      <RpsButton
        className="rps__button rps__button--rock"
        type="ROCK"
        onClick={() => setUserPick("ROCK")}
        ariaLabel="rps-btn-rock"
      />
      <RpsButton
        className="rps__button rps__button--paper"
        type="PAPER"
        onClick={() => setUserPick("PAPER")}
        ariaLabel="rps-btn-paper"
      />
      <RpsButton
        className="rps__button rps__button--scissors"
        type="SCISSORS"
        onClick={() => setUserPick("SCISSORS")}
        ariaLabel="rps-btn-scissors"
      />
    </section>
  );
}
