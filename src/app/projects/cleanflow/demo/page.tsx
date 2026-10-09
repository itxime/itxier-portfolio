import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import CleanFlowDemo from "./CleanFlowDemo";
import styles from "./demo.module.css";
import layout from "../cleanflow.module.css";

export const metadata: Metadata = {
    title: "CleanFlow Interactive Demo | Itxier Meziani",
    description: "Try CleanFlow with fictional customer data: clean fields, review duplicates, confirm removal, and download a CSV.",
};

export default function CleanFlowDemoPage() {
    return (
        <main className={layout.shell}>
            <Navigation />
            <section className={`project-detail ${styles.demo}`}>
                <div className="project-detail-content">
                    <Link className="project-back-link" href="/projects/cleanflow">← About CleanFlow</Link>
                    <p className="section-label">INTERACTIVE SAMPLE DEMO</p>
                    <h1>Try CleanFlow</h1>
                    <p className="project-detail-tagline">
                        Explore the cleaning workflow with seven fictional customer records.
                        This demo accepts no uploads and processes sample results in your browser.
                    </p>
                    <div className={styles.dashboard}>
                        <CleanFlowDemo />
                    </div>
                </div>
            </section>
        </main>
    );
}
