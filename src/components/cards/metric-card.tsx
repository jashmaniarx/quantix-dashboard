import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  change: number
  changeLabel?: string
  icon?: React.ReactNode
  className?: string
  trend?: "up" | "down" | "neutral"
  delay?: number
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon,
  className,
  trend,
  delay = 0,
}: MetricCardProps) {
  const isPositive = change > 0
  const isNegative = change < 0
  
  // Auto-detect trend if not provided
  const finalTrend = trend || (isPositive ? "up" : isNegative ? "down" : "neutral")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("bento-card interactive-hover", className)}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="space-y-1">
            <p className="text-2xl font-bold tracking-tight">{value}</p>
            <div className="flex items-center space-x-1">
              {finalTrend === "up" && (
                <ArrowUpRight className="h-3 w-3 text-success" />
              )}
              {finalTrend === "down" && (
                <ArrowDownRight className="h-3 w-3 text-destructive" />
              )}
              <span
                className={cn(
                  "text-xs font-medium",
                  finalTrend === "up" && "text-success",
                  finalTrend === "down" && "text-destructive",
                  finalTrend === "neutral" && "text-muted-foreground"
                )}
              >
                {change > 0 ? "+" : ""}{change}%
              </span>
              <span className="text-xs text-muted-foreground">{changeLabel}</span>
            </div>
          </div>
        </div>
        
        {icon && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent"
          >
            {icon}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}