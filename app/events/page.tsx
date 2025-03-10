import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Lake Cleanup Drive",
      date: "March 15, 2024",
      location: "Powai Lake, Mumbai",
      participants: 45,
      description: "Join us for a community cleanup drive to remove waste and plastic from Powai Lake.",
    },
    {
      id: 2,
      title: "Water Conservation Workshop",
      date: "March 20, 2024",
      location: "Community Center, Delhi",
      participants: 30,
      description: "Learn practical water conservation techniques and sustainable practices for your home.",
    },
    {
      id: 3,
      title: "River Water Testing",
      date: "March 25, 2024",
      location: "Yamuna River, Delhi",
      participants: 25,
      description: "Participate in water quality testing and learn about our sensor network deployment.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Community Events</h1>
          <p className="text-lg text-muted-foreground">
            Join our water conservation initiatives and make a difference.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{event.participants} participants</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

