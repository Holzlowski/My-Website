import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { programmingProjects } from '../../data/programmingProjects';

const ProgrammingPage = () => {
    return (
        <ProjectsSection 
            projects={programmingProjects}
            pageTitle="Programming Projects"
            pageDescription={[
                "Hier sind einige meiner Programmierprojekte, die ich im Laufe der Zeit erstellt habe. Im Verlauf meines Studiums habe ich noch viele andere Projekte erstellt (z.B. in Java), die ich hier nicht aufgelistet habe. Diese sind jedoch einige meiner Favoriten und zeigen meine Fähigkeiten in der Programmierung."
            ]}
            cardsPerRow={3}
        />
    )
}

export default ProgrammingPage;