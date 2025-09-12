import { motion } from "framer-motion"
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  Search,
  Plus,
  MoreHorizontal,
  Eye,
  Share,
  Trash2
} from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Report {
  id: string
  name: string
  type: string
  status: "completed" | "pending" | "failed"
  createdAt: string
  size: string
  description: string
}

const mockReports: Report[] = [
  {
    id: "1",
    name: "Monthly Revenue Report",
    type: "Financial",
    status: "completed",
    createdAt: "2024-01-15",
    size: "2.4 MB",
    description: "Comprehensive revenue analysis for January 2024"
  },
  {
    id: "2",
    name: "User Analytics Report",
    type: "Analytics",
    status: "completed",
    createdAt: "2024-01-14",
    size: "1.8 MB",
    description: "User behavior and engagement metrics"
  },
  {
    id: "3",
    name: "Performance Metrics",
    type: "Performance",
    status: "pending",
    createdAt: "2024-01-14",
    size: "3.1 MB",
    description: "System performance and uptime statistics"
  },
  {
    id: "4",
    name: "Security Audit",
    type: "Security",
    status: "completed",
    createdAt: "2024-01-13",
    size: "856 KB",
    description: "Quarterly security assessment and recommendations"
  },
  {
    id: "5",
    name: "Customer Satisfaction",
    type: "Survey",
    status: "failed",
    createdAt: "2024-01-12",
    size: "0 KB",
    description: "Q4 customer feedback and satisfaction scores"
  },
]

const Reports = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success"
      case "pending":
        return "bg-warning"
      case "failed":
        return "bg-destructive"
      default:
        return "bg-muted"
    }
  }

  const handleCreateReport = () => {
    console.log("Creating new report...")
  }

  const handleDownload = (reportId: string) => {
    console.log(`Downloading report ${reportId}`)
  }

  const handleView = (reportId: string) => {
    console.log(`Viewing report ${reportId}`)
  }

  const handleShare = (reportId: string) => {
    console.log(`Sharing report ${reportId}`)
  }

  const handleDelete = (reportId: string) => {
    console.log(`Deleting report ${reportId}`)
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
                <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
                <p className="text-muted-foreground">
                  Generate and manage comprehensive business reports
                </p>
              </div>
              <Button onClick={handleCreateReport}>
                <Plus className="mr-2 h-4 w-4" />
                Create Report
              </Button>
            </div>

            {/* Filters and Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-1 gap-2">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search reports..." className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Bulk Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reports Tabs */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All Reports</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {/* Reports Grid */}
                <div className="grid gap-4">
                  {mockReports.map((report, index) => (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-hover transition-all duration-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <FileText className="h-6 w-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h3 className="font-semibold">{report.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {report.description}
                                </p>
                                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                  <span>Created: {report.createdAt}</span>
                                  <span>Size: {report.size}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {report.type}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Badge 
                                className={`${getStatusColor(report.status)} text-white text-xs`}
                              >
                                {report.status}
                              </Badge>
                              
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => handleView(report.id)}>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleDownload(report.id)}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleShare(report.id)}>
                                    <Share className="mr-2 h-4 w-4" />
                                    Share
                                  </DropdownMenuItem>
                                  <DropdownMenuItem 
                                    onClick={() => handleDelete(report.id)}
                                    className="text-destructive"
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tab contents would filter the reports array */}
              <TabsContent value="financial">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Reports</CardTitle>
                    <CardDescription>Revenue, expenses, and financial analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Financial reports would be filtered and displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Reports</CardTitle>
                    <CardDescription>User behavior and website analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Analytics reports would be filtered and displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Reports</CardTitle>
                    <CardDescription>System performance and optimization metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Performance reports would be filtered and displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Reports</CardTitle>
                    <CardDescription>Security audits and threat assessments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Security reports would be filtered and displayed here.
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

export default Reports
