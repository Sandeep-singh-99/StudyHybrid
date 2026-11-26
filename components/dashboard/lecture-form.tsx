import { ArrowRight, Link2 } from "lucide-react"
import type { FormEvent } from "react"

export type LectureDraft = { title: string; videoUrl: string }

const field = "w-full rounded-lg border border-(--line) bg-[#fcfdf9] px-3 py-2.5 text-sm text-(--ink) placeholder:text-[#69776a]"

function youtubeVideoUrl(value: string) {
  const url = URL.parse(value)
  if (!url || !["https:", "http:"].includes(url.protocol)) return null

  let id: string | null = null
  if (url.hostname === "youtu.be") {
    id = url.pathname.slice(1)
  } else if (["www.youtube.com", "youtube.com", "m.youtube.com"].includes(url.hostname)) {
    id = url.pathname === "/watch" ? url.searchParams.get("v") : /^\/(?:shorts|live)\/([^/]+)$/.exec(url.pathname)?.[1] ?? null
  }

  return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? `https://www.youtube.com/watch?v=${id}` : null
}

export function LectureForm({ onAdd }: { onAdd: (lecture: LectureDraft) => void }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { video, title } = event.currentTarget.elements as HTMLFormControlsCollection & {
      video: HTMLInputElement
      title: HTMLInputElement
    }
    const videoUrl = youtubeVideoUrl(video.value.trim())
    video.setCustomValidity(videoUrl ? "" : "Enter a valid YouTube video link.")
    if (!event.currentTarget.reportValidity() || !videoUrl) return

    onAdd({ title: title.value.trim(), videoUrl })
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-(--line) bg-[#fffefd] p-4 shadow-[0_16px_40px_-26px_#223f2960] sm:p-6">
      <label className="grid gap-2 text-sm font-semibold">
        YouTube video link
        <span className="relative">
          <Link2 size={17} aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-(--green)" />
          <input name="video" type="url" inputMode="url" placeholder="https://www.youtube.com/watch?v=…" required className={`${field} pl-9`} onInput={(event) => event.currentTarget.setCustomValidity("")} />
        </span>
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        <span>Lecture title <span className="ml-1 font-normal text-(--quiet)">(optional)</span></span>
        <input name="title" placeholder="e.g. Introduction to psychology" className={field} />
      </label>
      <button type="submit" className="action primary justify-self-stretch sm:justify-self-end">Add lecture <ArrowRight size={16} aria-hidden="true" /></button>
    </form>
  )
}
