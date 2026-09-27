type ProjectCardProps = {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
    projectUrl: string;
};

export default function ProjectCard({
    title,
    category,
    description,
    technologies,
    image,
    projectUrl,
}: ProjectCardProps) {
    return (
        <article className="project-card">
            <img
                className="project-image"
                src={image}
                alt={`${title} project screenshot`}
            />

            <h3>{title}</h3>
            <p>{category}</p>
            <p>{description}</p>

            <div className="project-technologies">
                {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>

                ))}

                <a href={projectUrl} className="project-link">
                    View Project →
                </a>
            </div>
        </article>
    );
}