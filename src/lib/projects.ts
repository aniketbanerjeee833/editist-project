import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export type Project = {
  title: string;
  videoUrl?: string;
  imageUrl?: string;
  projectUrl: string;
  hint: string;
  showProjectLink?: boolean;
};

export function getProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const project = JSON.parse(fileContents) as Project;
    return project;
  });
  return allProjectsData;
}
