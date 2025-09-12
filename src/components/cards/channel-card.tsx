import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Channel {
  id: string
  name: string
  platform: string
  logo: string
  change: number
  value: string
  color: string
  username: string
}

interface ChannelCardProps {
  title: string
  subtitle?: string
  channels: Channel[]
  className?: string
  delay?: number
}

export function ChannelCard({
  title,
  subtitle,
  channels,
  className,
  delay = 0,
}: ChannelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("bento-card interactive-hover", className)}
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-card-foreground">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {channels.map((channel, index) => {
            const isPositive = channel.change > 0
            
            return (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: delay + 0.1 * index }}
                className="group rounded-lg border bg-muted/30 p-4 transition-all hover:bg-muted/50"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold"
                      style={{ backgroundColor: channel.color }}
                    >
                      {channel.logo}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{channel.name}</p>
                    <p className="text-xs text-muted-foreground">
                      @{channel.username}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {isPositive ? (
                        <TrendingUp className="h-3 w-3 text-success" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-destructive" />
                      )}
                      <span
                        className={cn(
                          "text-xs font-medium",
                          isPositive ? "text-success" : "text-destructive"
                        )}
                      >
                        {isPositive ? "+" : ""}{channel.change}%
                      </span>
                    </div>
                    <span className="text-xs font-medium">{channel.value}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}