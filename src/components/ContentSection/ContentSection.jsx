import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import baumLogo from '../../assets/images/Bäumchen.png';
import charakterBild from '../../assets/images/Ich.png';
import './ContentSection.css';


const ContentSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="content-section">
      <Container className="mt-4">
        <div className="content-wrapper">
          <div className="content-card">
            <h2>{t('content.welcome')}</h2>
            <h4>{t('content.subtitle')}</h4>
            <h4>{t('content.greeting')}</h4>
            <p>
              {t('content.intro')}
            </p>
            <h5>{t('content.whoami_title')}</h5>
            <p>
              {t('content.whoami_text')}
            </p>
            <h5>{t('content.journey_title')}</h5>
            <p>
              {t('content.journey_text')}
            </p>
            <h5>{t('content.why_holz_title')}</h5>
            <p>
              {t('content.why_holz_text')}
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
