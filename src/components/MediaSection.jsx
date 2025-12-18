import { useEffect, useRef, useState } from "react";
import pic1 from "../assets/ff-pic (1).jpg";
import pic2 from "../assets/ff-pic (2).jpg";
import pic3 from "../assets/ff-pic (3).jpg";
import pic4 from "../assets/ff-pic (4).jpg";
import pic5 from "../assets/ff-pic (5).jpg";
import pic6 from "../assets/ff-pic (6).jpg";
import pic7 from "../assets/ff-pic (7).jpg";
import pic8 from "../assets/ff-pic (8).jpg";
import pic9 from "../assets/ff-pic (9).jpg";
import pic10 from "../assets/ff-pic (10).jpg";
import pic11 from "../assets/ff-pic (11).jpg";
import pic12 from "../assets/ff-pic (12).jpg";
import pic13 from "../assets/ff-pic (13).jpg";
import pic14 from "../assets/ff-pic (14).jpg";
import pic15 from "../assets/ff-pic (15).jpg";
import pic16 from "../assets/ff-pic (16).jpg";
import pic17 from "../assets/ff-pic (17).jpg";
import pic18 from "../assets/ff-pic (18).jpg";
import pic19 from "../assets/ff-pic (19).jpg";
import pic20 from "../assets/ff-pic (20).jpg";
import pic21 from "../assets/ff-pic (21).jpg";
import pic22 from "../assets/ff-pic (22).jpg";
import pic23 from "../assets/ff-pic (23).jpg";
import pic24 from "../assets/ff-pic (24).jpg";
import pic25 from "../assets/ff-pic (25).jpg";
import pic26 from "../assets/ff-pic (26).jpg";
import pic27 from "../assets/ff-pic (27).jpg";
import pic28 from "../assets/ff-pic (28).jpg";
import pic29 from "../assets/ff-pic (29).jpg";
import pic30 from "../assets/ff-pic (30).jpg";
import pic31 from "../assets/ff-pic (31).jpg";
import pic32 from "../assets/ff-pic (32).jpg";

const baseImages = [
  { src: pic1, alt: "Financial Freedom community photo 1" },
  { src: pic2, alt: "Financial Freedom community photo 2" },
  { src: pic3, alt: "Financial Freedom community photo 3" },
  { src: pic4, alt: "Financial Freedom community photo 4" },
  { src: pic5, alt: "Financial Freedom community photo 5" },
  { src: pic6, alt: "Financial Freedom community photo 6" },
  { src: pic7, alt: "Financial Freedom community photo 7" },
  { src: pic8, alt: "Financial Freedom community photo 8" },
  { src: pic9, alt: "Financial Freedom community photo 9" },
  { src: pic10, alt: "Financial Freedom community photo 10" },
  { src: pic11, alt: "Financial Freedom community photo 11" },
  { src: pic12, alt: "Financial Freedom community photo 12" },
  { src: pic13, alt: "Financial Freedom community photo 13" },
  { src: pic14, alt: "Financial Freedom community photo 14" },
  { src: pic15, alt: "Financial Freedom community photo 15" },
  { src: pic16, alt: "Financial Freedom community photo 16" },
  { src: pic17, alt: "Financial Freedom community photo 17" },
  { src: pic18, alt: "Financial Freedom community photo 18" },
  { src: pic19, alt: "Financial Freedom community photo 19" },
  { src: pic20, alt: "Financial Freedom community photo 20" },
  { src: pic21, alt: "Financial Freedom community photo 21" },
  { src: pic22, alt: "Financial Freedom community photo 22" },
  { src: pic23, alt: "Financial Freedom community photo 23" },
  { src: pic24, alt: "Financial Freedom community photo 24" },
  { src: pic25, alt: "Financial Freedom community photo 25" },
  { src: pic26, alt: "Financial Freedom community photo 26" },
  { src: pic27, alt: "Financial Freedom community photo 27" },
  { src: pic28, alt: "Financial Freedom community photo 28" },
  { src: pic29, alt: "Financial Freedom community photo 29" },
  { src: pic30, alt: "Financial Freedom community photo 30" },
  { src: pic31, alt: "Financial Freedom community photo 31" },
  { src: pic32, alt: "Financial Freedom community photo 32" }
];

const MediaSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const [manualSpeed, setManualSpeed] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const loopedImages = [...baseImages, ...baseImages];
  const pauseAnimations = isPaused || prefersReducedMotion;

  useEffect(() => {
    let rafId;
    const baseSpeed = 0.8;
    const step = () => {
      const scroller = scrollerRef.current;
      const track = trackRef.current;
      if (!scroller || !track) {
        rafId = requestAnimationFrame(step);
        return;
      }

      const effectiveSpeed = (pauseAnimations ? 0 : baseSpeed) + manualSpeed;
      if (effectiveSpeed !== 0) {
        const halfWidth = track.scrollWidth / 2;
        scroller.scrollLeft += effectiveSpeed;
        if (scroller.scrollLeft >= halfWidth) {
          scroller.scrollLeft -= halfWidth;
        } else if (scroller.scrollLeft < 0) {
          scroller.scrollLeft += halfWidth;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [pauseAnimations, manualSpeed]);

  const ensureLoop = () => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;
    const halfWidth = track.scrollWidth / 2;
    if (scroller.scrollLeft >= halfWidth) {
      scroller.scrollLeft -= halfWidth;
    } else if (scroller.scrollLeft < 0) {
      scroller.scrollLeft += halfWidth;
    }
  };

  const handleArrowPress = (direction) => {
    setManualSpeed(6 * direction);
  };

  const handleArrowRelease = () => {
    setManualSpeed(0);
    setTimeout(ensureLoop, 300);
  };

  const handleTiltMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    event.currentTarget.style.setProperty("--tiltX", `${x * 6}deg`);
    event.currentTarget.style.setProperty("--tiltY", `${-y * 6}deg`);
  };

  const handleTiltReset = (event) => {
    event.currentTarget.style.setProperty("--tiltX", "0deg");
    event.currentTarget.style.setProperty("--tiltY", "0deg");
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="media" className="section section-media reveal">
      <div className="section-header">
        <p className="section-kicker">Media</p>
        <h2>Moments from the movement</h2>
        <p className="section-subtitle">
          A rolling gallery of visuals from the Financial Freedom community.
        </p>
        <div className="media-controls">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-pressed={pauseAnimations}
          >
            {pauseAnimations ? "Resume motion" : "Pause motion"}
          </button>
        </div>
      </div>

      <div className="media-shell">
        <div className="media-scroller" ref={scrollerRef}>
          <div
            className={`media-track ${pauseAnimations ? "is-paused" : ""}`}
            ref={trackRef}
          >
            {loopedImages.map((image, index) => (
              <div
                className="media-frame"
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => setLightboxImage(image)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setLightboxImage(image);
                }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltReset}
                onFocus={handleTiltReset}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="media-image"
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => e.currentTarget.classList.add("is-loaded")}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="media-arrows">
          <button
            type="button"
            className="media-arrow"
            aria-label="Previous"
            onMouseDown={() => handleArrowPress(-1)}
            onMouseUp={handleArrowRelease}
            onMouseLeave={handleArrowRelease}
            onTouchStart={() => handleArrowPress(-1)}
            onTouchEnd={handleArrowRelease}
          >
            ‹
          </button>
          <button
            type="button"
            className="media-arrow"
            aria-label="Next"
            onMouseDown={() => handleArrowPress(1)}
            onMouseUp={handleArrowRelease}
            onMouseLeave={handleArrowRelease}
            onTouchStart={() => handleArrowPress(1)}
            onTouchEnd={handleArrowRelease}
          >
            ›
          </button>
        </div>
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              aria-label="Close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="lightbox-image"
            />
            <div className="lightbox-actions">
              <a
                href={lightboxImage.src}
                download
                className="btn btn-secondary"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaSection;
