import { BookOpen, FileText, SquarePen, X } from "lucide-react"
import { Brand } from "@/components/home/brand"
import type { LectureDraft } from "./lecture-form"

export type Lecture = LectureDraft & { id: number }
type Selection = Lecture | "sample" | null

const row = "flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-[#d7e4d8] hover:bg-[#263f32] aria-[current=true]:bg-[#304b3a] aria-[current=true]:font-semibold aria-[current=true]:text-white"

export function LectureSidebar({ lectures, selection, onSelect, close }: {
  lectures: Lecture[]
  selection: Selection
  onSelect: (selection: Selection) => void
  close?: () => void
}) {
  return (
    <div className="flex h-full flex-col bg-(--forest) px-4 text-[#f4f6ec]">
      <div className="flex shrink-0 items-center justify-between gap-2 pt-4 pb-5 [&_.brand_span]:bg-(--lime)! [&_.brand_span]:text-(--forest)!">
        <Brand href="/" />
        {close && <button type="button" onClick={close} className="grid size-11 shrink-0 place-items-center rounded-lg hover:bg-[#263f32]" aria-label="Close lecture sidebar"><X size={20} aria-hidden="true" /></button>}
      </div>
      <nav aria-label="Lectures" className="flex min-h-0 flex-1 flex-col">
        <button type="button" onClick={() => onSelect(null)} aria-current={selection === null || undefined} className="mb-6 flex min-h-11 shrink-0 items-center gap-3 rounded-lg bg-(--lime) px-3 text-sm font-bold text-(--forest) hover:bg-[#edffad]">
          <SquarePen size={18} aria-hidden="true" /> New lecture
        </button>
        <p className="mb-2 px-3 text-xs font-semibold tracking-wide text-[#b2c7b6]">Lecture history</p>
        <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto px-1 pb-3">
          {lectures.map((lecture) => (
            <li key={lecture.id}>
              <button type="button" onClick={() => onSelect(lecture)} aria-current={selection === lecture || undefined} className={row}>
                <FileText size={17} className="shrink-0" aria-hidden="true" /><span className="truncate">{lecture.title}</span>
              </button>
            </li>
          ))}
          <li>
            <button type="button" onClick={() => onSelect("sample")} aria-current={selection === "sample" || undefined} className={row}>
              <BookOpen size={17} className="shrink-0" aria-hidden="true" /><span>How memory works<span className="block text-xs font-normal text-[#b2c7b6]">Sample lecture</span></span>
            </button>
          </li>
        </ul>
      </nav>
      <p className="shrink-0 border-t border-[#395345] px-2 py-4 text-xs text-[#b2c7b6]">Added lectures stay in this tab.</p>
    </div>
  )
}
