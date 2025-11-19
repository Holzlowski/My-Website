import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ParallaxHeader from '../../components/ParallaxHeader/ParallaxHeader';
import CharacterSection from '../../components/CharacterSection/CharacterSection';

// Assets
import backgroundImage from '../../assets/images/westria/Wüste.png';
import foregroundImage from '../../assets/images/westria/Wüste_Vordergrund.png';
import OreliaMagie from '../../assets/images/skillkarten/Wüstensand.jpg';
import OreliaPose from '../../assets/images/westria/Orelia.jpg';
import OreliaVerletzt from '../../assets/images/westria/Orelia verletzt.png';
import Djagami1 from '../../assets/images/westria/Djagami_links.png';
import Djagami2 from '../../assets/images/westria/Djagami.png';
import Djagami3 from '../../assets/images/westria/Djagami_rechts.png';

import './WestriaPage.css';

const WestriaPage = () => {
  const { t } = useTranslation();
  
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
        title={t('westria.title')}
        backgroundImage={backgroundImage}
        foregroundImage={foregroundImage}
        height="500px"
      />

      <Container>
        <div className="westria-content">
          <h1>{t('westria.subtitle')}</h1>

          <div className="westria-intro">
            <p>
              {t('westria.intro')}
            </p>
          </div>

          <div className="westria-sections">
            <div className="westria-section">
              <h3>{t('westria.world.title')}</h3>
              <p>
                {t('westria.world.description')}
              </p>
            </div>

            <div className="westria-section">
              <h3>{t('westria.stories.title')}</h3>
              <p>
                {t('westria.stories.description')}
              </p>
            </div>
          </div>

          <CharacterSection
            title={t('westria.characters.orelia.title')}
            description={t('westria.characters.orelia.description')}
            theme="gray"
            backgroundColor="rgba(208, 207, 205, 1)"
            images={oreliaImages}
          />

          <CharacterSection
            title={t('westria.characters.djagami.title')}
            description={t('westria.characters.djagami.description')}
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
