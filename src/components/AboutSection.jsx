import { TOKEN_NAME, TOKEN_TICKER } from "../constants.js";

const AboutSection = () => {
  return (
    <section id="about" className="section reveal">
      <div className="section-header">
        <p className="section-kicker">About</p>
        <h2>Pochita is a Fox 🦊</h2>
        <p className="section-subtitle">
          $FOX was created to honour Pochita, the adopted sister of Cheems, one of the most recognisable and influential figures in internet culture.
        </p>
      </div>

      <div className="about-body">
        <p>
          Cheems, also known as Balltze, became a global icon through memes that defined an era of online humour and community. When he passed away in 2023, millions of people felt the loss. His presence had become larger than a meme. It represented shared culture, comfort, and connection on the internet.
        </p>

        <p>
          Pochita later joined the same family and quickly found her own place in the community. In a post that would spark something bigger, her owner described her as a fox. The idea resonated. The community embraced it, and Fox Coin was born to immortalise Pochita on chain.
        </p>

        <p>
          $FOX is not trying to replace Cheems or recreate the past. It exists as a continuation of that story. A new chapter built on affection, humour, and shared internet history. It reflects how culture forms naturally online, through moments that feel honest rather than manufactured.
        </p>

        <p>
          This project is community driven at its core. It is about preserving a piece of meme history, celebrating Pochita’s place in it, and giving people a shared symbol to rally around. No complicated narrative. No forced utility. Just a token rooted in culture, memory, and the collective decision to make something last.
        </p>

        <p>
          $FOX is for those who understand where this space came from and want to carry that spirit forward.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
