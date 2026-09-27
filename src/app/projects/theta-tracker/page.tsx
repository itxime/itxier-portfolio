import Navigation from "@/components/Navigation";

export default function ThetaTrackerProjectPage() {
    return (
        <main>
            <Navigation />

            <section className="project-detail">
                <div className="project-detail-content">

                    <a className="project-back-link" href="/projects">
                        ← All Projects
                    </a>

                    <p className="section-label">FEATURED PROJECT</p>

                    <h1>Theta Tracker</h1>

                    <p className="project-detail-tagline">
                        A desktop options-trading analytics application for tracking positions,
                        performance, risk, and broker-connected portfolio data.
                    </p>

                    <div className="project-tech-list">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Tauri</span>
                        <span>Python</span>
                        <span>FastAPI</span>
                        <span>SQLite</span>
                    </div>

                    <div className="project-detail-grid">
                        <div>
                            <p className="section-label">THE PROJECT</p>

                            <h2>Turning trading data into useful analytics.</h2>

                            <p>
                                Theta Tracker is a desktop options-trading analytics application designed
                                to help users track positions, strategies, performance, and portfolio risk
                                in one place.
                            </p>

                            <p>
                                My work on the application has included feature development, debugging,
                                financial calculations, frontend state issues, database-backed position
                                handling, broker integration, and regression validation across an existing
                                production codebase.
                            </p>
                        </div>

                        <aside className="project-detail-summary">
                            <div>
                                <span>ROLE</span>
                                <strong>Application Developer</strong>
                            </div>

                            <div>
                                <span>TYPE</span>
                                <strong>Desktop Analytics Application</strong>
                            </div>

                            <div>
                                <span>STATUS</span>
                                <strong>Active Development</strong>
                            </div>

                            <div>
                                <span>FOCUS</span>
                                <strong>Trading Analytics &amp; Reliability</strong>
                            </div>
                        </aside>
                    </div>

                    <section className="project-case-study">
                        <p className="section-label">DEVELOPMENT &amp; STABILIZATION</p>

                        <div className="project-case-study-grid">
                            <div className="project-case-study-block">
                                <span className="project-case-study-number">01</span>
                                <p className="section-label">THE CHALLENGE</p>

                                <h2>Financial analytics have to be trustworthy.</h2>

                                <p>
                                    Trading applications combine position data, strategy rules, realized
                                    results, risk calculations, and external broker information. Small
                                    inconsistencies can propagate into misleading analytics, so debugging
                                    requires tracing behavior across multiple layers of the application.
                                </p>
                            </div>

                            <div className="project-case-study-block">
                                <span className="project-case-study-number">02</span>
                                <p className="section-label">THE APPROACH</p>

                                <h2>Trace the data before changing the code.</h2>

                                <p>
                                    I approach issues by reproducing the behavior, identifying the
                                    authoritative data path, comparing expected and actual calculations,
                                    and validating fixes against real application scenarios before
                                    considering the issue resolved.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="project-build">
                        <div className="project-build-heading">
                            <p className="section-label">WHAT I WORKED ON</p>

                            <h2>Across the application stack.</h2>

                            <p>
                                Theta Tracker has involved both new development and stabilization work
                                across portfolio data, analytics, integrations, frontend behavior, and
                                application reliability.
                            </p>
                        </div>

                        <div className="project-build-grid">
                            <div className="project-build-item">
                                <span>01</span>
                                <h3>Portfolio Analytics</h3>
                                <p>
                                    Position and performance calculations for options strategies, including
                                    realized results, risk metrics, and portfolio-level analytics.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>02</span>
                                <h3>Broker Integration</h3>
                                <p>
                                    Integration with Schwab-connected portfolio data and the workflows needed
                                    to reconcile external broker information with local application state.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>03</span>
                                <h3>Debugging &amp; Stabilization</h3>
                                <p>
                                    Diagnosis of calculation discrepancies, frontend state problems, position
                                    handling issues, and regressions across interconnected features.
                                </p>
                            </div>

                            <div className="project-build-item">
                                <span>04</span>
                                <h3>Regression Validation</h3>
                                <p>
                                    Verification against representative application data to ensure fixes
                                    solve the reported problem without changing previously correct behavior.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="project-demo">
                        <div className="project-demo-heading">
                            <p className="section-label">IN ACTION</p>

                            <h2>See Theta Tracker at work.</h2>

                            <p>
                                A short walkthrough of portfolio tracking, options analytics,
                                risk calculations, and broker-connected workflows.
                            </p>
                        </div>

                        <div className="project-demo-placeholder">
                            <span>DEMO COMING SOON</span>
                            <p>Theta Tracker application walkthrough</p>
                        </div>
                    </section>

                    <section className="project-closing">
                        <p className="section-label">WHAT I LEARNED</p>

                        <div className="project-closing-grid">
                            <h2>Debugging starts with understanding the system.</h2>

                            <div className="project-closing-copy">
                                <p>
                                    Working on Theta Tracker has strengthened my ability to investigate
                                    problems across an existing application rather than treating each
                                    issue as an isolated bug. A calculation shown in the interface may
                                    depend on database records, strategy logic, API data, backend
                                    processing, and frontend state.
                                </p>

                                <p>
                                    The project has reinforced the importance of reproducing problems,
                                    identifying authoritative data, validating assumptions, and testing
                                    fixes against realistic scenarios before changing behavior in an
                                    interconnected system.
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