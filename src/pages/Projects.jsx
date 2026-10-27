import ProjectCard from "../components/ProjectCard";

function Projects() {
    const projects = [
        
        {
            title: "Car Parking Booking Website",
            description:
                "A website designed to help users explore parking options and book parking spaces conveniently.",
            link: "https://github.com/sshanmugapriya2705-blip/ParkEase",
        },
        {
            title: "SkillBridge",
            description:
                "A project designed to connect students with real-world community projects based on their skill levels and interests.",
            link: "https://github.com/sshanmugapriya2705-blip/SkillBridge",
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