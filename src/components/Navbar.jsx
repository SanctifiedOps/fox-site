import { useEffect, useState } from "react";
import ffLogo from "../assets/ff-logo.png";

const CONTRACT_ADDRESS = "758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk";

const Navbar = () => {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
    setNavOpen(false);
  };

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = `${window.location.origin}/#${sectionId}`;
      return;
    }
    handleScroll(sectionId);
  };

  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setToast("Contract copied");
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      setToast("Clipboard blocked — press Ctrl+C");
    }
  };

  return (
    <>
      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-left">
          <img src={ffLogo} alt="Financial Freedom" className="navbar-logo" />
          <div className="navbar-brand">Financial Freedom</div>
        </div>

        <div className="navbar-links">
          <a href="/#about" onClick={(event) => handleNavClick(event, "about")}>
            About
          </a>
          <a href="/#mission" onClick={(event) => handleNavClick(event, "mission")}>
            Mission
          </a>
          <a href="/#media" onClick={(event) => handleNavClick(event, "media")}>
            Media
          </a>
          <a href="/#links" onClick={(event) => handleNavClick(event, "links")}>
            Links
          </a>
        </div>

        <div className="navbar-actions">
          <button
            className="btn btn-secondary"
            onClick={handleCopyCA}
            aria-label="Copy contract address"
          >
            {copied ? "Copied" : "Copy CA"}
          </button>

          <a
            className="btn btn-primary"
            href="https://bonk.fun/token/758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $FF
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`navbar-overlay ${navOpen ? "open" : ""}`}
        onClick={() => setNavOpen(false)}
      />

      <div className={`navbar-drawer ${navOpen ? "open" : ""}`}>
        <div className="drawer-links">
          <a href="/#about" onClick={(event) => handleNavClick(event, "about")}>
            About
          </a>
          <a href="/#mission" onClick={(event) => handleNavClick(event, "mission")}>
            Mission
          </a>
          <a href="/#media" onClick={(event) => handleNavClick(event, "media")}>
            Media
          </a>
          <a href="/#links" onClick={(event) => handleNavClick(event, "links")}>
            Links
          </a>
        </div>

        <div className="drawer-actions">
          <button className="btn btn-secondary" onClick={handleCopyCA}>
            {copied ? "Copied" : "Copy CA"}
          </button>
          <a
            className="btn btn-primary"
            href="https://bonk.fun/token/758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $FF
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
