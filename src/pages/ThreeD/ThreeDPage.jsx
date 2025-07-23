import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { threeDProjects } from '../../data/threeDProjects';

const ThreeDPage = () => {
    return (
        <ProjectsSection 
            projects={threeDProjects}
            pageTitle="3D Design & Modeling"
            pageDescription={[
                "Schon als Kind haben mich 3D-Modelle und Animationen fasziniert. Erst im Studium habe ich mich begonnen mich mit 3D-Design und -Modellierung auseinanderzusetzen.",
                "Hier sind einige meiner Arbeiten, die ich in Blender erstellt habe."
            ]}
            cardsPerRow={3}
        />
    )
}

export default ThreeDPage;