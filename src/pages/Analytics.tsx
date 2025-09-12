import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Users, 
  Activity, 
  BarChart3, 
  PieChart, 
  LineChart,
  DollarSign,
  Target,
  Globe,
  Zap
} from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MetricCard } from "@/components/cards/metric-card"
import { ChartCard } from "@/components/cards/chart-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for analytics
const analyticsData = [
  { name: "Jan", value: 65000, sessions: 12000, bounce: 34 },
  { name: "Feb", value: 78000, sessions: 15000, bounce: 32 },
  { name: "Mar", value: 82000, sessions: 18000, bounce: 30 },
  { name: "Apr", value: 95000, sessions: 22000, bounce: 28 },
  { name: "May", value: 110000, sessions: 25000, bounce: 26 },
  { name: "Jun", value: 125000, sessions: 28000, bounce: 24 },
]

const deviceData = [
  { name: "Desktop", value: 65, sessions: 18500 },
  { name: "Mobile", value: 30, sessions: 8500 },
  { name: "Tablet", value: 5, sessions: 1500 },
]

const Analytics = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                <p className="text-muted-foreground">
                  Deep insights into your business performance
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Export Data</Button>
                <Button>Generate Report</Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total Sessions"
                value="92,847"
                change={15.2}
                icon={<Users className="h-6 w-6" />}
                delay={0.1}
              />
              <MetricCard
                title="Page Views"
                value="284,392"
                change={8.7}
                icon={<Activity className="h-6 w-6" />}
                delay={0.2}
              />
              <MetricCard
                title="Avg. Session Duration"
                value="4m 32s"
                change={12.1}
                icon={<TrendingUp className="h-6 w-6" />}
                delay={0.3}
              />
              <MetricCard
                title="Conversion Rate"
                value="3.4%"
                change={-2.1}
                icon={<Target className="h-6 w-6" />}
                delay={0.4}
              />
            </div>

            {/* Analytics Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="behavior">Behavior</TabsTrigger>
                <TabsTrigger value="conversion">Conversion</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <ChartCard
                    title="Website Traffic"
                    subtitle="Visitor analytics over time"
                    data={analyticsData}
                    type="area"
                    dataKey="value"
                    color="hsl(var(--primary))"
                    height={300}
                  />
                  
                  <ChartCard
                    title="Session Analytics"
                    subtitle="User sessions and engagement"
                    data={analyticsData}
                    type="line"
                    dataKey="sessions"
                    color="hsl(var(--accent))"
                    height={300}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <ChartCard
                    title="Bounce Rate Trend"
                    subtitle="User engagement quality"
                    data={analyticsData}
                    type="bar"
                    dataKey="bounce"
                    color="hsl(var(--warning))"
                  />
                  
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Device Breakdown</CardTitle>
                      <CardDescription>Traffic by device type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {deviceData.map((device, index) => (
                          <div key={device.name} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="h-3 w-3 rounded-full bg-primary" />
                              <span className="font-medium">{device.name}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">{device.value}%</div>
                              <div className="text-sm text-muted-foreground">
                                {device.sessions.toLocaleString()} sessions
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="audience" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="New Users"
                    value="12,847"
                    change={18.3}
                    icon={<Users className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Returning Users"
                    value="80,000"
                    change={5.2}
                    icon={<Globe className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="User Retention"
                    value="68.4%"
                    change={3.1}
                    icon={<TrendingUp className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Avg. Pages/Session"
                    value="3.2"
                    change={-1.4}
                    icon={<Activity className="h-6 w-6" />}
                  />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Insights</CardTitle>
                    <CardDescription>Understanding your user base</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Detailed audience analytics and demographics would be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="behavior" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Page Views"
                    value="284,392"
                    change={12.8}
                    icon={<BarChart3 className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Unique Views"
                    value="156,823"
                    change={8.4}
                    icon={<PieChart className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Avg. Time on Page"
                    value="2m 14s"
                    change={5.7}
                    icon={<LineChart className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Exit Rate"
                    value="42.1%"
                    change={-3.2}
                    icon={<Zap className="h-6 w-6" />}
                  />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>User Behavior Flow</CardTitle>
                    <CardDescription>How users navigate through your site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      User behavior flow visualization would be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conversion" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Goal Completions"
                    value="1,284"
                    change={22.1}
                    icon={<Target className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Conversion Rate"
                    value="3.4%"
                    change={-1.2}
                    icon={<TrendingUp className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Goal Value"
                    value="$42,890"
                    change={15.8}
                    icon={<DollarSign className="h-6 w-6" />}
                  />
                  <MetricCard
                    title="Funnel Drop-off"
                    value="24.8%"
                    change={-5.3}
                    icon={<Activity className="h-6 w-6" />}
                  />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Conversion Funnel</CardTitle>
                    <CardDescription>Track user journey to conversion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Conversion funnel visualization would be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Analytics