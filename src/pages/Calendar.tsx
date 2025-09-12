import { motion } from "framer-motion"
import { 
  Calendar as CalendarIcon, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  Users,
  MapPin,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from "lucide-react"
import { useState } from "react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

interface Event {
  id: string
  title: string
  time: string
  duration: string
  type: "meeting" | "call" | "presentation" | "deadline" | "personal"
  attendees?: number
  location?: string
  description?: string
}

interface CalendarDay {
  date: number
  isCurrentMonth: boolean
  isToday: boolean
  events: Event[]
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Team Standup",
    time: "09:00",
    duration: "30min",
    type: "meeting",
    attendees: 8,
    location: "Conference Room A"
  },
  {
    id: "2",
    title: "Client Presentation",
    time: "14:00",
    duration: "1h",
    type: "presentation",
    attendees: 12,
    location: "Main Hall"
  },
  {
    id: "3",
    title: "Project Review",
    time: "16:30",
    duration: "45min",
    type: "meeting",
    attendees: 5,
    location: "Room B"
  }
]

// Generate calendar days for current month
const generateCalendarDays = (): CalendarDay[] => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  const todayDate = today.getDate()
  
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()
  
  const days: CalendarDay[] = []
  
  // Add days from previous month
  const prevMonth = new Date(currentYear, currentMonth - 1, 0)
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: prevMonth.getDate() - i,
      isCurrentMonth: false,
      isToday: false,
      events: []
    })
  }
  
  // Add days from current month
  for (let date = 1; date <= daysInMonth; date++) {
    days.push({
      date,
      isCurrentMonth: true,
      isToday: date === todayDate,
      events: date === todayDate ? mockEvents : []
    })
  }
  
  // Add days from next month to complete the grid
  const remainingDays = 42 - days.length
  for (let date = 1; date <= remainingDays; date++) {
    days.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      events: []
    })
  }
  
  return days
}

const Calendar = () => {
  const [currentDate] = useState(new Date())
  const [calendarDays] = useState(generateCalendarDays())
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-primary"
      case "call":
        return "bg-success"
      case "presentation":
        return "bg-warning"
      case "deadline":
        return "bg-destructive"
      case "personal":
        return "bg-accent"
      default:
        return "bg-muted"
    }
  }

  const handleCreateEvent = () => {
    console.log("Creating new event...")
  }

  const handleEditEvent = (eventId: string) => {
    console.log(`Editing event ${eventId}`)
  }

  const handleDeleteEvent = (eventId: string) => {
    console.log(`Deleting event ${eventId}`)
  }

  const handleViewEvent = (eventId: string) => {
    console.log(`Viewing event ${eventId}`)
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
                <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
                <p className="text-muted-foreground">
                  Manage your schedule and upcoming events
                </p>
              </div>
              <Button onClick={handleCreateEvent}>
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              {/* Calendar */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Today
                      </Button>
                      <Button variant="outline" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1">
                    {/* Day headers */}
                    {dayNames.map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {calendarDays.map((day, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.01 }}
                        className={`
                          min-h-[80px] p-1 border border-border rounded-md cursor-pointer
                          hover:bg-muted/50 transition-colors
                          ${day.isCurrentMonth ? 'bg-card' : 'bg-muted/20'}
                          ${day.isToday ? 'ring-2 ring-primary' : ''}
                        `}
                      >
                        <div className={`
                          text-sm font-medium mb-1
                          ${day.isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'}
                          ${day.isToday ? 'text-primary font-bold' : ''}
                        `}>
                          {day.date}
                        </div>
                        
                        {/* Events */}
                        <div className="space-y-1">
                          {day.events.slice(0, 2).map(event => (
                            <div
                              key={event.id}
                              className={`
                                text-xs p-1 rounded text-white truncate
                                ${getEventTypeColor(event.type)}
                              `}
                            >
                              {event.time} {event.title}
                            </div>
                          ))}
                          {day.events.length > 2 && (
                            <div className="text-xs text-muted-foreground">
                              +{day.events.length - 2} more
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Today's Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Today's Events</CardTitle>
                  <CardDescription>
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border border-border rounded-lg p-3 hover:shadow-hover transition-all duration-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-1 flex-1">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                              <span>({event.duration})</span>
                            </div>
                            {event.attendees && (
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <Users className="h-3 w-3" />
                                <span>{event.attendees} attendees</span>
                              </div>
                            )}
                            {event.location && (
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            <Badge 
                              className={`${getEventTypeColor(event.type)} text-white text-xs`}
                            >
                              {event.type}
                            </Badge>
                          </div>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <MoreHorizontal className="h-3 w-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleViewEvent(event.id)}>
                                <Eye className="mr-2 h-3 w-3" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEditEvent(event.id)}>
                                <Edit className="mr-2 h-3 w-3" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDeleteEvent(event.id)}
                                className="text-destructive"
                              >
                                <Trash2 className="mr-2 h-3 w-3" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events scheduled for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No upcoming events scheduled</p>
                  <Button variant="outline" className="mt-4" onClick={handleCreateEvent}>
                    <Plus className="mr-2 h-4 w-4" />
                    Schedule Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Calendar