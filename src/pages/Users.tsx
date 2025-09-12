import { motion } from "framer-motion"
import { 
  Users as UsersIcon, 
  UserPlus, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Phone,
  Shield,
  Eye
} from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { MetricCard } from "@/components/cards/metric-card"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user" | "manager" | "viewer"
  status: "active" | "inactive" | "pending"
  lastActive: string
  joinDate: string
  department: string
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Jash Maniar",
    email: "jash@quantix.com",
    role: "admin",
    status: "active",
    lastActive: "2 minutes ago",
    joinDate: "2023-01-15",
    department: "Engineering"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@quantix.com",
    role: "manager",
    status: "active",
    lastActive: "1 hour ago",
    joinDate: "2023-03-22",
    department: "Marketing"
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@quantix.com",
    role: "user",
    status: "active",
    lastActive: "3 hours ago",
    joinDate: "2023-06-10",
    department: "Sales"
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@quantix.com",
    role: "viewer",
    status: "inactive",
    lastActive: "2 days ago",
    joinDate: "2023-08-05",
    department: "Support"
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@quantix.com",
    role: "user",
    status: "pending",
    lastActive: "Never",
    joinDate: "2024-01-10",
    department: "Finance"
  },
]

const Users = () => {
  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-destructive"
      case "manager":
        return "bg-warning"
      case "user":
        return "bg-primary"
      case "viewer":
        return "bg-muted"
      default:
        return "bg-muted"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success"
      case "inactive":
        return "bg-muted"
      case "pending":
        return "bg-warning"
      default:
        return "bg-muted"
    }
  }

  const handleAddUser = () => {
    console.log("Adding new user...")
  }

  const handleEditUser = (userId: string) => {
    console.log(`Editing user ${userId}`)
  }

  const handleDeleteUser = (userId: string) => {
    console.log(`Deleting user ${userId}`)
  }

  const handleViewUser = (userId: string) => {
    console.log(`Viewing user ${userId}`)
  }

  const handleEmailUser = (email: string) => {
    window.open(`mailto:${email}`)
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
                <h1 className="text-3xl font-bold tracking-tight">Users</h1>
                <p className="text-muted-foreground">
                  Manage users, roles, and permissions
                </p>
              </div>
              <Button onClick={handleAddUser}>
                <UserPlus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>

            {/* User Statistics */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total Users"
                value="2,847"
                change={12.5}
                icon={<UsersIcon className="h-6 w-6" />}
                delay={0.1}
              />
              <MetricCard
                title="Active Users"
                value="2,394"
                change={8.2}
                icon={<Shield className="h-6 w-6" />}
                delay={0.2}
              />
              <MetricCard
                title="New This Month"
                value="156"
                change={23.1}
                icon={<UserPlus className="h-6 w-6" />}
                delay={0.3}
              />
              <MetricCard
                title="Pending Approval"
                value="12"
                change={-5.8}
                icon={<Eye className="h-6 w-6" />}
                delay={0.4}
              />
            </div>

            {/* Filters and Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-1 gap-2">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search users..." className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>
                  A list of all users in your organization including their role and status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="hover:bg-muted/50"
                      >
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getRoleColor(user.role)} text-white text-xs`}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{user.department}</TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(user.status)} text-white text-xs`}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {user.lastActive}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleViewUser(user.id)}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEditUser(user.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEmailUser(user.email)}>
                                <Mail className="mr-2 h-4 w-4" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDeleteUser(user.id)}
                                className="text-destructive"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Users