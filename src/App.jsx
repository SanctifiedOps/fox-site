import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import MissionSection from "./components/MissionSection.jsx";
import MediaSection from "./components/MediaSection.jsx";
import BuyFFSection from "./components/BuyFFSection.jsx";
import LinksSection from "./components/LinksSection.jsx";
import Footer from "./components/Footer.jsx";

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

  return (
    <div className={`app ${pageReady ? "is-ready" : ""}`}>
      <Navbar />
      <main className="main-content">
        <Hero />
        <AboutSection />
        <MissionSection />
        <MediaSection />
        <BuyFFSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
