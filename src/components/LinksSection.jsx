const LinksSection = () => {
  return (
    <section id="links" className="section section-links reveal">
      <header className="section-header">
        <div className="section-kicker">Links</div>
        <h2>Follow the freedom stack</h2>
        <p className="section-subtitle">
          Official links only. Bookmark this page and avoid random DMs or fake accounts.
        </p>
      </header>

      <div className="link-grid">
        {/* Twitter / X */}
        <a
          href="https://x.com/i/communities/1994507546619736378" /* put your real X link here */
          target="_blank"
          rel="noreferrer"
          className="link-tile"
        >
          <span>Twitter / X</span>
          <span className="link-tag">Announcements &amp; threads</span>
        </a>

        {/* DEX / Chart */}
        <a
          href="https://dexscreener.com/solana/g316ukzm4n3h6adzycy8mmp968nrfnvyvpf45u7lccvu" /* replace with your real chart / DEX link */
          target="_blank"
          rel="noreferrer"
          className="link-tile"
        >
          <span>DEX / Chart</span>
          <span className="link-tag">Trade &amp; track $FF</span>
        </a>

        {/* Buy now */}
        <a
          href="https://bonk.fun/token/758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk" /* or Raydium / preferred swap link for $FF */
          target="_blank"
          rel="noreferrer"
          className="link-tile"
        >
          <span>Buy $FF</span>
          <span className="link-tag">Swap SOL for Financial Freedom</span>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@financiallyfreeusd1"
          target="_blank"
          rel="noreferrer"
          className="link-tile"
        >
          <span>TikTok</span>
          <span className="link-tag">Clips & community moments</span>
        </a>
      </div>
    </section>
  );
};

export default LinksSection;
