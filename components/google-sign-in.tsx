"use client"

import { FirebaseError } from "firebase/app"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth"
import { UserRound } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getFirebaseAuth } from "@/lib/firebase"

export function GoogleSignIn({ label = "Sign in" }: { label?: string }) {
  const [user, setUser] = useState<User | null>()
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState("")

  useEffect(() => {
    try {
      return onAuthStateChanged(getFirebaseAuth(), setUser)
    } catch (error) {
      console.error(error)
      queueMicrotask(() => {
        setUser(null)
        setStatus("Google sign-in is unavailable.")
      })
    }
  }, [])

  async function handleSignIn() {
    setPending(true)
    setStatus("")

    try {
      await signInWithPopup(getFirebaseAuth(), new GoogleAuthProvider())
    } catch (error) {
      if (error instanceof FirebaseError && error.code === "auth/popup-closed-by-user") return

      console.error(error)
      setStatus("Google sign-in failed. Try again.")
    } finally {
      setPending(false)
    }
  }

  if (user) {
    const name = user.displayName || user.email || "Google user"

    return (
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-[#17152c]" role="img" aria-label={`Signed in as ${name}`} title={name}>
        <UserRound aria-hidden="true" size={22} />
        {user.photoURL && (
          <Image
            src={user.photoURL}
            alt=""
            width={44}
            height={44}
            unoptimized
            referrerPolicy="no-referrer"
            className="absolute inset-0 size-full object-cover"
            onError={(event) => { event.currentTarget.hidden = true }}
          />
        )}
      </span>
    )
  }

  return (
    <div className="relative">
      <button type="button" className="action small header-action" disabled={pending || user === undefined} onClick={handleSignIn}>
        {pending ? "Signing in…" : label}
      </button>
      <p role="status" className={status ? "absolute right-0 top-full z-10 mt-2 w-44 rounded-lg bg-[#17152c] p-2 text-sm" : "sr-only"}>{status}</p>
    </div>
  )
}
