import { useTranslation } from 'react-i18next';
import { designProjects } from '../data/designProjects';
import { threeDProjects } from '../data/threeDProjects';
import { gameDevelopmentProjects } from '../data/gameDevelopmentProjects';
import { programmingProjects } from '../data/programmingProjects';

export const useTranslatedProjects = () => {
  const { t } = useTranslation();

  const translateProject = (project, category) => {
    // Erstelle einen slug aus dem Titel mit korrekter Umlaut-Behandlung
    const slug = project.title
      .toLowerCase()
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ß/g, 'ss')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/--+/g, '-'); // Mehrfache Bindestriche zu einem reduzieren
    
    return {
      ...project,
      title: t(`projectData.${category}.${slug}.title`, project.title),
      description: t(`projectData.${category}.${slug}.description`, project.description)
    };
  };

  return {
    designProjects: designProjects.map(project => translateProject(project, 'design')),
    threeDProjects: threeDProjects.map(project => translateProject(project, 'threed')),
    gameDevelopmentProjects: gameDevelopmentProjects.map(project => translateProject(project, 'gamedev')),
    programmingProjects: programmingProjects.map(project => translateProject(project, 'programming'))
  };
};
