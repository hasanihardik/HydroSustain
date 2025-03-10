import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Droplet, ThermometerIcon, Timer } from "lucide-react"

export default function MonitoringPage() {
  const locations = [
    {
      id: 1,
      name: "Powai Lake",
      ph: 7.2,
      tds: 245,
      temperature: 26,
      lastUpdated: "5 minutes ago",
      status: "Normal",
    },
    {
      id: 2,
      name: "Yamuna River - Delhi",
      ph: 6.8,
      tds: 380,
      temperature: 28,
      lastUpdated: "10 minutes ago",
      status: "Warning",
    },
    {
      id: 3,
      name: "Municipal Tank - Mumbai",
      ph: 7.0,
      tds: 220,
      temperature: 25,
      lastUpdated: "2 minutes ago",
      status: "Normal",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Water Quality Monitoring</h1>
          <p className="text-lg text-muted-foreground">Real-time water quality data from our sensor network.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Sensors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Active monitoring points</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Average pH Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.1</div>
              <p className="text-xs text-muted-foreground">Across all locations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Average TDS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">280 ppm</div>
              <p className="text-xs text-muted-foreground">Total Dissolved Solids</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Active warnings</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          {locations.map((location) => (
            <Card key={location.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{location.name}</CardTitle>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      location.status === "Normal" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {location.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">pH Level</p>
                      <p className="text-sm text-muted-foreground">{location.ph}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">TDS</p>
                      <p className="text-sm text-muted-foreground">{location.tds} ppm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThermometerIcon className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Temperature</p>
                      <p className="text-sm text-muted-foreground">{location.temperature}°C</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Last Updated</p>
                      <p className="text-sm text-muted-foreground">{location.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

