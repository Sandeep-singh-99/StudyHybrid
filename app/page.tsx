import { Globe } from '@/components/ui/globe'
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import React from 'react'

export default function Home() {
  return (
    <div>
      <AnimatedThemeToggler />
      <Globe/>
    </div>
  )
}
