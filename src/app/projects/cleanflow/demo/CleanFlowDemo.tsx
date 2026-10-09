"use client";

import { useState } from "react";
import { CleanFlowDashboard, SampleProcessingAdapter } from "cleanflow-ui";
import "cleanflow-ui/styles.css";

export default function CleanFlowDemo() {
    const [adapter] = useState(() => new SampleProcessingAdapter());
    return <CleanFlowDashboard adapter={adapter} embedded theme="light" showDemoMessage />;
}
