"use client"

import { ArrowUpRight, BookOpen, FileText, Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { useRef, useState } from "react"
import { StudyPreview } from "@/components/home/study-preview"
import { LectureForm, type LectureDraft } from "./lecture-form"
import { LectureSidebar, type Lecture } from "./lecture-sidebar"

const iconButton = "size-11 shrink-0 place-items-center rounded-lg text-(--green) hover:bg-[#e8eee2]"

export function Dashboard() {
  const [lectures, setLectures] = useState<Lecture[]>([])
  const [selection, setSelection] = useState<Lecture | "sample" | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const mobileSidebar = useRef<HTMLDialogElement>(null)
  const main = useRef<HTMLElement>(null)

  function selectLecture(next: typeof selection) {
    setSelection(next)
    mobileSidebar.current?.close()
    main.current?.focus()
  }

  function addLecture(draft: LectureDraft) {
    const id = lectures.length + 1
    const lecture = { ...draft, id, title: draft.title || `Lecture ${id}` }
    setLectures([lecture, ...lectures])
    selectLecture(lecture)
  }

  const sidebarProps = { lectures, selection, onSelect: selectLecture }
  const ToggleIcon = sidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <div className="landing flex min-w-0">
      <a className="skip-link" href="#dashboard">Skip to content</a>
      <aside id="lecture-sidebar" aria-label="Lecture sidebar" hidden={!sidebarOpen} className="sticky top-0 h-dvh w-64 shrink-0 max-md:hidden">
        <LectureSidebar {...sidebarProps} />
      </aside>
      <dialog ref={mobileSidebar} id="mobile-lecture-sidebar" aria-label="Lecture sidebar" className="fixed inset-y-0 left-0 m-0 h-dvh max-h-none w-72 max-w-[calc(100%_-_3rem)] overflow-hidden bg-(--forest) backdrop:bg-[#0b1b13]/55" onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}>
        <LectureSidebar {...sidebarProps} close={() => mobileSidebar.current?.close()} />
      </dialog>

      <div className="min-w-0 flex-1">
        <header className="flex items-center gap-2 border-b border-(--line) bg-[#fbfaf3] px-3 py-2 sm:px-5">
          <button type="button" className={`${iconButton} hidden md:inline-grid`} onClick={() => setSidebarOpen(!sidebarOpen)} aria-expanded={sidebarOpen} aria-controls="lecture-sidebar" aria-label={sidebarOpen ? "Collapse lecture sidebar" : "Expand lecture sidebar"}>
            <ToggleIcon size={19} aria-hidden="true" />
          </button>
          <button type="button" className={`${iconButton} inline-grid md:hidden`} onClick={() => mobileSidebar.current?.showModal()} aria-controls="mobile-lecture-sidebar" aria-haspopup="dialog" aria-label="Open lecture sidebar">
            <Menu size={20} aria-hidden="true" />
          </button>
          <span className="text-sm font-bold text-(--forest)">Study workspace</span>
        </header>

        <main ref={main} id="dashboard" tabIndex={-1} className="mx-auto w-full max-w-5xl px-4 py-9 sm:px-8 sm:py-13">
          {selection === null ? (
            <div className="mx-auto max-w-2xl">
              <header className="mb-7 text-center sm:mb-9">
                <span className="mx-auto mb-5 grid size-13 place-items-center rounded-2xl border border-[#c9d8bd] bg-[#e8efdf] text-(--green)"><BookOpen size={24} aria-hidden="true" /></span>
                <h1 className="font-(family-name:--serif) text-4xl leading-tight tracking-tight sm:text-5xl">What are you studying?</h1>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-(--quiet) sm:text-base">Paste a YouTube link to add a lecture to your workspace.</p>
              </header>
              <LectureForm onAdd={addLecture} />
              <p className="mt-5 text-center text-sm">
                <button type="button" className="min-h-11 font-semibold text-(--green) underline underline-offset-4" onClick={() => selectLecture("sample")}>Try the sample lecture</button>
              </p>
            </div>
          ) : selection === "sample" ? (
            <>
              <header className="mb-6">
                <p className="mb-2 text-xs font-bold tracking-widest text-(--green) uppercase">Sample lecture</p>
                <h1 className="font-(family-name:--serif) text-4xl tracking-tight sm:text-5xl">How memory works</h1>
                <p className="mt-3 text-sm text-(--quiet) sm:text-base">Review the timestamped notes, flip a flashcard, or take the practice quiz.</p>
              </header>
              <div className="rounded-xl border border-(--line) bg-[#fffefd]"><StudyPreview showQuizResults /></div>
            </>
          ) : (
            <>
              <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <h1 className="font-(family-name:--serif) text-4xl tracking-tight wrap-anywhere sm:text-5xl">{selection.title}</h1>
                <a className="action small" href={selection.videoUrl} target="_blank" rel="noreferrer">Watch on YouTube <ArrowUpRight size={16} aria-hidden="true" /></a>
              </header>
              <section aria-labelledby="materials-title" className="rounded-xl border border-(--line) bg-[#fffefd] p-5 sm:p-7">
                <h2 id="materials-title" className="flex items-center gap-2 text-lg font-bold"><FileText size={19} aria-hidden="true" /> Study materials</h2>
                <p className="mt-3 text-sm text-(--quiet)">Automatic transcript extraction is unavailable.</p>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
