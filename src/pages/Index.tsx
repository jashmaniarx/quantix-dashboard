import { motion } from "framer-motion"
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  ShoppingCart,
  Target,
  Clock,
  Globe,
  Activity,
  Zap,
  Award,
  BarChart3,
  PieChart,
} from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MetricCard } from "@/components/cards/metric-card"
import { ChartCard } from "@/components/cards/chart-card"
import { ScheduleCard } from "@/components/cards/schedule-card"
import { ChannelCard } from "@/components/cards/channel-card"

import {
  revenueData,
  userGrowthData,
  weeklyActivityData,
  conversionFunnelData,
  scheduleItems,
  channelData,
  topProductsData,
  customerSegmentData,
  retentionData,
  geographicData,
  activityLogData,
} from "@/lib/dashboard-data"

const Index = () => {
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
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, Jash 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your business today.
              </p>
            </motion.div>

            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total Revenue"
                value="$1,284,590"
                change={12.5}
                icon={<DollarSign className="h-6 w-6" />}
                delay={0.1}
              />
              <MetricCard
                title="Active Users"
                value="21,459"
                change={8.2}
                icon={<Users className="h-6 w-6" />}
                delay={0.2}
              />
              <MetricCard
                title="Conversion Rate"
                value="7.12%"
                change={-2.1}
                icon={<Target className="h-6 w-6" />}
                delay={0.3}
              />
              <MetricCard
                title="Avg. Order Value"
                value="$143.21"
                change={5.8}
                icon={<ShoppingCart className="h-6 w-6" />}
                delay={0.4}
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ChartCard
                  title="Revenue Trend"
                  subtitle="Monthly revenue over the last 7 months"
                  data={revenueData}
                  type="area"
                  dataKey="value"
                  color="hsl(var(--accent))"
                  height={300}
                  delay={0.5}
                />
              </div>
              
              <ScheduleCard
                title="Today's Schedule"
                items={scheduleItems}
                delay={0.6}
              />
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Customer LTV"
                value="$2,847"
                change={15.3}
                icon={<Award className="h-6 w-6" />}
                delay={0.7}
              />
              <MetricCard
                title="Churn Rate"
                value="2.4%"
                change={-1.8}
                trend="up"
                icon={<TrendingUp className="h-6 w-6" />}
                delay={0.8}
              />
              <MetricCard
                title="Session Duration"
                value="4m 32s"
                change={11.2}
                icon={<Clock className="h-6 w-6" />}
                delay={0.9}
              />
              <MetricCard
                title="Bounce Rate"
                value="34.2%"
                change={-3.4}
                trend="up"
                icon={<Activity className="h-6 w-6" />}
                delay={1.0}
              />
            </div>

            {/* Analytics Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              <ChartCard
                title="User Growth"
                subtitle="New user registrations"
                data={userGrowthData}
                type="line"
                dataKey="value"
                color="hsl(var(--primary))"
                delay={1.1}
              />
              
              <ChartCard
                title="Weekly Activity"
                subtitle="Daily active users this week"
                data={weeklyActivityData}
                type="bar"
                dataKey="value"
                color="hsl(var(--success))"
                delay={1.2}
              />
              
              <ChannelCard
                title="Top Channels"
                subtitle="Performance across platforms"
                channels={channelData}
                delay={1.3}
              />
            </div>

            {/* Conversion & Retention */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ChartCard
                title="Conversion Funnel"
                subtitle="User journey through the funnel"
                data={conversionFunnelData}
                type="bar"
                dataKey="value"
                color="hsl(var(--warning))"
                delay={1.4}
              />
              
              <ChartCard
                title="Customer Retention"
                subtitle="Retention rate over time"
                data={retentionData}
                type="area"
                dataKey="retained"
                xAxisKey="period"
                color="hsl(var(--destructive))"
                delay={1.5}
              />
            </div>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <MetricCard
                title="Page Views"
                value="847,320"
                change={18.7}
                icon={<Globe className="h-6 w-6" />}
                delay={1.6}
              />
              <MetricCard
                title="API Calls"
                value="2.4M"
                change={22.1}
                icon={<Zap className="h-6 w-6" />}
                delay={1.7}
              />
              <MetricCard
                title="Load Time"
                value="1.23s"
                change={-8.9}
                trend="up"
                icon={<Activity className="h-6 w-6" />}
                delay={1.8}
              />
              <MetricCard
                title="Support Tickets"
                value="43"
                change={-12.3}
                trend="up"
                icon={<BarChart3 className="h-6 w-6" />}
                delay={1.9}
              />
              <MetricCard
                title="Satisfaction"
                value="4.8/5"
                change={3.2}
                icon={<PieChart className="h-6 w-6" />}
                delay={2.0}
              />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Index
