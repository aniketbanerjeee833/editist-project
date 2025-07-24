import { getProjects } from "@/lib/projects";
import ProjectsClient from "./projects-client";

export default function ProjectsPage() {
  const projects = getProjects();

  return <ProjectsClient projects={projects} />;
}
