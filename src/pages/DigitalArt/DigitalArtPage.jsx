import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { designProjects } from '../../data/designProjects';

const DigitalArt = () => {
    return (
        <ProjectsSection
            projects={designProjects}
            pageTitle="Digital Art"
            pageDescription={[
                "In meiner Ausbildung zum Mediengestalter habe ich Photoshop für mich entdeckt und in meinem Praktikum konnte ich ein wenig mit After Effects experimentieren."
            ]}
            cardsPerRow={3}
        />
    )
}

export default DigitalArt;