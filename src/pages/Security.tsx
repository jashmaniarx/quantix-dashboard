import { motion } from "framer-motion"
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle,
  Key,
  UserCheck,
  Activity,
  Globe,
  RefreshCw,
  Eye,
  Settings,
  Download
} from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MetricCard } from "@/components/cards/metric-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

interface SecurityEvent {
  id: string
  type: "login" | "failed_login" | "permission_change" | "data_access" | "system_access"
  user: string
  description: string
  timestamp: string
  severity: "low" | "medium" | "high" | "critical"
  location: string
}

interface SecuritySetting {
  id: string
  name: string
  description: string
  enabled: boolean
  category: "authentication" | "access" | "monitoring" | "encryption"
}

const mockSecurityEvents: SecurityEvent[] = [
  {
    id: "1",
    type: "failed_login",
    user: "unknown@malicious.com",
    description: "Multiple failed login attempts detected",
    timestamp: "2 minutes ago",
    severity: "high",
    location: "Unknown (192.168.1.100)"
  },
  {
    id: "2",
    type: "login",
    user: "jash@quantix.com",
    description: "Successful admin login",
    timestamp: "5 minutes ago",
    severity: "low",
    location: "San Francisco, CA"
  },
  {
    id: "3",
    type: "permission_change",
    user: "sarah@quantix.com",
    description: "User permissions modified for Emily Davis",
    timestamp: "1 hour ago",
    severity: "medium",
    location: "New York, NY"
  },
  {
    id: "4",
    type: "data_access",
    user: "michael@quantix.com",
    description: "Bulk data export performed",
    timestamp: "3 hours ago",
    severity: "medium",
    location: "London, UK"
  },
  {
    id: "5",
    type: "system_access",
    user: "system",
    description: "Automatic security scan completed",
    timestamp: "6 hours ago",
    severity: "low",
    location: "Server (Internal)"
  }
]

const mockSecuritySettings: SecuritySetting[] = [
  {
    id: "1",
    name: "Two-Factor Authentication",
    description: "Require 2FA for all user accounts",
    enabled: true,
    category: "authentication"
  },
  {
    id: "2",
    name: "Session Timeout", 
    description: "Automatic logout after 30 minutes of inactivity",
    enabled: true,
    category: "authentication"
  },
  {
    id: "3",
    name: "IP Whitelisting",
    description: "Only allow access from approved IP addresses",
    enabled: false,
    category: "access"
  },
  {
    id: "4",
    name: "Failed Login Monitoring",
    description: "Monitor and alert on suspicious login attempts",
    enabled: true,
    category: "monitoring"
  },
  {
    id: "5",
    name: "Data Encryption",
    description: "Encrypt all sensitive data at rest and in transit",
    enabled: true,
    category: "encryption"
  }
]

const Security = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive"
      case "high":
        return "bg-warning"
      case "medium":
        return "bg-warning/80"
      case "low":
        return "bg-success"
      default:
        return "bg-muted"
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "login":
        return <UserCheck className="h-4 w-4" />
      case "failed_login":
        return <AlertTriangle className="h-4 w-4" />
      case "permission_change":
        return <Key className="h-4 w-4" />
      case "data_access":
        return <Eye className="h-4 w-4" />
      case "system_access":
        return <Settings className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const handleToggleSetting = (settingId: string) => {
    console.log(`Toggling security setting: ${settingId}`)
  }

  const handleRunScan = () => {
    console.log("Running security scan...")
  }

  const handleExportLog = () => {
    console.log("Exporting security log...")
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
                <h1 className="text-3xl font-bold tracking-tight">Security</h1>
                <p className="text-muted-foreground">
                  Monitor and manage your system security
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleExportLog}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Log
                </Button>
                <Button onClick={handleRunScan}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Run Security Scan
                </Button>
              </div>
            </div>

            {/* Security Overview */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Security Score"
                value="92/100"
                change={5.2}
                icon={<Shield className="h-6 w-6" />}
                delay={0.1}
              />
              <MetricCard
                title="Active Threats"
                value="3"
                change={-25.0}
                trend="up"
                icon={<AlertTriangle className="h-6 w-6" />}
                delay={0.2}
              />
              <MetricCard
                title="Protected Users"
                value="2,847"
                change={2.1}
                icon={<UserCheck className="h-6 w-6" />}
                delay={0.3}
              />
              <MetricCard
                title="Uptime"
                value="99.98%"
                change={0.02}
                icon={<Activity className="h-6 w-6" />}
                delay={0.4}
              />
            </div>

            {/* Security Status */}
            <Card>
              <CardHeader>
                <CardTitle>Security Status</CardTitle>
                <CardDescription>Current security posture and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-medium">Authentication</span>
                    </div>
                    <Progress value={95} className="h-2" />
                    <p className="text-sm text-muted-foreground">Strong authentication policies in place</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      <span className="font-medium">Access Control</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-sm text-muted-foreground">Consider implementing IP whitelisting</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-medium">Data Protection</span>
                    </div>
                    <Progress value={98} className="h-2" />
                    <p className="text-sm text-muted-foreground">All data properly encrypted</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Tabs */}
            <Tabs defaultValue="events" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="events">Security Events</TabsTrigger>
                <TabsTrigger value="settings">Security Settings</TabsTrigger>
                <TabsTrigger value="policies">Access Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Security Events</CardTitle>
                    <CardDescription>Monitor all security-related activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Event</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockSecurityEvents.map((event, index) => (
                          <motion.tr
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="hover:bg-muted/50"
                          >
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                {getEventTypeIcon(event.type)}
                                <div>
                                  <p className="font-medium">{event.description}</p>
                                  <p className="text-sm text-muted-foreground capitalize">
                                    {event.type.replace('_', ' ')}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="font-mono text-sm">{event.user}</TableCell>
                            <TableCell className="text-sm">{event.location}</TableCell>
                            <TableCell>
                              <Badge className={`${getSeverityColor(event.severity)} text-white text-xs`}>
                                {event.severity}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {event.timestamp}
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Configuration</CardTitle>
                    <CardDescription>Manage security policies and settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockSecuritySettings.map((setting, index) => (
                        <motion.div
                          key={setting.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{setting.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {setting.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {setting.description}
                            </p>
                          </div>
                          <Switch
                            checked={setting.enabled}
                            onCheckedChange={() => handleToggleSetting(setting.id)}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="policies" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Access Policies</CardTitle>
                    <CardDescription>Configure user access and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Lock className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">Admin Access</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Users with full system access and configuration rights
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Active admins: 3</span>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <UserCheck className="h-5 w-5 text-success" />
                            <h4 className="font-medium">User Access</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Standard users with limited access to specific features
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Active users: 2,844</span>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Globe className="h-5 w-5 text-warning" />
                            <h4 className="font-medium">Guest Access</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Temporary access for external users and contractors
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Active guests: 12</span>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Key className="h-5 w-5 text-accent" />
                            <h4 className="font-medium">API Access</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Programmatic access via API keys and tokens
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Active keys: 28</span>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Security