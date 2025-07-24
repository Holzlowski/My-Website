import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { gameDevelopmentProjects } from '../../data/gameDevelopmentProjects';

const GameDevelopmentPage = () => {
    return (
        <ProjectsSection 
            projects={gameDevelopmentProjects}
            pageTitle="Game Development"
            pageDescription={[
                "Seit ich Zelda Ocarina of Time, Final Fantasy oder Kingdom Hearts gespielt habe, bin ich von der Welt der Videospiele fasziniert. Ich hatte mich schon immer gefragt, wie Spiele entwickelt und hatte im Studium die Chance, dies zu erkunden. In der Zukunft möchte ich weiterhin an Spielen arbeiten, denn ich habe noch so viele Ideen."
            ]}
            cardsPerRow={3}
        />
    );
}

export default GameDevelopmentPage;