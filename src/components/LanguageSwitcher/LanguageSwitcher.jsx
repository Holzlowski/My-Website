import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-btn ${i18n.language === 'de' ? 'active' : ''}`}
        onClick={() => changeLanguage('de')}
        title="Deutsch"
      >
        <span className="flag-text">DE</span>
      </button>
      <button
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        title="English"
      >
        <span className="flag-text">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
