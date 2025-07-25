import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { programmingProjects } from '../../data/programmingProjects';

const ProgrammingPage = () => {
    return (
        <ProjectsSection 
            projects={programmingProjects}
            pageTitle="Programming Projects"
            pageDescription={[
                "Hier findest du eine Auswahl meiner Programmierprojekte. Im Laufe meines Studiums und darüber hinaus habe ich viele weitere Projekte umgesetzt, von Java-Anwendungen bis hin zu Games und Tools."
            ]}
            cardsPerRow={3}
        />
    )
}

export default ProgrammingPage;