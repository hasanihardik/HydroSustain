import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Droplet, Globe, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
  className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://www.billboard.com/wp-content/uploads/media/ocean-g-billboard-1548.jpg?w=942&h=623&crop=1')" }} // Make sure to use the correct path
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="container relative z-10 text-center">
    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
      Smart Water Conservation <br />
      for a Sustainable India
    </h1>
    <p className="mx-auto mt-6 max-w-[600px] text-lg text-white">
      Leveraging technology and community engagement to solve India's water crisis through innovative solutions
      and sustainable practices.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button size="lg" asChild>
        <Link href="/events">Join Our Community</Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <Link href="/about">Learn More</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="border-t bg-muted/40 py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">Our Initiatives</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join our tech-enabled cleanup drives and community workforce initiatives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Droplet className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Water Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find safe water refill stations and track real-time water quality data.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">AI Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personalized water conservation tips and participate in challenges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Water Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor water quality through our IoT sensor network in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDG Goals Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">Supporting UN SDG Goals</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 rounded-lg border p-6">
              <h3 className="text-xl font-bold">SDG 3: Good health and Wellbeing</h3>
              <p className="text-muted-foreground">
                To ensure healthy lives and promote well-being for all at all ages through clean water access.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
              <h3 className="text-xl font-bold">SDG 6: Clean Water and Sanitation</h3>
              <p className="text-muted-foreground">
                Ensuring availability and sustainable management of water and sanitation for all through our
                initiatives.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border p-6">
              <h3 className="text-xl font-bold">SDG 11: Sustainable Cities</h3>
              <p className="text-muted-foreground">
                Making cities inclusive, safe, resilient and sustainable with smart water solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Make a Difference?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Join our community of water conservation advocates and help build a sustainable future for India.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/events">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

