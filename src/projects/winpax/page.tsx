import { projects } from "./projects";
import orgIcon from "$/assets/images/org-icon.webp";
import Project from "./_components/Project";

// Page never changes
export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="column">
      <div className="column prose mt-12 mb-4 gap-4">
        <img src={orgIcon.src} alt="Winpax Icon" width="150" height="150" />
        <p className="text-xl">
          Creating blazing fast, package management solutions for the Windows
          platform.
        </p>
      </div>

      {projects.map((project, index) => (
        <Project {...project} alternate={index % 2 === 1} key={project.title} />
      ))}
    </main>
  );
}
