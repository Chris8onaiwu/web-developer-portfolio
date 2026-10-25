function ProjectCard({
  title,
  description,
  technologies,
  challenge,
  solution,
  skills,
  image,
}) {
  return (
    <article className="project-card">
      {image && (
        <img
          className="project-image"
          src={image}
          alt={`${title} screenshot`}
        />
      )}

      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Technologies:</strong> {technologies}
      </p>

      <p>
        <strong>Challenge:</strong> {challenge}
      </p>

      <p>
        <strong>Solution:</strong> {solution}
      </p>

      <p>
        <strong>Skills developed:</strong> {skills}
      </p>
    </article>
  );
}

export default ProjectCard;
