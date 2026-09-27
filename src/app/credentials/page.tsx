import Navigation from "@/components/Navigation";

export default function CredentialsPage() {
    return (
        <main>
            <Navigation />

            <section className="credentials-page">
                <div className="credentials-grid">
                    <article className="credential-card">
                        <p className="credential-type">DEGREE</p>
                        <h2>B.S. in Earth and Space Exploration</h2>
                        <p className="credential-school">Arizona State University</p>

                        <p className="credential-description">
                            Undergraduate education in Earth and space sciences with coursework
                            spanning mathematics, science, programming, and technical
                            problem-solving.
                        </p>
                    </article>

                    <article className="credential-card">
                        <p className="credential-type">COMPUTER SCIENCE</p>
                        <h2>Graduate Computer Science Preparation</h2>
                        <p className="credential-school">Arizona State University</p>

                        <p className="credential-description">
                            Completing prerequisite computer science coursework in preparation for
                            graduate study, including computer organization and assembly language,
                            with data structures and discrete mathematics planned next.
                        </p>
                    </article>

                    <article className="credential-card">
                        <p className="credential-type">CERTIFICATE</p>
                        <h2>CS50x: Introduction to Computer Science</h2>
                        <p className="credential-school">Harvard University</p>

                        <p className="credential-description">
                            Completed CS50x, including programming fundamentals, algorithms, data
                            structures, memory, Python, SQL, web development, problem sets, and a
                            final software project.
                        </p>

                        <a
                            className="credential-link"
                            href="YOUR-CS50-CERTIFICATE-URL"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Certificate →
                        </a>
                    </article>
                </div>
            </section>
        </main>
    );
}