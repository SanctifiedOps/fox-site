const heroImage = "/fox-logo.png";
import { BUY_LINK, TOKEN_NAME, TOKEN_TICKER } from "../constants.js";

const Hero = () => {
  return (
    <section className="hero reveal">
      <div className="hero-content">
        <p className="pill">Solana native | Community owned</p>
        <h1>
          <span className="hero-title-highlight">{TOKEN_NAME}</span> runs with the pack.
        </h1>
        <p className="hero-subtitle">
          {TOKEN_NAME} ({TOKEN_TICKER}) is a Solana meme coin for foxes who move fast, look out for
          each other, and keep building even when the forest gets noisy. Grab some {TOKEN_TICKER},
          bring your friends, and let the den know you are here.
        </p>

        <div className="hero-actions">
          <a href={BUY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Buy {TOKEN_TICKER}
          </a>

          <a
            href="https://x.com/i/communities/1994507546619736378"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            X Community
          </a>

          <a
            href="https://www.tiktok.com/@financiallyfreeusd1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Follow on TikTok
          </a>
        </div>

        <p className="hero-note">
          No promises, no shortcuts—just a crew of foxes who hunt together. Always verify the contract
          address before you swap.
        </p>
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
