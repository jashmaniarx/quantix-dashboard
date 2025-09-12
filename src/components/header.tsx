import { Search, Bell, Settings, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to a search results page or handle search logic
      console.log("Searching for:", searchQuery)
    }
  }

  const handleHelpClick = () => {
    window.open("https://docs.example.com", "_blank")
  }

  const handleSettingsClick = () => {
    navigate("/settings")
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex h-16 items-center px-6">
        {/* Search */}
        <div className="flex flex-1 items-center space-x-4">
          <form onSubmit={handleSearch} className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              placeholder="Search analytics, reports, users..."
              className="pl-9 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <Badge
                  variant="destructive"
                  className="absolute -right-1 -top-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-4">
                <h3 className="font-semibold">Notifications</h3>
                <Badge variant="secondary">3 new</Badge>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Revenue target achieved</p>
                  <p className="text-xs text-muted-foreground">
                    Monthly revenue exceeded $1M milestone
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">New user signup spike</p>
                  <p className="text-xs text-muted-foreground">
                    +47% increase in user registrations
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">System maintenance</p>
                  <p className="text-xs text-muted-foreground">
                    Scheduled for tonight at 2:00 AM
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Help */}
          <Button variant="ghost" size="sm" onClick={handleHelpClick}>
            <HelpCircle className="h-4 w-4" />
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm" onClick={handleSettingsClick}>
            <Settings className="h-4 w-4" />
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}