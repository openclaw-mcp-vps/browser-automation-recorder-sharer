import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecordFlow – Record & Share Browser Automation Scripts",
  description: "Chrome extension that records user actions and generates shareable Playwright/Selenium scripts. Built for QA engineers and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ff1ae751-f746-4034-a68b-a0ad5003989a"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
