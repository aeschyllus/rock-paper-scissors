import { useState } from "react";
import { RulesModal } from "..";
import "./Footer.scss";

export default function Footer() {
  const [showRules, setShowRules] = useState(false);

  const handleOpenRules = () => setShowRules(true);
  const handleCloseRules = () => setShowRules(false);

  return (
    <footer className="footer" data-testid="footer">
      <button
        className="footer__rules"
        onClick={handleOpenRules}
        aria-label="open-modal-btn"
      >
        rules
      </button>
      <RulesModal show={showRules} onClose={handleCloseRules} />
    </footer>
  );
}
