"use client"

import { useState } from "react"
import { BookOpen, Check, CircleHelp, Clock3, Layers3, Sparkles } from "lucide-react"

const chapters = [
  { time: "00:00", title: "What is memory?", note: "Memory is the process of encoding, storing and retrieving information." },
  { time: "04:32", title: "Working memory", note: "Working memory holds a small amount of information while you actively use it." },
  { time: "11:08", title: "Long-term memory", note: "Long-term memory stores knowledge and experiences for later retrieval." },
]

const modes = [
  { name: "Notes", icon: BookOpen },
  { name: "Flashcards", icon: Layers3 },
  { name: "Quiz", icon: CircleHelp },
] as const

type StudyMode = (typeof modes)[number]["name"]

export function StudyPreview({ showQuizResults = false }: { showQuizResults?: boolean }) {
  const [chapterIndex, setChapterIndex] = useState(1)
  const [mode, setMode] = useState<StudyMode>("Notes")
  const [flipped, setFlipped] = useState(false)
  const [answer, setAnswer] = useState<string>()
  const chapter = chapters[chapterIndex]

  return (
    <div className="preview-body">
      <div className="lesson">
        <div className="lesson-art" aria-hidden="true">
          <div className="lesson-rings" />
          <Sparkles size={27} strokeWidth={1.4} />
          <span>{chapter.time}</span>
        </div>
        <h3>How memory works</h3>
        <p>Sample lecture · Cognitive psychology</p>
        <div className="chapters" role="group" aria-label="Lecture chapters">
          {chapters.map(({ time, title }, index) => (
            <button key={time} type="button" aria-pressed={chapterIndex === index} onClick={() => {
              setChapterIndex(index)
              setFlipped(false)
              setMode("Notes")
            }}>
              <span>{time}</span>{title}
            </button>
          ))}
        </div>
      </div>
      <div className="study">
        <div className="study-modes" role="group" aria-label="Study tools">
          {modes.map(({ name, icon: Icon }) => (
            <button key={name} type="button" aria-pressed={mode === name} onClick={() => setMode(name)}>
              <Icon size={15} aria-hidden="true" />{name}
            </button>
          ))}
        </div>
        {mode === "Notes" && (
          <div className="study-card">
            <span className="timestamp"><Clock3 size={14} aria-hidden="true" />{chapter.time}</span>
            <h3>{chapter.title}</h3>
            <p>{chapter.note}</p>
            <div className="takeaway"><Check size={16} aria-hidden="true" /><span><strong>Study tip</strong>Use active recall to strengthen what you remember.</span></div>
          </div>
        )}
        {mode === "Flashcards" && (
          <div className="study-card">
            <span className="timestamp">Recall practice</span>
            <h3>{chapter.title}</h3>
            <p aria-live="polite">{flipped ? chapter.note : "Explain this concept in your own words."}</p>
            <button className="action small" type="button" aria-pressed={flipped} onClick={() => setFlipped(!flipped)}>
              {flipped ? "Hide answer" : "Reveal answer"}
            </button>
          </div>
        )}
        {mode === "Quiz" && (
          <div className="study-card">
            <h3>Which type of memory holds information while you use it?</h3>
            <div className="quiz-options" role="group" aria-label="Quiz answers">
              {["Working memory", "Long-term memory"].map((option) => (
                <button key={option} type="button" aria-pressed={answer === option} onClick={() => setAnswer(option)}>{option}</button>
              ))}
            </div>
            <p role="status">{answer && (answer === "Working memory" ? "Correct. Working memory holds information in active use." : "Try again. Long-term memory stores information for later.")}</p>
            {showQuizResults && answer && (
              <dl className="mt-3 flex flex-wrap gap-4 rounded-lg bg-[#edf4e8] p-3 text-sm">
                <div><dt className="font-semibold">Score</dt><dd>{answer === "Working memory" ? "1 / 1" : "0 / 1"}</dd></div>
                <div><dt className="font-semibold">{answer === "Working memory" ? "Topic practiced" : "Topic to review"}</dt><dd>Working memory</dd></div>
              </dl>
            )}
            {answer === "Long-term memory" && (
              <button className="action small" type="button" onClick={() => {
                setChapterIndex(1)
                setMode("Notes")
                setAnswer(undefined)
              }}>Review 04:32</button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
