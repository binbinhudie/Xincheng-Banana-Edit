'use client'

import Link from "next/link"
import { AuthButton } from "@/components/auth-button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl">🍌</span>
          <span className="text-xl font-bold">Xincheng Banana Edit</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
            Pricing
          </Link>
          <Link href="#showcase" className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
            Showcase
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
            FAQ
          </Link>
        </nav>
        <AuthButton />
      </div>
    </header>
  )
}
