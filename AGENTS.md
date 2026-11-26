<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# StudyHybrid (`study_hybrid`) — Project Guide

> **Hackathon**: `#BuildHybridAI 2026` | **Stack**: Next.js + Firebase AI Logic (hybrid inference)
> **Product Name**: **StudyHybrid** (states the hybrid AI study theme directly)

## Critical Next.js + Hybrid AI Rule

- **Client-side AI only**: Gemini Nano runs inside the user's browser, so **all hybrid AI calls MUST happen in Client Components (`"use client"`)**, never in Server Actions or API routes.
- Use Next.js for UI, routing, and hosting, and keep the AI wrapper strictly client-side.
- Always verify against the official **Firebase AI Logic hybrid inference** documentation before implementing or changing the AI wrapper, as the API is new.
- Also follow the Next.js version-specific docs in `node_modules/next/dist/docs/` before writing Next.js code.

## Feature Roadmap

### Must-have (MVP)
1. **Add a video**: Paste a YouTube link, then provide the transcript by pasting it, uploading a file, or fetching captions where available.
2. **Transcript chunking**: Split long transcripts into sections with timestamps.
3. **AI notes**: Structured notes (headings, key points, definitions) per section.
4. **Flashcards**: Auto-generated, with a flip UI.
5. **Quiz generation**: MCQ plus short-answer questions, with a difficulty selector.
6. **Quiz grading**: MCQs graded in code; short answers graded by AI with a rubric, returning score, feedback, and missed points as JSON.
7. **Results screen**: Total marks, per-topic breakdown, and weak topics.
8. **Hybrid inference with badge**: Each result displays `"ran on-device"` or `"ran in cloud"`.
9. **Firebase basics**: App Check (required), Auth, and Firestore for history.

### Differentiators (High Impact)
10. **Timestamp links**: Wrong answers point to `"rewatch 14:20"` (deep-linked to the video timestamp).
11. **Weak-topic retry**: The next quiz targets only what the user missed.
12. **Spaced repetition** for flashcards.
13. **Offline mode**: Previously generated material is available offline (IndexedDB), and generation works offline when Gemini Nano is available.
14. **Privacy mode**: A toggle that forces local-only processing.
15. **Hindi/Hinglish support**: Test Nano quality first; use the cloud fallback if it is weak.
16. **Remote Config**: Control chunk size, prompt version, and the cloud-escalation threshold.

### Nice-to-have (Only If Time Remains)
17. Export notes as PDF or Markdown.
18. Progress dashboard (streaks, score trends).
19. Share a quiz by link.
20. Dark mode and mobile-friendly layout.

### Scope Cuts (If Short on Time)
- Cut **17–20** first, then **15** (Hindi/Hinglish support), then **16** (Remote Config tuning).
- **Must keep 1–11 and 13**, as these carry the hybrid AI story and the core learning loop.

## Suggested Build Order

1. **Hybrid AI wrapper + inference badge** (`"ran on-device"` / `"ran in cloud"`), tested with a hardcoded transcript.
2. **Notes, flashcards, and quiz generation** with JSON schemas validated by **Zod**.
3. **Grading and results screen** (code-graded MCQs + AI rubric-graded short answers).
4. **Auth and Firestore history**.
5. **Timestamp links** (`"rewatch 14:20"`) and **weak-topic retry**.
6. **Offline storage (IndexedDB) and privacy mode**.
7. **Polish, README, open-source license, and demo video**.

## Submission & Compliance Requirements

- **Public repo** (GitHub or GitLab) with a visible open-source license (**Apache preferred**).
- **Firebase AI Logic** must be actually imported and called in code.
- **App Check enabled** (debug tokens are accepted).
- **Free to use** (no paywall).
- **Demo video**: 3 minutes or less, public on YouTube, in English or with subtitles.
- **Submission description**: Explain how Firebase AI Logic is used, key features, and value proposition.
