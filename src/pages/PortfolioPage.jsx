import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { ProjectsSection } from '../components';
import { useTranslatedProjects } from '../hooks';

/**
 * Generic Portfolio Page Component
 * Renders a project section for different categories (Programming, Game Dev, Digital Art, 3D)
 */
const PortfolioPage = ({ category, translationKey, cardsPerRow = 3 }) => {
    const { t } = useTranslation();
    const allProjects = useTranslatedProjects();
    const projects = allProjects[category] || [];
    
    return (
        <ProjectsSection 
            projects={projects}
            pageTitle={t(`projects.${translationKey}.title`)}
            pageDescription={[t(`projects.${translationKey}.description`)]}
            cardsPerRow={cardsPerRow}
        />
    );
};

PortfolioPage.propTypes = {
    category: PropTypes.oneOf([
        'programmingProjects',
        'gameDevelopmentProjects', 
        'designProjects',
        'threeDProjects'
    ]).isRequired,
    translationKey: PropTypes.string.isRequired,
    cardsPerRow: PropTypes.number
};

PortfolioPage.defaultProps = {
    cardsPerRow: 3
};

export default PortfolioPage;
