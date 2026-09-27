import Navigation from "@/components/Navigation";

export default function MindDeckProjectPage() {
  return (
    <main>
      <Navigation />

      <section className="project-detail">
        <div className="project-detail-content">

          <a className="project-back-link" href="/projects">
            ← All Projects
          </a>

          <p className="section-label">FEATURED PROJECT</p>

          <h1>MindDeck</h1>

          <p className="project-detail-tagline">
            An interactive flashcard study application built to make
            active recall more engaging.
          </p>

          <div className="project-tech-list">
            <span>Python</span>
            <span>Flask</span>
            <span>SQLite</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
          </div>

          <div className="project-detail-grid">
            <div>
              <p className="section-label">THE PROJECT</p>

              <h2>Learning through active interaction.</h2>

              <p>
                MindDeck is an interactive flashcard study application
                developed as my CS50x final project. It combines traditional
                flashcard study with a game-oriented experience designed to
                make reviewing material more active and engaging.
              </p>

              <p>
                Users can create and study flashcards, reveal answer choices,
                receive immediate feedback, and work through study material
                using a structured interface backed by persistent data.
              </p>
            </div>

            <aside className="project-detail-summary">
              <div>
                <span>ROLE</span>
                <strong>Full-Stack Developer</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>Web Application</strong>
              </div>

              <div>
                <span>BUILT FOR</span>
                <strong>Harvard CS50x Final Project</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Learning &amp; Study Tools</strong>
              </div>
            </aside>
          </div>

          <section className="project-case-study">
            <p className="section-label">DESIGN & DEVELOPMENT</p>

            <div className="project-case-study-grid">
              <div className="project-case-study-block">
                <span className="project-case-study-number">01</span>
                <p className="section-label">THE CHALLENGE</p>

                <h2>Make studying feel less passive.</h2>

                <p>
                  Traditional flashcards are useful for active recall, but the
                  experience can become repetitive. MindDeck was designed around the
                  idea that studying should require interaction and give learners
                  immediate feedback as they work through material.
                </p>
              </div>

              <div className="project-case-study-block">
                <span className="project-case-study-number">02</span>
                <p className="section-label">THE SOLUTION</p>

                <h2>Turn each card into an interaction.</h2>

                <p>
                  Instead of simply revealing an answer, MindDeck guides the learner
                  through a question-and-answer flow. Users reveal choices, make a
                  selection, and immediately see whether their response was correct,
                  creating a more active study experience.
                </p>
              </div>
            </div>
          </section>

          <section className="project-build">
            <div className="project-build-heading">
              <p className="section-label">WHAT I BUILT</p>

              <h2>
                From interface to database.
              </h2>

              <p>
                MindDeck was built as a full-stack application, with the study
                experience connected to backend logic and persistent data rather than
                functioning as a static prototype.
              </p>
            </div>

            <div className="project-build-grid">
              <div className="project-build-item">
                <span>01</span>
                <h3>Study Experience</h3>
                <p>
                  Interactive flashcard flows with answer reveals, choices, and
                  immediate correct or incorrect feedback.
                </p>
              </div>

              <div className="project-build-item">
                <span>02</span>
                <h3>Flask Backend</h3>
                <p>
                  Python and Flask handle application routes, user actions, and the
                  server-side logic behind the study experience.
                </p>
              </div>

              <div className="project-build-item">
                <span>03</span>
                <h3>Persistent Data</h3>
                <p>
                  SQLite provides persistent storage for application data and connects
                  the interface to a database-backed workflow.
                </p>
              </div>

              <div className="project-build-item">
                <span>04</span>
                <h3>Responsive Interface</h3>
                <p>
                  HTML, CSS, and JavaScript create the interactive frontend and visual
                  feedback throughout the application.
                </p>
              </div>
            </div>
          </section>

          <section className="project-demo">
            <div className="project-demo-heading">
              <p className="section-label">IN ACTION</p>
              <h2>See MindDeck at work.</h2>
              <p>
                A short walkthrough of the study flow, interactive answer states,
                and feedback experience.
              </p>
            </div>

            <div className="project-demo-placeholder">
              <span>DEMO COMING SOON</span>
              <p>MindDeck product walkthrough</p>
            </div>
          </section>

          <section className="project-closing">
            <p className="section-label">WHAT I LEARNED</p>

            <div className="project-closing-grid">
              <h2>Building the pieces into one application.</h2>

              <div className="project-closing-copy">
                <p>
                  MindDeck brought together the concepts I learned throughout CS50x
                  into one complete application. Building it required me to connect
                  frontend interactions with server-side logic, database persistence,
                  and the overall user experience.
                </p>

                <p>
                  More importantly, the project gave me experience taking an idea from
                  concept to working software — making design decisions, debugging
                  problems across different parts of the application, and iterating on
                  the experience as the project developed.
                </p>
              </div>
            </div>

            <div className="project-closing-actions">
              <a
                className="project-primary-link"
                href="https://github.com/itxime/MindDeck"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub ↗
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