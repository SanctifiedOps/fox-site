const MissionSection = () => {
  return (
    <section id="mission" className="section section-mission reveal">
      <div className="section-header">
        <p className="section-kicker">Mission</p>
        <h2>Our path to financial freedom</h2>
        <p className="section-subtitle">
          The mission is simple: use Solana&apos;s speed and composability to create practical
          paths to financial freedom for normal people, not just insiders.
        </p>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <h3>Educate</h3>
          <p>
            Break down complex on-chain strategies into simple, repeatable plays. We share what
            we learn in public so the whole community levels up.
          </p>
        </div>
        <div className="card">
          <h3>Compound</h3>
          <p>
            Use $FF to coordinate around yield, opportunity, and discipline. We are here to grow
            accounts, not just chase pumps.
          </p>
        </div>
        <div className="card">
          <h3>Break free</h3>
          <p>
            Help more holders reach the point where work becomes optional, creativity is funded,
            and time is owned, not rented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
