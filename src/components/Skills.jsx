function Skills() {
  return (
    <section id="skills" className="skills">
      <div>
        <div className="intro">02 / MY TOOLKIT</div>
        <h2>Skills</h2>
        <div>
          Tools I’ve used to bring web projects from idea to implementation.
        </div>
        <div className="skills-box">
          <div className="skills-card">
            <div className="intro">01</div>
            <div>Frontend</div>
            <div className="skills-tags">
              <div className="skill-tag">HTML</div>
              <div className="skill-tag">CSS</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">React</div>
            </div>
          </div>

          <div className="skills-card">
            <div className="intro">02</div>
            <div>Backend</div>
            <div className="skills-tags">
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">Express</div>
              <div className="skill-tag">MongDB</div>
              <div className="skill-tag">REST APIs</div>
            </div>
          </div>

          <div className="skills-card">
            <div className="intro">03</div>
            <div>Workflow & tools</div>
            <div className="skills-tags">
              <div className="skill-tag">Git & GitHub</div>
              <div className="skill-tag">Responsive design</div>
              <div className="skill-tag">Postman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
