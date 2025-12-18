import ffCoin from "../assets/ff-coin.png";

const Hero = () => {
  return (
    <section className="hero reveal">
      <div className="hero-content">
        <p className="pill">Solana native • Community owned</p>
        <h1>
          <span className="hero-title-highlight">Financial Freedom</span> is earned, not given.
        </h1>
        <p className="hero-subtitle">
          Financial Freedom is a Solana-born community for people who know they were
          meant for more than working, worrying, and hoping it all works out. We share
          ideas, accountability, and conviction so more of us can buy back our time.
        </p>

        <div className="hero-actions">
          <a
            href="https://bonk.fun/token/758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Buy $FF
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
          No promises, no shortcuts, just a group of people serious about building lives
          they do not need a holiday from.
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-logo-wrapper">
          <div className="hero-logo-ring">
            <img
              src={ffCoin}
              alt="Financial Freedom coin"
              className="hero-logo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
