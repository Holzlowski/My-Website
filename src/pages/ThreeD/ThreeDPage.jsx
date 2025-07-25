import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { threeDProjects } from '../../data/threeDProjects';

const ThreeDPage = () => {
    return (
        <ProjectsSection 
            projects={threeDProjects}
            pageTitle="3D Design & Modeling"
            pageDescription={[
                "Schon als Kind haben mich 3D-Modelle und Animationen fasziniert. Im Studium habe ich mich dann intensiv mit 3D-Design und -Modellierung beschäftigt und mein Wissen stetig erweitert. Dabei hat es mir Blender besonders angetan."
            ]}
            cardsPerRow={3}
        />
    )
}

export default ThreeDPage;