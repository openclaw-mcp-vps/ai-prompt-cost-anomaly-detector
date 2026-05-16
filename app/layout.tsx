import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Cost Anomaly Detector — Detect Unusual AI Costs Before Bills Shock",
  description: "Monitor OpenAI and Anthropic usage patterns, detect cost anomalies, get real-time alerts on unusual spikes, and optimize your AI spending."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a8f2c62-fd9b-4bc2-b904-f3889c6c22b6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
