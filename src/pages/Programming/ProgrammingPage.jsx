import { useTranslation } from 'react-i18next';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { useTranslatedProjects } from '../../hooks/useTranslatedProjects';

const ProgrammingPage = () => {
    const { t } = useTranslation();
    const { programmingProjects: translatedProjects } = useTranslatedProjects();
    
    return (
        <ProjectsSection 
            projects={translatedProjects}
            pageTitle={t('projects.programming.title')}
            pageDescription={[
                t('projects.programming.description')
            ]}
            cardsPerRow={3}
        />
    )
}

export default ProgrammingPage;