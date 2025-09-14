import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SearchResult {
  id: string
  title: string
  type: string
  content: string
  path: string
}

interface SearchFunctionalityProps {
  onNavigate: (path: string) => void
}

// Mock search data - in a real app this would come from your backend
const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Annual Revenue",
    type: "metric",
    content: "$147,250,000 - 18.7% increase from last year",
    path: "/analytics"
  },
  {
    id: "2",
    title: "User Management",
    type: "page",
    content: "Manage users, roles, and permissions",
    path: "/users"
  },
  {
    id: "3",
    title: "Financial Reports",
    type: "report",
    content: "Revenue, expenses, and financial analytics",
    path: "/reports"
  },
  {
    id: "4",
    title: "Security Dashboard",
    type: "page",
    content: "Monitor security metrics and compliance",
    path: "/security"
  },
  {
    id: "5",
    title: "Performance Metrics",
    type: "metric",
    content: "System uptime, response times, and optimization",
    path: "/performance"
  },
  {
    id: "6",
    title: "Calendar Events",
    type: "page",
    content: "Schedule meetings and manage appointments",
    path: "/calendar"
  },
  {
    id: "7",
    title: "Customer Segments",
    type: "data",
    content: "Enterprise, Mid-Market, and SMB customer analysis",
    path: "/analytics"
  },
  {
    id: "8",
    title: "Department Budgets",
    type: "data",
    content: "Budget tracking for Engineering, Sales, Marketing",
    path: "/analytics"
  },
  {
    id: "9",
    title: "Messages Center",
    type: "page",
    content: "Team communication and notifications",
    path: "/messages"
  },
  {
    id: "10",
    title: "Settings Panel",
    type: "page",
    content: "Application preferences and configuration",
    path: "/settings"
  }
]

export function SearchFunctionality({ onNavigate }: SearchFunctionalityProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []
    
    const lowercaseQuery = query.toLowerCase()
    return searchData.filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      item.type.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 6) // Limit to 6 results
  }, [query])

  const handleResultClick = (result: SearchResult) => {
    onNavigate(result.path)
    setQuery("")
    setIsOpen(false)
  }

  const clearSearch = () => {
    setQuery("")
    setIsOpen(false)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "metric":
        return "bg-primary"
      case "page":
        return "bg-accent"
      case "report":
        return "bg-success"
      case "data":
        return "bg-warning"
      default:
        return "bg-muted"
    }
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search anything..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-9 pr-9"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0"
            onClick={clearSearch}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-2">
            <div className="space-y-1">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Badge className={`${getTypeColor(result.type)} text-white text-xs mt-0.5`}>
                      {result.type}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{result.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {result.content}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Backdrop to close search */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}