import classNames from "classnames";
import { SVG } from "../../constants/images";
import "./RulesModal.scss";

type RulesModalProps = {
  show: boolean;
  onClose: () => void;
};

export default function RulesModal({ show, onClose }: RulesModalProps) {
  return (
    <div
      className={classNames("modal-container", { hidden: !show })}
      data-testid="rules-modal"
    >
      <div className="modal">
        <div className="modal__header">
          <p className="modal__header__title">rules</p>
          <button
            className="modal__header__close"
            onClick={onClose}
            aria-label="close-modal-btn"
          >
            <img src={SVG.CLOSE} alt="close button" />
          </button>
        </div>
        <img src={SVG.RULES} alt="rules" className="modal__rules-image" />
        <button
          onClick={onClose}
          aria-label="close-modal-btn-mobile"
          className="modal__close"
        >
          <img src={SVG.CLOSE} alt="close button" />
        </button>
      </div>
    </div>
  );
}
