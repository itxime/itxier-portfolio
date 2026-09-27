import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
    return (
        <section id="projects" className="featured-projects">
            <h2>Featured Projects</h2>

            <div className="projects-grid">
                <ProjectCard
                    title="MindDeck"
                    category="Flashcard Study Application"
                    description="A database-backed study application with interactive flashcards, progress tracking, saved cards, and custom study workflows."
                    technologies={["Python", "Flask", "SQLite", "JavaScript"]}
                    image="/images/minddeck/dashboard.png"
                    projectUrl="/projects/minddeck"
                />

                <ProjectCard
                    title="Socrates"
                    category="Educational Platform"
                    description="A concept-based learning platform with database-driven content, role-based access, study workflows, and content-management tools."
                    technologies={["Next.js", "React", "TypeScript", "Supabase"]}
                    image="/images/socrates/dashboard.png"
                    projectUrl="/projects/socrates"
                />

                <ProjectCard
                    title="Theta Tracker"
                    category="Options Trading Analytics"
                    description="Application development and stabilization for an options-trading analytics platform, including position handling, analytics, risk calculations, frontend state issues, and regression validation."
                    technologies={["React", "TypeScript", "Tauri"]}
                    image="/images/theta-tracker/dashboard.png"
                    projectUrl="/projects/theta-tracker"
                />

                <ProjectCard
                    title="Starry Atlantic Pleiades"
                    category="Astrophotography Website & Planning Tools"
                    description="A live astrophotography website featuring interactive planning tools, field-of-view simulation, equipment resources, educational content, and e-commerce."
                    technologies={["JavaScript", "HTML", "CSS", "Cloudflare"]}
                    image="/images/starry-atlantic/homepage.png"
                    projectUrl="/projects/starry-atlantic-pleiades"
                />
            </div>
        </section>
    );
}