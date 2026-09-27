import Navigation from "@/components/Navigation";

export default function StarryAtlanticPleiadesProjectPage() {
    return (
        <main>
            <Navigation />

            <section className="project-detail">
                <div className="project-detail-content">

                    <a className="project-back-link" href="/projects">
                        ← All Projects
                    </a>

                    <p className="section-label">FEATURED PROJECT</p>

                    <h1>Starry Atlantic Pleiades</h1>

                    <p className="project-detail-tagline">
                        An astrophotography website combining interactive planning tools,
                        educational resources, field notes, and a public-facing observatory experience.
                    </p>

                    <div className="project-tech-list">
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Cloudflare</span>
                        <span>APIs</span>
                        <span>Resend</span>
                    </div>

                    <div className="project-detail-grid">
                        <div>
                            <p className="section-label">THE PROJECT</p>

                            <h2>Turning an astrophotography website into an interactive experience.</h2>

                            <p>
                                Starry Atlantic Pleiades began as an astrophotography-focused website
                                and grew into a broader observatory experience combining photography,
                                educational content, field notes, and interactive planning tools.
                            </p>

                            <p>
                                The site includes tools for planning observing and imaging sessions,
                                exploring potential targets, evaluating equipment and field of view,
                                accessing educational resources, and interacting with a production
                                website backed by server-side services and third-party integrations.
                            </p>
                        </div>

                        <aside className="project-detail-summary">
                            <div>
                                <span>ROLE</span>
                                <strong>Web Developer</strong>
                            </div>

                            <div>
                                <span>TYPE</span>
                                <strong>Website &amp; Planning Platform</strong>
                            </div>

                            <div>
                                <span>STATUS</span>
                                <strong>Live</strong>
                            </div>

                            <div>
                                <span>FOCUS</span>
                                <strong>Astrophotography &amp; Interactive Tools</strong>
                            </div>
                        </aside>
                    </div>

                    <section className="project-case-study">
                        <p className="section-label">DESIGN &amp; DEVELOPMENT</p>

                        <div className="project-case-study-grid">
                            <div className="project-case-study-block">
                                <span className="project-case-study-number">01</span>
                                <p className="section-label">THE CHALLENGE</p>

                                <h2>Make complex planning information useful.</h2>

                                <p>
                                    Astrophotography planning involves location, sky conditions,
                                    celestial targets, equipment, framing, timing, and other variables.
                                    Presenting that information without overwhelming the user required
                                    turning technical data into focused planning experiences.
                                </p>
                            </div>

                            <div className="project-case-study-block">
                                <span className="project-case-study-number">02</span>
                                <p className="section-label">THE APPROACH</p>

                                <h2>Build tools around real observing decisions.</h2>

                                <p>
                                    Rather than presenting astronomy data in isolation, the site organizes
                                    tools around practical questions: what to photograph, when conditions
                                    are favorable, how a target fits the equipment, and what information
                                    is useful before heading into the field.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="project-build">
                        <div className="project-build-heading">
                            <p className="section-label">WHAT I BUILT</p>

                            <h2>A website that does more than display content.</h2>

                            <p>
                                The project combines a public-facing visual experience with interactive
                                planning features, external services, server-side functionality, and
                                production infrastructure.
                            </p>
                        </div>

                        <div className="project-build-grid">
                            <div className="project-build-item">
                                <span>01</span>
                                <h3>Astrophotography Planning</h3>
                                <p>
                                    Interactive tools for exploring targets, planning observing sessions,
                                    evaluating conditions, and preparing for imaging in the field.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>02</span>
                                <h3>Field-of-View Tools</h3>
                                <p>
                                    Equipment-aware planning experiences that help visualize how celestial
                                    targets relate to cameras, lenses, and imaging configurations.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>03</span>
                                <h3>Content &amp; Commerce</h3>
                                <p>
                                    Educational resources, astrophotography field notes, galleries, and
                                    commerce-oriented experiences integrated into one cohesive website.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>04</span>
                                <h3>Production Infrastructure</h3>
                                <p>
                                    Cloudflare deployment, server-side APIs, email delivery, domain
                                    configuration, and integrations that support the live website.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="project-demo">
                        <div className="project-demo-heading">
                            <p className="section-label">IN ACTION</p>

                            <h2>Explore the observatory.</h2>

                            <p>
                                A short walkthrough of the website, planning dashboard,
                                astrophotography tools, and educational experience.
                            </p>
                        </div>

                        <div className="project-demo-placeholder">
                            <span>DEMO COMING SOON</span>
                            <p>Starry Atlantic Pleiades walkthrough</p>
                        </div>
                    </section>

                    <section className="project-closing">
                        <p className="section-label">WHAT I LEARNED</p>

                        <div className="project-closing-grid">
                            <h2>A website can become a software product.</h2>

                            <div className="project-closing-copy">
                                <p>
                                    Starry Atlantic Pleiades taught me how quickly a traditional website
                                    can evolve once interactive tools, external services, server-side
                                    functionality, and real user workflows are introduced.
                                </p>

                                <p>
                                    Building and operating the site has given me experience connecting
                                    frontend design with APIs, deployment infrastructure, domain and DNS
                                    configuration, email delivery, testing, and the ongoing maintenance
                                    required by a live production project.
                                </p>
                            </div>
                        </div>

                        <div className="project-closing-actions">
                            <a
                                className="project-primary-link"
                                href="https://starryatlanticpleiades.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Live Site ↗
                            </a>

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