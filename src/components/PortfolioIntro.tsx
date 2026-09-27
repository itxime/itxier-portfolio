
import Link from "next/link";

export default function PortfolioIntro() {
    return (
        <section className="portfolio-intro">
            <p className="intro-name">ITXIER MEZIANI</p>

            <h1>I build software that solves real problems.</h1>

            <p className="intro-description">
                I build practical, reliable software — from educational applications
                to data-driven tools — with a focus on clean design and thoughtful
                problem-solving.
            </p>

            {/* Specialties */}
            <p className="intro-specialties">
                Python • Web Applications • Automation • Full-Stack Development
            </p>

            {/* Call-to-Action Buttons */}

            <div className="intro-actions">
                <a href="/projects" className="primary-action">
                    View My Work
                </a>

                <Link href="/contact" className="secondary-action">
                    Contact Me
                </Link>
            </div>

        </section>


    );
}