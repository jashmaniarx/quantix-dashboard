import { motion } from "framer-motion"
import { DollarSign, TrendingUp, PieChart, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

interface FinancialData {
  month: string
  revenue: number
  expenses: number
  profit: number
}

interface FinancialOverviewProps {
  data: FinancialData[]
  title: string
  delay?: number
}

export function FinancialOverview({ data, title, delay = 0 }: FinancialOverviewProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value)
  }

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0)
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0)
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <span className="text-muted-foreground">Total Revenue:</span>
              <span className="font-semibold">{formatCurrency(totalRevenue)}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              <span className="text-muted-foreground">Profit Margin:</span>
              <span className="font-semibold">{profitMargin}%</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-muted-foreground" />
              <YAxis tickFormatter={formatCurrency} className="text-muted-foreground" />
              <Tooltip 
                formatter={(value: number, name: string) => [formatCurrency(value), name]}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" />
              <Bar dataKey="expenses" fill="hsl(var(--destructive))" name="Expenses" />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                name="Profit"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}