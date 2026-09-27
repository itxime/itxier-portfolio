import Navigation from "@/components/Navigation";

export default function SkillsPage() {
  return (
    <main>
      <Navigation />

      <section className="skills-page">
  <div className="skills-content">
    <div className="skills-heading">
      <p className="section-label">TECHNICAL SKILLS</p>
      <h1>Tools I use to build software.</h1>

      <p className="skills-intro">
        My experience spans application development, web technologies,
        databases, debugging, and software tooling.
      </p>
    </div>

    <div className="skills-grid">
      <div className="skill-group">
        <h2>Languages</h2>
        <p>Python • C • C++ • JavaScript • TypeScript • HTML • CSS</p>
      </div>

      <div className="skill-group">
        <h2>Frontend</h2>
        <p>React • Next.js</p>
      </div>

      <div className="skill-group">
        <h2>Backend & APIs</h2>
        <p>Flask • FastAPI</p>
      </div>

      <div className="skill-group">
        <h2>Databases</h2>
        <p>SQLite • PostgreSQL • Supabase</p>
      </div>

      <div className="skill-group">
        <h2>Development Tools</h2>
        <p>Git • GitHub • VS Code • Vite</p>
      </div>

      <div className="skill-group">
        <h2>Application Development</h2>
        <p>Tauri • REST APIs • Database-backed applications</p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}