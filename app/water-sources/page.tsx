"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"

export default function WaterSourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const sources = [
    {
      id: 1,
      name: "Community Water Station",
      address: "123 MG Road, Mumbai",
      quality: "Excellent",
      lastTested: "2 hours ago",
    },
    {
      id: 2,
      name: "Municipal Water Point",
      address: "45 Park Street, Delhi",
      quality: "Good",
      lastTested: "5 hours ago",
    },
    {
      id: 3,
      name: "Smart Water Dispenser",
      address: "78 Lake View Road, Bangalore",
      quality: "Excellent",
      lastTested: "1 hour ago",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Water Sources</h1>
          <p className="text-lg text-muted-foreground">Find clean and safe water sources near you.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>Search</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-[400px] bg-muted">
            <CardHeader>
              <CardTitle>Map</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Map placeholder - In production, integrate with Google Maps or similar */}
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Interactive Map Coming Soon
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {sources.map((source) => (
              <Card key={source.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{source.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{source.address}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>
                        Water Quality: <span className="font-medium text-primary">{source.quality}</span>
                      </span>
                      <span className="text-muted-foreground">Last tested: {source.lastTested}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

