import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { threeDProjects } from '../../data/threeDProjects';

const ThreeDPage = () => {
    return (
        <ProjectsSection 
            projects={threeDProjects}
            pageTitle="3D Design & Modeling"
            pageDescription="Meine 3D-Kunstwerke und Modelle erstellt in Blender"
            cardsPerRow={3}
        />
    )
}

export default ThreeDPage;