import { motion } from "framer-motion"
import { Building2, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface DepartmentBudget {
  department: string
  budget: number
  spent: number
  remaining: number
}

interface DepartmentBudgetsProps {
  data: DepartmentBudget[]
  title: string
  delay?: number
}

export function DepartmentBudgets({ data, title, delay = 0 }: DepartmentBudgetsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value)
  }

  const getBudgetStatus = (spent: number, budget: number) => {
    const percentage = (spent / budget) * 100
    if (percentage > 95) return { status: "critical", icon: AlertTriangle, color: "destructive" }
    if (percentage > 80) return { status: "warning", icon: Clock, color: "warning" }
    return { status: "good", icon: CheckCircle, color: "success" }
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
            <Building2 className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.map((dept, index) => {
              const percentage = (dept.spent / dept.budget) * 100
              const status = getBudgetStatus(dept.spent, dept.budget)
              const StatusIcon = status.icon

              return (
                <motion.div
                  key={dept.department}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium">{dept.department}</h4>
                      <Badge variant={status.color as any} className="flex items-center gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {percentage.toFixed(1)}%
                      </Badge>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-semibold">{formatCurrency(dept.spent)}</div>
                      <div className="text-muted-foreground">of {formatCurrency(dept.budget)}</div>
                    </div>
                  </div>
                  
                  <Progress 
                    value={percentage} 
                    className="h-2"
                  />
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Remaining: {formatCurrency(dept.remaining)}</span>
                    <span>{(100 - percentage).toFixed(1)}% available</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}