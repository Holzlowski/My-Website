import { useTranslation } from 'react-i18next';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { useTranslatedProjects } from '../../hooks/useTranslatedProjects';

const ThreeDPage = () => {
    const { t } = useTranslation();
    const { threeDProjects: translatedProjects } = useTranslatedProjects();
    
    return (
        <ProjectsSection 
            projects={translatedProjects}
            pageTitle={t('projects.3d.title')}
            pageDescription={[
                t('projects.3d.description')
            ]}
            cardsPerRow={3}
        />
    )
}

export default ThreeDPage;