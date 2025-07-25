import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { designProjects } from '../../data/designProjects';

const DigitalArt = () => {
    return (
        <ProjectsSection
            projects={designProjects}
            pageTitle="Digital Art"
            pageDescription={[
                "Während meiner Ausbildung zum Mediengestalter habe ich Photoshop für mich entdeckt und erste kreative Projekte umgesetzt. In meinem Praktikum hatte ich außerdem die Gelegenheit, mit After Effects zu experimentieren und so mein digitales Repertoire zu erweitern."
            ]}
            cardsPerRow={3}
        />
    )
}

export default DigitalArt;