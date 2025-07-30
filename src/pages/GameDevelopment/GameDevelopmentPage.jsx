import { useTranslation } from 'react-i18next';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { useTranslatedProjects } from '../../hooks/useTranslatedProjects';

const GameDevelopmentPage = () => {
    const { t } = useTranslation();
    const { gameDevelopmentProjects: translatedProjects } = useTranslatedProjects();
    
    return (
        <ProjectsSection 
            projects={translatedProjects}
            pageTitle={t('projects.gamedev.title')}
            pageDescription={[
                t('projects.gamedev.description')
            ]}
            cardsPerRow={3}
        />
    );
}

export default GameDevelopmentPage;