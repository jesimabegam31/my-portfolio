import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-container">
                <ProjectCard
                    title="Portfolio Website"
                    description="Personal portfolio built using React and CSS."

                    link="https://github.com/yourusername/portfolio"
                />
            <ProjectCard
                    title="To-Do App"
                    description="Task Management App build with React."

                    link="https://github.com/yourusername/todo-app"
                />
            <ProjectCard
                    title="weather App"
                    description="Weather app using API and React."

                    link="https://github.com/yourusername/portfolio"
                />    
            
            </div>
        </section>
    );
}
export default Projects;