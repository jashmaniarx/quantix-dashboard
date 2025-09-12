// Sample data for the Quantix dashboard

export const revenueData = [
  { name: "Jan", value: 850000 },
  { name: "Feb", value: 920000 },
  { name: "Mar", value: 1050000 },
  { name: "Apr", value: 980000 },
  { name: "May", value: 1150000 },
  { name: "Jun", value: 1280000 },
  { name: "Jul", value: 1320000 },
]

export const userGrowthData = [
  { name: "Jan", value: 12400 },
  { name: "Feb", value: 13200 },
  { name: "Mar", value: 14800 },
  { name: "Apr", value: 16100 },
  { name: "May", value: 17900 },
  { name: "Jun", value: 19200 },
  { name: "Jul", value: 21500 },
]

export const weeklyActivityData = [
  { name: "Mon", value: 4200 },
  { name: "Tue", value: 4800 },
  { name: "Wed", value: 5200 },
  { name: "Thu", value: 4900 },
  { name: "Fri", value: 5400 },
  { name: "Sat", value: 3200 },
  { name: "Sun", value: 2800 },
]

export const conversionFunnelData = [
  { name: "Visits", value: 45000 },
  { name: "Sign-ups", value: 12000 },
  { name: "Trials", value: 8500 },
  { name: "Purchases", value: 3200 },
  { name: "Retained", value: 2880 },
]

export const scheduleItems = [
  {
    id: "1",
    title: "Product Strategy Review",
    time: "14:00",
    attendees: 8,
    type: "meeting" as const,
    status: "upcoming" as const,
  },
  {
    id: "2",
    title: "UX/UI Workshop",
    time: "15:30",
    attendees: 12,
    type: "workshop" as const,
    status: "upcoming" as const,
  },
  {
    id: "3",
    title: "Client Presentation",
    time: "16:45",
    attendees: 5,
    type: "presentation" as const,
    status: "upcoming" as const,
  },
  {
    id: "4",
    title: "Team Standup",
    time: "09:00",
    attendees: 15,
    type: "meeting" as const,
    status: "completed" as const,
  },
]

export const channelData = [
  {
    id: "1",
    name: "Dribbble",
    platform: "dribbble",
    logo: "Dr",
    change: 2.1,
    value: "12.4K",
    color: "#ea4c89",
    username: "quantix_design",
  },
  {
    id: "2",
    name: "Behance",
    platform: "behance",
    logo: "Be",
    change: -1.2,
    value: "8.9K",
    color: "#1769ff",
    username: "quantix_studio",
  },
  {
    id: "3",
    name: "Envato",
    platform: "envato",
    logo: "En",
    change: 4.3,
    value: "15.2K",
    color: "#82b541",
    username: "quantix_themes",
  },
  {
    id: "4",
    name: "Shopify",
    platform: "shopify",
    logo: "Sh",
    change: 1.8,
    value: "6.7K",
    color: "#96bf48",
    username: "quantix_apps",
  },
]

export const topProductsData = [
  { name: "Premium Plan", revenue: 450000, units: 1250, growth: 12.5 },
  { name: "Basic Plan", revenue: 280000, units: 2800, growth: 8.2 },
  { name: "Enterprise", revenue: 320000, units: 320, growth: 15.7 },
  { name: "Add-ons", revenue: 180000, units: 1800, growth: -2.1 },
]

export const customerSegmentData = [
  { segment: "Enterprise", value: 35, color: "#8b5cf6" },
  { segment: "SMB", value: 45, color: "#06b6d4" },
  { segment: "Startup", value: 20, color: "#10b981" },
]

export const retentionData = [
  { period: "Month 1", retained: 100 },
  { period: "Month 2", retained: 85 },
  { period: "Month 3", retained: 72 },
  { period: "Month 6", retained: 58 },
  { period: "Month 12", retained: 45 },
]

export const geographicData = [
  { country: "United States", users: 45200, revenue: 560000 },
  { country: "United Kingdom", users: 18900, revenue: 230000 },
  { country: "Germany", users: 15600, revenue: 195000 },
  { country: "France", users: 12100, revenue: 152000 },
  { country: "Canada", users: 9800, revenue: 125000 },
]

export const activityLogData = [
  {
    id: "1",
    user: "Sarah Chen",
    action: "Created new report",
    resource: "Q3 Analytics Summary",
    timestamp: "2 minutes ago",
    type: "create",
  },
  {
    id: "2",
    user: "Marcus Rodriguez",
    action: "Updated dashboard",
    resource: "Revenue Tracking",
    timestamp: "5 minutes ago",
    type: "update",
  },
  {
    id: "3",
    user: "Alex Thompson",
    action: "Shared report",
    resource: "User Acquisition",
    timestamp: "12 minutes ago",
    type: "share",
  },
  {
    id: "4",
    user: "Emma Wilson",
    action: "Deleted widget",
    resource: "Conversion Funnel",
    timestamp: "18 minutes ago",
    type: "delete",
  },
]