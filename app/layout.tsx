import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "studyHybrid | Turn lectures into lasting knowledge",
  description: "Explore a study workspace for timestamped lecture notes, flashcards, and practice quizzes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
