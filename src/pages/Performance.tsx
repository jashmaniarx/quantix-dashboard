import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Activity, 
  Zap, 
  Server,
  Clock,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  AlertTriangle
} from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MetricCard } from "@/components/cards/metric-card"
import { ChartCard } from "@/components/cards/chart-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Mock performance data
const performanceData = [
  { name: "00:00", cpu: 45, memory: 62, response: 120 },
  { name: "04:00", cpu: 38, memory: 58, response: 98 },
  { name: "08:00", cpu: 72, memory: 75, response: 180 },
  { name: "12:00", cpu: 65, memory: 69, response: 165 },
  { name: "16:00", cpu: 80, memory: 82, response: 220 },
  { name: "20:00", cpu: 55, memory: 64, response: 140 },
]

const uptimeData = [
  { name: "Mon", uptime: 99.9 },
  { name: "Tue", uptime: 100 },
  { name: "Wed", uptime: 99.8 },
  { name: "Thu", uptime: 100 },
  { name: "Fri", uptime: 99.9 },
  { name: "Sat", uptime: 100 },
  { name: "Sun", uptime: 99.7 },
]

interface SystemMetric {
  name: string
  value: number
  status: "good" | "warning" | "critical"
  unit: string
}

const systemMetrics: SystemMetric[] = [
  { name: "CPU Usage", value: 68, status: "warning", unit: "%" },
  { name: "Memory Usage", value: 72, status: "warning", unit: "%" },
  { name: "Disk Usage", value: 45, status: "good", unit: "%" },
  { name: "Network I/O", value: 89, status: "critical", unit: "%" },
]

const Performance = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-success"
      case "warning":
        return "bg-warning"
      case "critical":
        return "bg-destructive"
      default:
        return "bg-muted"
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-success"
      case "warning":
        return "bg-warning"
      case "critical":
        return "bg-destructive"
      default:
        return "bg-primary"
    }
  }

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
                <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
                <p className="text-muted-foreground">
                  Monitor system performance and optimize efficiency
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Generate Report</Button>
                <Button>Optimize Now</Button>
              </div>
            </div>

            {/* Key Performance Metrics */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Response Time"
                value="1.2s"
                change={-8.5}
                trend="up"
                icon={<Clock className="h-6 w-6" />}
                delay={0.1}
              />
              <MetricCard
                title="Uptime"
                value="99.9%"
                change={0.1}
                icon={<Server className="h-6 w-6" />}
                delay={0.2}
              />
              <MetricCard
                title="Throughput"
                value="2.4K req/s"
                change={15.8}
                icon={<Zap className="h-6 w-6" />}
                delay={0.3}
              />
              <MetricCard
                title="Error Rate"
                value="0.03%"
                change={-12.3}
                trend="up"
                icon={<AlertTriangle className="h-6 w-6" />}
                delay={0.4}
              />
            </div>

            {/* System Resources */}
            <Card>
              <CardHeader>
                <CardTitle>System Resources</CardTitle>
                <CardDescription>Real-time system resource utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {systemMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{metric.name}</span>
                        <Badge className={`${getStatusColor(metric.status)} text-white text-xs`}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{metric.value}{metric.unit}</span>
                          <span className="text-muted-foreground">100{metric.unit}</span>
                        </div>
                        <Progress 
                          value={metric.value} 
                          className="h-2"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ChartCard
                title="System Performance"
                subtitle="CPU and Memory usage over time"
                data={performanceData}
                type="area"
                dataKey="cpu"
                color="hsl(var(--primary))"
                height={300}
                delay={0.5}
              />
              
              <ChartCard
                title="Response Time Trend"
                subtitle="Average response time (ms)"
                data={performanceData}
                type="line"
                dataKey="response"
                color="hsl(var(--accent))"
                height={300}
                delay={0.6}
              />
            </div>

            {/* Uptime and Availability */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ChartCard
                title="Weekly Uptime"
                subtitle="Uptime percentage by day"
                data={uptimeData}
                type="bar"
                dataKey="uptime"
                color="hsl(var(--success))"
                delay={0.7}
              />
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                  <CardDescription>Automated performance recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
                      <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                      <div>
                        <h4 className="font-medium text-warning">High Memory Usage</h4>
                        <p className="text-sm text-muted-foreground">
                          Memory usage is above 70%. Consider optimizing memory-intensive processes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-success/10 border border-success/20">
                      <TrendingUp className="h-5 w-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium text-success">Improved Response Time</h4>
                        <p className="text-sm text-muted-foreground">
                          Average response time decreased by 8.5% compared to last week.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Zap className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-primary">Optimization Suggestion</h4>
                        <p className="text-sm text-muted-foreground">
                          Enable caching for static assets to improve load times by up to 40%.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Performance Metrics */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <MetricCard
                title="Page Load Time"
                value="2.1s"
                change={-5.2}
                trend="up"
                icon={<Globe className="h-6 w-6" />}
                delay={0.8}
              />
              <MetricCard
                title="API Latency"
                value="45ms"
                change={-12.8}
                trend="up"
                icon={<Wifi className="h-6 w-6" />}
                delay={0.9}
              />
              <MetricCard
                title="Database Queries"
                value="1.2K/min"
                change={8.3}
                icon={<HardDrive className="h-6 w-6" />}
                delay={1.0}
              />
              <MetricCard
                title="Cache Hit Rate"
                value="94.2%"
                change={2.1}
                icon={<Cpu className="h-6 w-6" />}
                delay={1.1}
              />
              <MetricCard
                title="Active Connections"
                value="2,847"
                change={15.7}
                icon={<Activity className="h-6 w-6" />}
                delay={1.2}
              />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Performance