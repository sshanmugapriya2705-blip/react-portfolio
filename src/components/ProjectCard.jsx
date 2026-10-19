function ProjectCard({ title, description, link }) {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">
                View Project
            </a>
        </div>
    );
}

export default ProjectCard;