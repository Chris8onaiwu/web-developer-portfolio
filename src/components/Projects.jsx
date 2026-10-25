import ProjectCard from "./ProjectCard.jsx";
import kasaImage from "../images/kasa.png";
import grimoireImage from "../images/my old grimoire.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <div className="intro">03 / SELECTED WORK</div>
        <div className="project-description">
          <h2>My Projects</h2>
          <p>
            A selection of projects showing my experience with frontend and
            backend development.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="Kasa"
          image={kasaImage}
          description="A responsive apartment rental interface built with React."
          technologies="React, JavaScript, CSS"
          challenge=" Managing dynamic property pages without duplicating React components"
          solution="Used React Router and reusable components to display property information dynamically."
          skills="React components, routing, responsive design"
        />

        <ProjectCard
          title="Mon Vieux Grimoire"
          image={grimoireImage}
          description="A REST API for a book review platform."
          technologies="Node.js, Express, MongoDB"
          challenge="Implementing secure user authentication and protecting API endpoints."
          solution="Used bcrypt for password hashing and JWT middleware to authenticate requests and protect routes."
          skills="REST APIs, database management, security"
        />
      </div>
    </section>
  );
}

export default Projects;
