import Link from "next/link"
import { Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Droplet className="h-6 w-6 text-primary" />
          <span className="font-bold">HydroSustain</span>
        </Link>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm">
          <Link href="/events" className="transition hover:text-primary">
            Community Events
          </Link>
          <Link href="/water-sources" className="transition hover:text-primary">
            Water Sources
          </Link>
          <Link href="/monitoring" className="transition hover:text-primary">
            Water Quality
          </Link>
          <Link href="/chatbot" className="transition hover:text-primary">
            AI Assistant
          </Link>
          <Link href="/about" className="transition hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}

