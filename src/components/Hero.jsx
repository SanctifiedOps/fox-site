import { BUY_LINK, CONTRACT_ADDRESS, TOKEN_NAME, TOKEN_TICKER, X_COMMUNITY_LINK } from "../constants.js";
const heroImage = "/fox-logo.png";

const Hero = () => {
  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    } catch (err) {
      // no-op if clipboard blocked
    }
  };

  return (
    <section className="hero reveal">
      <div className="hero-content">
        <h1>
          <span className="hero-title-highlight">{TOKEN_NAME}</span> On Solana
        </h1>
        <p className="hero-subtitle">
          Fox Coin ({TOKEN_TICKER}) is a Solana-native meme token built around Pochita and the culture
          that formed naturally around her. Community-owned, fast-moving, and rooted in shared history,
          {TOKEN_TICKER} is for those who understand that the strongest projects move as a pack.
        </p>

        <div className="hero-actions">
          <a href={BUY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Buy {TOKEN_TICKER}
          </a>

          <button type="button" className="btn btn-secondary" onClick={handleCopyCA}>
            Copy CA
          </button>

          <a href={X_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            X Community
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-logo-wrapper">
          <div className="hero-logo-ring">
            <img src={heroImage} alt="Fox Coin" className="hero-logo-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
