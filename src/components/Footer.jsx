import { BUY_LINK, TOKEN_NAME, TOKEN_TICKER } from "../constants.js";

const Footer = () => {
  return (
    <footer className="footer" style={{ textAlign: "center", marginTop: "60px" }}>
      <p
        style={{
          color: "#888",
          fontSize: "0.9rem",
          maxWidth: "750px",
          margin: "0 auto",
          lineHeight: "1.5"
        }}
      >
        (c) {new Date().getFullYear()} {TOKEN_NAME}. All rights reserved.
      </p>

      <p
        style={{
          color: "#666",
          fontSize: "0.85rem",
          maxWidth: "750px",
          margin: "14px auto 0",
          lineHeight: "1.55"
        }}
      >
        {TOKEN_NAME} ({TOKEN_TICKER}) is a community-driven meme coin launched on Solana. It trades
        on community DEX pairs and should be considered a high-risk digital asset. Always verify the
        contract address before swapping ({BUY_LINK}).
      </p>

      <p
        style={{
          color: "#666",
          fontSize: "0.85rem",
          maxWidth: "750px",
          margin: "12px auto 0",
          lineHeight: "1.55"
        }}
      >
        Nothing on this site is financial advice. Always do your own research, double-check contract
        addresses, and never invest more than you can afford to lose. Participation is voluntary,
        and values may fluctuate rapidly.
      </p>
    </footer>
  );
};

export default Footer;
