import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { gameDevelopmentProjects } from '../../data/gameDevelopmentProjects';

const GameDevelopmentPage = () => {
    return (
        <ProjectsSection 
            projects={gameDevelopmentProjects}
            pageTitle="Game Development"
            pageDescription={[
                "Seit ich Spiele wie Zelda: Ocarina of Time, Final Fantasy oder Kingdom Hearts entdeckt habe, bin ich von der Welt der Videospiele fasziniert. Schon immer wollte ich wissen, wie Spiele entstehen. Im Studium hatte ich dann endlich die Möglichkeit, selbst in die Entwicklung einzutauchen. Auch in Zukunft möchte ich weiter an Spielen arbeiten, denn ich habe noch unzählige Ideen, die darauf warten, zum Leben erweckt zu werden."
            ]}
            cardsPerRow={3}
        />
    );
}

export default GameDevelopmentPage;