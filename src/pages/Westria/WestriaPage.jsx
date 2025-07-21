import React from 'react';
import { Container } from 'react-bootstrap';
import OreliaMagie from '../../assets/images/skillkarten/Wüstensand.png'
import OreliaPose from '../../assets/images/westria/Orelia.jpg'
import OreliaVerletzt from '../../assets/images/westria/Orelia verletzt.png'
import Djagami1 from '../../assets/images/westria/Djagami_links.png'
import Djagami2 from '../../assets/images/westria/Djagami.png'
import Djagami3 from '../../assets/images/westria/Djagami_rechts.png'
import './WestriaPage.css';

const WestriaPage = () => {
  return (
    <div className="westria-page">
      <div className='westria-header'>
        <div className='background'></div>
        <div className='foreground'></div>
        <div className="title-text"> WESTRIA </div>
      </div>
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
          <div className="westria-intro theme-gray" style={{ backgroundColor: 'rgba(208, 207, 205, 1)' }}>
            <h3 style={{ textAlign: 'center' }}>Orelia Dust</h3>
            <p>
              Ein junges Mädchen, dsaa ihren Stamm hinter sich gelassen hat und nun mit ihrem treuen Kamelstrauß und Begleiter Kasu <br></br>
              durch die gnadenlose Wüste zieht. Auf der Suche nach einem geheimnisvollen Ort, den sie bisher nur in ihren Träumen gesehen hat.
            </p>
            <div className="westria-sections">
              <div className="westria-section" >
                <img src={OreliaMagie} alt="Orelia Magie" className="westria-image" />
              </div>
              <div className="westria-section" >
                <img src={OreliaPose} alt="Orelia Pose" className="westria-image zoomed" />
              </div>
              <div className="westria-section" >
                <img src={OreliaVerletzt} alt="Orelia Magie" className="westria-image" />
              </div>
            </div>
          </div>
          <div className="westria-intro theme-blue" style={{ backgroundColor: 'rgba(198, 185, 243, 1)' }}>
            <h3 style={{ textAlign: 'center' }}>Djagami</h3>
            <p>
              Er ist ein Schatten unter der Sonne, sein Gesicht verhüllt von einer Maske, die das bleiche Antlitz einer Mondkrähe zeigt.<br></br> 
              Mit geheimnisvollen Kräften streift er durch die Wüste und kennt Geheimnisse, von denen andere nicht einmal zu träumen wagen. <br></br>
              Unweit von Maginoa, der Stadt der tausend Wunder, kreuzen sich seine Schritte mit Orelias.
            </p>
            <div className="westria-sections">
              <div className="westria-section" >
                <img src={Djagami1} alt="Djagami_links" className="westria-image djagami1-zoomed" />
              </div>
              <div className="westria-section" >
                <img src={Djagami2} alt="Djagami_mitte" className="westria-image djagami-zoomed" />
              </div>
              <div className="westria-section" >
                <img src={Djagami3} alt="Djagami_rechts" className="westria-image" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WestriaPage;
