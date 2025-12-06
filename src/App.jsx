import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import MissionSection from "./components/MissionSection.jsx";
import MediaSection from "./components/MediaSection.jsx";
import BuyFFSection from "./components/BuyFFSection.jsx";
import LinksSection from "./components/LinksSection.jsx";
import Footer from "./components/Footer.jsx";
import ffChair from "./assets/ff-chair.jpg";
import PfpPage from "./pages/PfpPage.jsx";

const App = () => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 40);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const isPfpRoute = typeof window !== "undefined" && window.location.pathname === "/pfp";

  return (
    <div className={`app ${pageReady ? "is-ready" : ""}`}>
      <Navbar />
      <main className={`main-content ${isPfpRoute ? "pfp-route" : ""}`}>
        {isPfpRoute ? (
          <PfpPage />
        ) : (
          <>
        <Hero />
        <AboutSection />
        <MissionSection />
        <section className="pfp-cta-section">
          <div className="pfp-cta-text">
            <p className="pfp-cta-pill">PFP Generator</p>
            <h3>Secure a seat at the table of Financial Freedom.</h3>
            <div className="pfp-cta-copy">
              <p>
                Upload a selfie, let our refinements sit you among the movement, and
                carry the gilded aura of the Financial Freedom table across socials.
              </p>
              <span className="pfp-cta-disclaimer">
                Disclaimer: The generator follows safety guardrails, so certain prompts may be declined.
              </span>
            </div>
            <div className="pfp-cta-footer">
              <div className="btn btn-secondary pfp-cta-btn pfp-cta-soon" aria-disabled="true">
                Coming soon
              </div>
            </div>
          </div>
          <figure className="pfp-cta-visual">
            <img src={ffChair} alt="Financial Freedom chair" />
            <figcaption>CLAIM YOUR SEAT AT THE TABLE</figcaption>
          </figure>
        </section>
        <MediaSection />
            <BuyFFSection />
            <LinksSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
