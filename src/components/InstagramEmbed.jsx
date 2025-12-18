import { useEffect, useRef } from "react";

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/DSXFfcbk_fV";

const InstagramEmbed = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    const loadEmbed = () => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    if (existingScript) {
      loadEmbed();
      return;
    }

    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = loadEmbed;
    document.body.appendChild(script);

    return () => {
      // keep script for subsequent mounts
    };
  }, []);

  return (
    <section className="section instagram-section reveal" ref={ref}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${INSTAGRAM_POST_URL}/?utm_source=ig_embed&amp;utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          borderRadius: "12px",
          border: "1px solid #e6e6e6",
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          margin: "0 auto",
          maxWidth: "540px",
          width: "100%"
        }}
      >
        <a href={INSTAGRAM_POST_URL}>View on Instagram</a>
      </blockquote>
    </section>
  );
};

export default InstagramEmbed;
