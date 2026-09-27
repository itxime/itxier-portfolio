import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main>
            <Navigation />

            <section className="contact-page">
                <div className="contact-content">
                    <p className="section-label">CONTACT</p>

                    <h1>Have a project in mind?</h1>

                    <p className="contact-intro">
                        I&apos;m interested in freelance software development,
                        web applications, automation, and other projects where thoughtful
                        software can solve a real problem.
                    </p>

                    <div className="contact-form-container">
                        <p className="section-label">SEND A MESSAGE</p>
                        <ContactForm />
                    </div>

                    <div className="contact-actions">
                        <a className="contact-primary" href="/projects">
                            Explore Projects
                        </a>

                        <a
                            className="contact-secondary"
                            href="https://github.com/itxime"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}