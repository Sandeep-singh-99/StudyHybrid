"use client"

import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirebaseAuth } from "@/lib/firebase"

export default function GoogleSignIn() {
  const [status, setStatus] = useState("")
  const [pending, setPending] = useState(false)

  async function handleSignIn() {
    setPending(true)
    setStatus("")

    try {
      const { user } = await signInWithPopup(
        getFirebaseAuth(),
        new GoogleAuthProvider()
      )
      setStatus(`Signed in as ${user.displayName ?? user.email ?? "Google user"}.`)
    } catch (error) {
      console.error(error)
      setStatus("Google sign-in failed. Check the browser console for details.")
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <button type="button" disabled={pending} onClick={handleSignIn}>
        {pending ? "Signing in…" : "Continue with Google"}
      </button>
      <p role="status">{status}</p>
    </div>
  )
}
