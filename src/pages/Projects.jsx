import ProjectCard from "../components/ProjectCard";

function Projects() {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description:
                "A personal portfolio website built using React to showcase my projects, skills, and learning journey.",
            link: "#",
        },
        {
            title: "Car Parking Booking Website",
            description:
                "A website designed to help users explore parking options and book parking spaces conveniently.",
            link: "#",
        },
        {
            title: "SkillBridge",
            description:
                "A project designed to connect students with real-world community projects based on their skill levels and interests.",
            link: "#",
        },
    ];

    return (
        <section className="projects">
            <h1>My Projects</h1>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;