function ProjectCard(props) {
    return (
        <div className="project-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noreferrer">
                View On GitHub
            </a>
        </div>
    );
}
export default ProjectCard;