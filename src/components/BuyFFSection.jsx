import { useState } from "react";
import { CONTRACT_ADDRESS, TOKEN_TICKER } from "../constants.js";

const BuyFFSection = () => {
  const [toastMessage, setToastMessage] = useState("");

  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setToastMessage("Contract copied");
    } catch (err) {
      setToastMessage("Clipboard blocked — press Ctrl+C");
    }
    setTimeout(() => setToastMessage(""), 1800);
  };

  return (
    <section id="buy" className="section section-buy reveal">
      <div className="section-header">
        <p className="section-kicker">Buy {TOKEN_TICKER}</p>
        <h2>Three steps to join the Fox den</h2>
        <p className="section-subtitle">
          Always double-check the Fox Coin contract address and only use funds you can afford to risk.
        </p>
      </div>

      <div className="grid grid-3">
        <div className="card card-highlight">
          <span className="step-label">Step 1</span>
          <h3>Buy SOL in Phantom</h3>
          <p>
            Download the Phantom wallet, create a new wallet, and purchase SOL directly in-app
            or transfer from your exchange.
          </p>
        </div>

        <div className="card">
          <div className="step-label">Step 2</div>
          <h3>Paste the {TOKEN_TICKER} contract</h3>
          <p>
            Go to your chosen DEX aggregator, paste the official {TOKEN_TICKER} contract address,
            and double-check that the token name and logo match Fox Coin.
          </p>

          <div
            className="contract-pill"
            onClick={handleCopyCA}
            style={{ cursor: "pointer", userSelect: "none" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleCopyCA()}
          >
            Copy CA
          </div>
        </div>

        <div className="card card-highlight">
          <span className="step-label">Step 3</span>
          <h3>Hold your Fox Coin</h3>
          <p>
            Confirm the swap, store your seed phrase offline, and plug into the community.
            Hold {TOKEN_TICKER}, learn, build, and have fun with the pack.
          </p>
        </div>
      </div>

      {toastMessage && (
        <div className="toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default BuyFFSection;
