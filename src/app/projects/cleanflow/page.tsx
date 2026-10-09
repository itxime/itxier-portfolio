import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import styles from "./cleanflow.module.css";

export const metadata: Metadata = {
    title: "CleanFlow | Itxier Meziani",
    description: "A CSV-cleaning application with text-preserving import, reusable Python processing, duplicate review, explicit removal confirmation, and verified exports.",
};

export default function CleanFlowProjectPage() {
    return (
        <main className={styles.shell}>
            <Navigation />
            <section className="project-detail">
                <div className="project-detail-content">
                    <Link className="project-back-link" href="/projects">← All Projects</Link>
                    <p className="section-label">FEATURED PROJECT</p>
                    <h1>CleanFlow</h1>
                    <p className="project-detail-tagline">
                        Clean, validate, and standardize messy business data while keeping every change reviewable.
                    </p>
                    <div className="project-tech-list">
                        {['Python', 'Pandas', 'Streamlit', 'React', 'TypeScript'].map(technology => <span key={technology}>{technology}</span>)}
                    </div>
                    <div className="project-closing-actions">
                        <Link className="project-primary-link" href="/projects/cleanflow/demo">Try Interactive Demo →</Link>
                    </div>
                    <div className="project-detail-grid">
                        <div>
                            <p className="section-label">THE PROJECT</p>
                            <h2>Make messy customer records easier to review.</h2>
                            <p>
                                CSV files can contain inconsistent whitespace, email casing, HTML markup,
                                and repeated records. CleanFlow separates cleaning from duplicate review
                                and asks for explicit confirmation before removing eligible duplicates.
                            </p>
                            <p>
                                The existing Python application validates CSV input and preserves text values,
                                including leading-zero identifiers. The shared React interface uses a processing
                                adapter, so its sample demonstration can run without a Python hosting service.
                            </p>
                        </div>
                        <aside className="project-detail-summary">
                            <div><span>TYPE</span><strong>CSV Cleaning Application</strong></div>
                            <div><span>DEMO</span><strong>Fictional Sample Data</strong></div>
                            <div><span>FOCUS</span><strong>Data Integrity &amp; Explicit Review</strong></div>
                        </aside>
                    </div>
                    <section className="project-build">
                        <div className="project-build-heading">
                            <p className="section-label">KEY FEATURES</p>
                            <h2>A workflow built around data integrity.</h2>
                            <p>Preview the original and cleaned records, understand matching criteria, and inspect a removal proposal before approving it.</p>
                        </div>
                        <div className="project-build-grid">
                            <div className="project-build-item"><span>01</span><h3>Field Cleaning</h3><p>Trim whitespace, normalize email addresses, and remove HTML tags and decode entities using the existing Python engine.</p></div>
                            <div className="project-build-item"><span>02</span><h3>Duplicate Review</h3><p>Match on one or more columns and review the potential duplicate records without changing the dataset.</p></div>
                            <div className="project-build-item"><span>03</span><h3>Explicit Confirmation</h3><p>Preview First or Last retention. Missing matching values are protected, and changing relevant settings revokes approval.</p></div>
                            <div className="project-build-item"><span>04</span><h3>Verified CSV Export</h3><p>Download the active final sample dataset using exact Python-generated UTF-8 CSV bytes.</p></div>
                        </div>
                    </section>
                    <section className="project-demo">
                        <div className="project-demo-heading">
                            <p className="section-label">TRY THE WORKFLOW</p>
                            <h2>Seven fictional records. A complete review flow.</h2>
                            <p>The public demonstration uses prepared Python results. Customer CSV uploads are part of the existing local Python application, not this portfolio demo.</p>
                        </div>
                        <div className="project-closing-actions"><Link className="project-primary-link" href="/projects/cleanflow/demo">Try Interactive Demo →</Link></div>
                    </section>
                </div>
            </section>
        </main>
    );
}
