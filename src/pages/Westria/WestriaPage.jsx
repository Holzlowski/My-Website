import React from 'react';
import { Container } from 'react-bootstrap';
import ParallaxHeader from '../../components/ParallaxHeader/ParallaxHeader';
import CharacterSection from '../../components/CharacterSection/CharacterSection';

// Assets
import backgroundImage from '../../assets/images/Wüste.png';
import foregroundImage from '../../assets/images/Wüste_Vordergrund.png';
import OreliaMagie from '../../assets/images/skillkarten/Wüstensand.png';
import OreliaPose from '../../assets/images/westria/Orelia.jpg';
import OreliaVerletzt from '../../assets/images/westria/Orelia verletzt.png';
import Djagami1 from '../../assets/images/westria/Djagami_links.png';
import Djagami2 from '../../assets/images/westria/Djagami.png';
import Djagami3 from '../../assets/images/westria/Djagami_rechts.png';

import './WestriaPage.css';

const WestriaPage = () => {
  // Strukturierte Bild-Daten
  const oreliaImages = [
    { src: OreliaMagie, alt: "Orelia Magie", zoomClass: "" },
    { src: OreliaPose, alt: "Orelia Pose", zoomClass: "zoomed" },
    { src: OreliaVerletzt, alt: "Orelia Verletzt", zoomClass: "" }
  ];

  const djagamiImages = [
    { src: Djagami1, alt: "Djagami Links", zoomClass: "djagami1-zoomed" },
    { src: Djagami2, alt: "Djagami Mitte", zoomClass: "djagami-zoomed" },
    { src: Djagami3, alt: "Djagami Rechts", zoomClass: "" }
  ];

  return (
    <div className="westria-page">
      <ParallaxHeader 
        title="WESTRIA"
        backgroundImage={backgroundImage}
        foregroundImage={foregroundImage}
        height="500px"
      />

      <Container>
        <div className="westria-content">
          <h1>Western meets Fantasy</h1>

          <div className="westria-intro">
            <p>
              Willkommen in Westria, einer Welt, an der ich über Jahre hinweg gearbeitet habe und die sich noch immer weiterentwickelt.
              Ursprünglich sollte diese Geschichte als Manga erzählt werden, damals noch gemeinsam mit einem sehr guten Freund, der wirklich überragend gut zeichnen konnte.
              Leider haben wir uns zerstritten, doch wollte ich all die Mühen und Ideen nicht einfach aufgeben.
              Deshalb habe ich beschlossen, aus der gemeinsamen Geschichte meine ganz eigene zu machen und sie nun in Schriftform weiterzuerzählen.
            </p>
          </div>

          <div className="westria-sections">
            <div className="westria-section">
              <h3>Die Welt</h3>
              <p>
                Westria ist ein Land, in dem sich die Wüsten ausbreiten, Wasser kostbar ist und wilde Magie über die Dünen weht.
                Eine Welt in der Rocacci, kleine Katzenwesen, durch das Meer aus Sand streifen, um Wasser zu verteilen oder
                Goater, Ziegenmenschen, aus den Bergen kommen, um ihr Dasein als mürrische Barkeeper zu fristen.
              </p>
            </div>

            <div className="westria-section">
              <h3>Geschichten</h3>
              <p>
                Westrias Geschichte erstreckt sich über zahllose Jahre, durchzogen von Geheimnissen und Legenden,
                die tief im Sand vergraben liegen. Das Land selbst, ebenso wie seine Bewohner, musste unzählige Prüfungen bestehen,
                um zu dem zu werden, was es heute ist. Doch diese Erzählung richtet ihren Blick auf ein Mädchen aus dem Stamm der Dust.
                Ihr Name ist Orelia.
              </p>
            </div>
          </div>

          <CharacterSection
            title="Orelia Dust"
            description="Ein junges Mädchen, das ihren Stamm hinter sich gelassen hat und nun mit ihrem treuen Kamelstrauß und Begleiter Kasu durch die gnadenlose Wüste zieht. Auf der Suche nach einem geheimnisvollen Ort, den sie bisher nur in ihren Träumen gesehen hat."
            theme="gray"
            backgroundColor="rgba(208, 207, 205, 1)"
            images={oreliaImages}
          />

          <CharacterSection
            title="Djagami"
            description="Er ist ein Schatten unter der Sonne, sein Gesicht verhüllt von einer Maske, die das bleiche Antlitz einer Mondkrähe zeigt. Mit geheimnisvollen Kräften streift er durch die Wüste und kennt Geheimnisse, von denen andere nicht einmal zu träumen wagen. Unweit von Maginoa, der Stadt der tausend Wunder, kreuzen sich seine Schritte mit Orelias."
            theme="blue"
            backgroundColor="rgba(198, 185, 243, 1)"
            images={djagamiImages}
          />
        </div>
      </Container>
    </div>
  );
};

export default WestriaPage;
