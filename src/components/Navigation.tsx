import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="main-navigation">
            {/* Brand */}
            <Link href="/" className="navigation-brand">
                ITXIER MEZIANI
            </Link>

            {/* Navigation links */}
            <div className="navigation-links">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/skills">Skills</Link>                 
                <Link href="/credentials">Credentials</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}