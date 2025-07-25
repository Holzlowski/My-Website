import { Container } from 'react-bootstrap';
import baumLogo from '../../assets/images/Bäumchen.png';
import charakterBild from '../../assets/images/Ich.png';
import './ContentSection.css';


const ContentSection = () => {
  return (
    <section className="content-section">
      <Container className="mt-4">
        <div className="content-wrapper">
          <div className="content-card">
            <h2>Willkommen in meinem Wald</h2>
            <h4>Schön, dass du dich hierher verlaufen hast.</h4>
            <h4>Hey, ich bin David Holz.</h4>
            <p>
              Nicht der Erfinder von Midjourney, aber jemand mit einer Menge Kreativität und Begeisterung für alles, was spannend klingt.
              Ich bin ein Träumer mit vielen Ideen, manchmal vielleicht zu viele, aber einige davon habe ich bereits umgesetzt.
              Und genau diese Projekte möchte ich hier gerne mit dir teilen.
            </p>
            <h5>Wer ich bin</h5>
            <p>
              Ich bin in Stendal geboren und aufgewachsen, aber bin auch oft in Berlin anzutreffen.
              Dort habe ich studiert, Freunde gefunden und meine Freundin. Stendal ist Heimat, Berlin ist Liebe.
              Meine größte Leidenschaft ist es, neue Welten zu erschaffen und sie zum Leben zu erwecken.
              Ob in 2D, 3D, als Spiel oder einfach auf Papier, es geht mir immer darum, etwas Eigenes zu gestalten.
              Gleichzeitig liebe ich es, in andere Welten einzutauchen: durch Spiele, Filme, Bücher oder Pen & Paper, wo ich oft die Rolle des Spielleiters einnehme.
            </p>
            <h5>Mein Weg</h5>
            <p>
              Wie viele andere habe ich irgendwann gesagt: „Ich mach was mit Medien.“ Also begann ich eine Ausbildung zum Mediengestalter und schloss sie erfolgreich ab. Aber das war nur der Anfang.
              Obwohl ich früher dachte, dass ich nicht geeignet bin fürs Studieren (Fun Fact: Ich bin in der 7. Klasse wegen Mathe sitzen geblieben), habe ich ein Studium in Medieninformatik gewagt und nicht nur den Bachelor, sondern auch den Master geschafft.
              Für mich der Beweis, dass man alles erreichen kann, wenn man dranbleibt und an sich glaubt.
              Heute programmiere ich Spiele und liebe es, Neues zu lernen.
              Mein 10-jähriges Ich wäre bestimmt stolz!
            </p>
            <h5>Warum Holz?</h5>
            <p>
              Manche meiner guten Freunde nennen mich einfach Holz und weil ich meinen Nachnamen so sehr mag,
              fühl ich eine gewisse Verbundenheit zu allem, was mit Holz zu tun hat.
              <img
                src={baumLogo}
                alt="Baum Logo"
                className="inline-logo"
              />
            </p>
          </div>
          <div className="content-image">
            <img
              src={charakterBild}
              alt="Charakterbild"
              className="charakter-bild"
            />
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ContentSection;
