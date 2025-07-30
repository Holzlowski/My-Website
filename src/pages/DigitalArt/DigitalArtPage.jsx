import { useTranslation } from 'react-i18next';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { useTranslatedProjects } from '../../hooks/useTranslatedProjects';

const DigitalArt = () => {
    const { t } = useTranslation();
    const { designProjects: translatedProjects } = useTranslatedProjects();
    
    return (
        <ProjectsSection
            projects={translatedProjects}
            pageTitle={t('projects.digitalart.title')}
            pageDescription={[
                t('projects.digitalart.description')
            ]}
            cardsPerRow={3}
        />
    )
}

export default DigitalArt;