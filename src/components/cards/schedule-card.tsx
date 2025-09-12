import { motion } from "framer-motion"
import { Clock, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ScheduleItem {
  id: string
  title: string
  time: string
  attendees: number
  type: "meeting" | "workshop" | "call" | "presentation"
  status: "upcoming" | "in-progress" | "completed"
}

interface ScheduleCardProps {
  title: string
  items: ScheduleItem[]
  className?: string
  delay?: number
}

export function ScheduleCard({
  title,
  items,
  className,
  delay = 0,
}: ScheduleCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      case "workshop":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
      case "call":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
      case "presentation":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "border-l-blue-500"
      case "in-progress":
        return "border-l-green-500"
      case "completed":
        return "border-l-gray-400"
      default:
        return "border-l-gray-400"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("bento-card interactive-hover", className)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-card-foreground">{title}</h3>
          <Button variant="ghost" size="sm" className="text-xs">
            See more
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.1 * index }}
              className={cn(
                "flex items-center space-x-3 rounded-lg border-l-2 bg-muted/30 p-3",
                getStatusColor(item.status)
              )}
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{item.title}</p>
                  <Badge
                    variant="secondary"
                    className={cn("text-xs", getTypeColor(item.type))}
                  >
                    {item.type}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{item.attendees} attendees</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}