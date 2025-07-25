import React from 'react';
import { Container } from 'react-bootstrap';
import ParallaxHeader from '../../components/ParallaxHeader/ParallaxHeader';
import CharacterSection from '../../components/CharacterSection/CharacterSection';

// Assets
import backgroundImage from '../../assets/images/westria/Wüste.png';
import foregroundImage from '../../assets/images/westria/Wüste_Vordergrund.png';
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
              Willkommen in Westria, einer Welt, an der ich über viele Jahre gearbeitet habe und die sich bis heute weiterentwickelt. 
              Ursprünglich sollte die Geschichte als Manga erzählt werden, gemeinsam mit einem sehr guten Freund, der unglaublich talentiert zeichnen konnte. 
              Leider haben wir uns zerstritten, doch wollte ich all die Mühe und Ideen nicht einfach aufgeben. 
              Deshalb habe ich beschlossen, aus unserer gemeinsamen Geschichte meine ganz eigene zu machen und sie nun in Schriftform weiterzuerzählen.
            </p>
          </div>

          <div className="westria-sections">
            <div className="westria-section">
              <h3>Die Welt</h3>
              <p>
                Westria ist ein Land, in dem sich endlose Wüsten ausbreiten, Wasser kostbar wie Gold ist und wilde Magie über die Dünen weht. 
                Hier streifen die Rocacci, kleine Katzenwesen, durch das Sandmeer, um Wasser zu verteilen, 
                während die Goater, zähe Ziegenmenschen aus den Bergen, ihr mürrisches Dasein als Barkeeper fristen.
              </p>
            </div>

            <div className="westria-section">
              <h3>Geschichten</h3>
              <p>
                Die Geschichte Westrias spannt sich über unzählige Jahre und ist durchzogen von Geheimnissen und Legenden, die tief im Sand vergraben liegen. 
                Das Land und seine Bewohner haben viele Prüfungen durchlebt, um das zu werden, was sie heute sind. 
                Doch diese Erzählung richtet ihren Blick auf ein Mädchen aus dem Stamm der Dust. Ihr Name ist Orelia.
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
            description="Ein Schatten unter der sengenden Sonne, sein Gesicht verborgen hinter einer Maske, die das schaurige Antlitz einer Mondkrähe zeigt. Mit geheimnisvollen Kräften durchstreift er die Wüste und kennt Geheimnisse, von denen andere nicht einmal zu träumen wagen. Unweit von Maginoa, der Stadt der tausend Wunder, kreuzen sich seine Wege mit denen Orelias."
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
