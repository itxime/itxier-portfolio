import Navigation from "@/components/Navigation";

export default function SocratesProjectPage() {
    return (
        <main>
            <Navigation />

            <section className="project-detail">
                <div className="project-detail-content">

                    <a className="project-back-link" href="/projects">
                        ← All Projects
                    </a>

                    <p className="section-label">FEATURED PROJECT</p>

                    <h1>Socrates</h1>

                    <p className="project-detail-tagline">
                        A full-stack learning platform for creating, organizing, and studying
                        structured educational content.
                    </p>

                    <div className="project-tech-list">
                        <span>Next.js</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Supabase</span>
                        <span>PostgreSQL</span>
                    </div>

                    <div className="project-detail-grid">
                        <div>
                            <p className="section-label">THE PROJECT</p>

                            <h2>Building a platform for structured learning.</h2>

                            <p>
                                Socrates is a full-stack educational platform designed around creating,
                                organizing, and studying structured learning material. It combines a
                                learner-facing study experience with tools for managing and publishing
                                educational content.
                            </p>

                            <p>
                                As the platform has grown, the project has required work across the
                                frontend, database, authentication and authorization, content-management
                                workflows, production migrations, and deployment.
                            </p>
                        </div>

                        <aside className="project-detail-summary">
                            <div>
                                <span>ROLE</span>
                                <strong>Full-Stack Developer</strong>
                            </div>

                            <div>
                                <span>TYPE</span>
                                <strong>Educational Platform</strong>
                            </div>

                            <div>
                                <span>STATUS</span>
                                <strong>Active Development</strong>
                            </div>

                            <div>
                                <span>FOCUS</span>
                                <strong>Learning &amp; Content Management</strong>
                            </div>
                        </aside>

                    </div>

                    <section className="project-case-study">
                        <p className="section-label">DESIGN &amp; DEVELOPMENT</p>

                        <div className="project-case-study-grid">
                            <div className="project-case-study-block">
                                <span className="project-case-study-number">01</span>
                                <p className="section-label">THE CHALLENGE</p>

                                <h2>Organize learning without losing flexibility.</h2>

                                <p>
                                    Educational content quickly becomes difficult to manage as subjects,
                                    topics, users, permissions, and different learning workflows are
                                    introduced. Socrates needed a structure that could grow while keeping
                                    the learner experience straightforward.
                                </p>
                            </div>

                            <div className="project-case-study-block">
                                <span className="project-case-study-number">02</span>
                                <p className="section-label">THE SOLUTION</p>

                                <h2>Separate learning from content creation.</h2>

                                <p>
                                    Socrates combines a learner-facing experience with dedicated content
                                    management tools. Creator Studio provides controlled workflows for
                                    building and organizing learning material while role-based access
                                    determines what learners, editors, and administrators can do.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="project-build">
                        <div className="project-build-heading">
                            <p className="section-label">WHAT I BUILT</p>

                            <h2>More than the interface.</h2>

                            <p>
                                Socrates has required work across the full application stack, from
                                user-facing learning experiences to database security, content-management
                                workflows, and production deployment.
                            </p>
                        </div>

                        <div className="project-build-grid">
                            <div className="project-build-item">
                                <span>01</span>
                                <h3>Creator Studio</h3>
                                <p>
                                    Content-management workflows for creating, organizing, and maintaining
                                    structured educational material.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>02</span>
                                <h3>Role-Based Access</h3>
                                <p>
                                    Learner, editor, and administrator roles with database-backed permissions
                                    controlling access to application features and content.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>03</span>
                                <h3>Database Architecture</h3>
                                <p>
                                    PostgreSQL and Supabase support structured content, user data, security
                                    policies, and evolving application workflows.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>04</span>
                                <h3>Production Delivery</h3>
                                <p>
                                    Database migrations, production verification, deployment, and regression
                                    testing support changes as the platform continues to evolve.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="project-demo">
                        <div className="project-demo-heading">
                            <p className="section-label">IN ACTION</p>
                            <h2>See Socrates at work.</h2>
                            <p>
                                A short walkthrough of the learner experience, structured content,
                                and Creator Studio workflows.
                            </p>
                        </div>

                        <div className="project-demo-placeholder">
                            <span>DEMO COMING SOON</span>
                            <p>Socrates product walkthrough</p>
                        </div>
                    </section>

                    <section className="project-closing">
                        <p className="section-label">WHAT I LEARNED</p>

                        <div className="project-closing-grid">
                            <h2>Building for growth changes how you think.</h2>

                            <div className="project-closing-copy">
                                <p>
                                    Socrates has given me experience working on a software system
                                    that continues to evolve after its initial implementation.
                                    New features have required changes across the frontend,
                                    database schema, permissions, and production environment.
                                </p>

                                <p>
                                    The project has strengthened my approach to debugging,
                                    database migrations, access control, regression testing, and
                                    making changes carefully when real application data and
                                    existing workflows must be preserved.
                                </p>
                            </div>
                        </div>

                        <div className="project-closing-actions">
                            <a className="project-secondary-link" href="/projects">
                                ← Back to Projects
                            </a>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}