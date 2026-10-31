
import ProjectCard from "./ProjectCard.jsx";

import bookiImage from "../images/booki.png";
import sophieImage from "../images/sophia bleul.png";
import ninaImage from "../images/nina-carducci.png";
import kasaImage from "../images/kasa.png";
import grimoireImage from "../images/my old grimoire.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <div className="intro">03 / MY WORK</div>

        <div className="project-description">
          <h2>My Projects</h2>
          <p>
            Projects completed throughout my web development training,
            showcasing my experience with frontend and backend development,
            responsive design, optimization, and problem-solving.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="Booki"
          image={bookiImage}
          description="A responsive travel accommodation website built with HTML and CSS."
          technologies="HTML, CSS"
          challenge="Translating a design mockup into a responsive website."
          solution="Used semantic HTML, Flexbox, and media queries to adapt the layout to different screen sizes."
          skills="HTML integration, CSS layouts, responsive design"
        />

        <ProjectCard
          title="Sophie Bluel"
          image={sophieImage}
          description="An interactive portfolio website for an interior designer."
          technologies="JavaScript, HTML, CSS, REST APIs"
          challenge="Making the website dynamic and managing user interactions."
          solution="Used JavaScript to manipulate the DOM, retrieve data from an API, and update the interface dynamically."
          skills="DOM manipulation, API integration, event handling"
        />

        <ProjectCard
          title="Nina Carducci"
          image={ninaImage}
          description="A photography portfolio optimized for performance, accessibility, and SEO."
          technologies="HTML, CSS, JavaScript, Lighthouse"
          challenge="Improving website performance and correcting technical issues."
          solution="Analyzed the website, fixed bugs, and implemented performance, accessibility, and SEO improvements."
          skills="Debugging, performance optimization, accessibility, SEO"
        />

        <ProjectCard
          title="Kasa"
          image={kasaImage}
          description="A responsive apartment rental interface built with React."
          technologies="React, JavaScript, CSS"
          challenge="Managing dynamic property pages without duplicating React components."
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
