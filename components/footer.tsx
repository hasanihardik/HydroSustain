import { Droplet } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Droplet className="h-6 w-6 text-primary" />
              <span className="font-bold">HydroSustain</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Leveraging technology for a sustainable water future in India
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Initiatives</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/events" className="transition hover:text-primary">
                  Community Events
                </Link>
              </li>
              <li>
                <Link href="/water-sources" className="transition hover:text-primary">
                  Water Sources
                </Link>
              </li>
              <li>
                <Link href="/monitoring" className="transition hover:text-primary">
                  Water Quality
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="transition hover:text-primary">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="transition hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 HydroSustain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

