import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects">
      <div className="section-eyebrow">// 02 selected work</div>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects