import { BUY_LINK, DEX_LINK, TOKEN_NAME, TOKEN_TICKER, X_COMMUNITY_LINK } from "../constants.js";

const LinksSection = () => {
  return (
    <section id="links" className="section section-links reveal">
      <header className="section-header">
        <div className="section-kicker">Links</div>
        <h2>Follow the Fox Coin trails</h2>
        <p className="section-subtitle">
          Official links only. Bookmark this page and avoid random DMs or fake accounts.
        </p>
      </header>

      <div className="link-grid">
        {/* Twitter / X */}
        <a href={X_COMMUNITY_LINK} target="_blank" rel="noreferrer" className="link-tile">
          <span>Twitter / X</span>
          <span className="link-tag">Announcements &amp; raids</span>
        </a>

        {/* DEX / Chart */}
        <a href={DEX_LINK} target="_blank" rel="noreferrer" className="link-tile">
          <span>DEX / Chart</span>
          <span className="link-tag">Trade &amp; track {TOKEN_TICKER}</span>
        </a>

        {/* Buy now */}
        <a href={BUY_LINK} target="_blank" rel="noreferrer" className="link-tile">
          <span>Buy {TOKEN_TICKER}</span>
          <span className="link-tag">Swap SOL for {TOKEN_NAME}</span>
        </a>

      </div>
    </section>
  );
};

export default LinksSection;
