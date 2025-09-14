import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Target, DollarSign, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface KPIMetric {
  kpi: string
  value: string
  target: string
  status: "above" | "below"
}

interface KPIGridProps {
  data: KPIMetric[]
  title: string
  delay?: number
}

export function KPIGrid({ data, title, delay = 0 }: KPIGridProps) {
  const getIcon = (index: number) => {
    const icons = [DollarSign, Users, Award, Target]
    const IconComponent = icons[index % icons.length]
    return <IconComponent className="h-5 w-5" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((metric, index) => (
              <motion.div
                key={metric.kpi}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getIcon(index)}
                    <span className="font-medium text-sm">{metric.kpi}</span>
                  </div>
                  <Badge variant={metric.status === "above" ? "default" : "destructive"}>
                    {metric.status === "above" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {metric.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">
                    Target: {metric.target}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}