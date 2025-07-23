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
            <h5>Hey, ich bin David Holz.</h5>
            <p>
              Nicht der Erfinder von Midjourney, aber definitiv jemand mit viel Kreativität und Begeisterung für alles, was spannend klingt.
              Ich bin ein großer Träumer mit vielen Ideen, manchmal vielleicht zu viele mit zu wenig Zeit. Trotzdem habe ich es geschafft, einige von ihnen tatsächlich umzusetzen.
              Und genau diese Projekte möchte ich hier mit dir teilen.
            </p>

            <p>
              Meine größte Leidenschaft ist es, neue Welten zu erschaffen und sie irgendwie lebendig zu machen.
              Ob in 2D, 3D, als Spiel oder einfach nur auf Papier, es geht mir immer darum, etwas Eigenes zum Leben zu erwecken.
              Ich erschaffe nicht nur Welten ich tauche auch sehr gerne in andere ein, sei es durch Spiele, Filme, Bücher oder Pen & Paper,
              wobei ich meistens als Spielleiter unterwegs bin.
            </p>

            <p>
              Irgendwann in meinem Leben habe ich, wie wahrscheinlich viele andere auch, gesagt: „Ich mach irgendwas mit Medien.“
              Also habe ich eine Ausbildung zum Mediengestalter angefangen und erfolgreich abgeschlossen.
              Aber das war mir nicht genug. Obwohl ich früher dachte, dass ich zu doof zum Studieren bin (und ich sogar mal wegen Mathe in der 7. Klasse sitzen geblieben bin),
              habe ich mich an ein Studium gewagt: Medieninformatik.
              Und was soll ich sagen, ich habe nicht nur den Bachelor, sondern auch den Master geschafft.
              Damit habe ich mir selbst bewiesen, dass man manchmal einfach an sich glauben muss.
              Und ja, ich liebe das Programmieren. Auch wenn es mich manchmal an den Rand der Verzweiflung bringt.
              Mein 10-jähriges Ich würde niemals glauben, dass ich heute Spiele programmieren kann.
              Außerdem liebe ich es, Neues zu lernen, und ich will zeigen, dass man alles schaffen kann, wenn man dranbleibt.
            </p>

            <p>P.S. Manche meiner guten Freunde nennen mich einfach Holz und weil ich meinen Nachnamen so sehr mag,
              fühl ich eine gewisse Verbundenheit zu allem, was mit Holz zu tun hat.
              <img
                src={baumLogo}
                alt="Baum Logo"
                className="inline-logo"
              />
            </p>

            <h5>Momentane Situation</h5>
            <p>
              Die Welt verändert sich gerade rasend schnell, manchmal habe ich das Gefühl, kaum hinterherzukommen.
              Der Arbeitsmarkt ist momentan echt hart, und es ist gar nicht so leicht, einen Job zu finden, obwohl ich mein Bestes gebe.
              Aber eins ist sicher: <br></br>Aufgeben ist keine Option.
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
