import { TOKEN_TICKER } from "../constants.js";

const MissionSection = () => {
  return (
    <section id="mission" className="section section-mission reveal">
      <div className="section-header">
        <p className="section-kicker">Mission</p>
        <h2>Run with the foxes</h2>
        <p className="section-subtitle">
          We are here to make {TOKEN_TICKER} the foxhole for builders, traders, and community-first
          degens on Solana.
        </p>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <h3>Educate</h3>
          <p>
            Break down plays so every holder can keep up. Share what works, warn on traps, and help
            new foxes move confidently on-chain.
          </p>
        </div>
        <div className="card">
          <h3>Coordinate</h3>
          <p>
            Use {TOKEN_TICKER} to rally around launches, raids, and real utility experiments. When
            the pack moves together, we move further.
          </p>
        </div>
        <div className="card">
          <h3>Have fun</h3>
          <p>
            Keep the memes flowing, celebrate the wins, and make the Fox den the loudest, kindest
            corner of Solana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
