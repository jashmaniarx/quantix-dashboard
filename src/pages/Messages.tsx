import { motion } from "framer-motion"
import { 
  MessageSquare, 
  Send, 
  Search, 
  Plus,
  MoreHorizontal,
  Phone,
  Video,
  Paperclip,
  Smile,
  Archive,
  Star,
  Trash2
} from "lucide-react"
import { useState } from "react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
  isOwn: boolean
}

interface Conversation {
  id: string
  name: string
  lastMessage: string
  timestamp: string
  unread: number
  isOnline: boolean
  avatar: string
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    lastMessage: "Let's schedule the meeting for tomorrow",
    timestamp: "2m ago",
    unread: 2,
    isOnline: true,
    avatar: "SJ"
  },
  {
    id: "2", 
    name: "Marketing Team",
    lastMessage: "The campaign looks great! 🚀",
    timestamp: "1h ago",
    unread: 0,
    isOnline: false,
    avatar: "MT"
  },
  {
    id: "3",
    name: "Michael Chen",
    lastMessage: "Can you review the latest designs?",
    timestamp: "3h ago", 
    unread: 1,
    isOnline: true,
    avatar: "MC"
  },
  {
    id: "4",
    name: "Emily Davis",
    lastMessage: "Thanks for the update!",
    timestamp: "1d ago",
    unread: 0,
    isOnline: false,
    avatar: "ED"
  }
]

const mockMessages: Message[] = [
  {
    id: "1",
    sender: "Sarah Johnson",
    content: "Hey! How's the dashboard project coming along?",
    timestamp: "10:30 AM",
    isOwn: false
  },
  {
    id: "2",
    sender: "You",
    content: "It's going really well! We've made great progress on the analytics section.",
    timestamp: "10:32 AM",
    isOwn: true
  },
  {
    id: "3",
    sender: "Sarah Johnson", 
    content: "That's awesome! Can we schedule a quick review meeting for tomorrow?",
    timestamp: "10:35 AM",
    isOwn: false
  },
  {
    id: "4",
    sender: "You",
    content: "Absolutely! What time works best for you?",
    timestamp: "10:36 AM",
    isOwn: true
  },
  {
    id: "5",
    sender: "Sarah Johnson",
    content: "Let's schedule the meeting for tomorrow at 2 PM. I'll send you the calendar invite.",
    timestamp: "10:38 AM",
    isOwn: false
  }
]

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleCall = () => {
    console.log("Starting voice call with", selectedConversation.name)
  }

  const handleVideoCall = () => {
    console.log("Starting video call with", selectedConversation.name)
  }

  const handleArchive = () => {
    console.log("Archiving conversation with", selectedConversation.name)
  }

  const handleStar = () => {
    console.log("Starring conversation with", selectedConversation.name)
  }

  const handleDelete = () => {
    console.log("Deleting conversation with", selectedConversation.name)
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-hidden p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="h-full space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
                <p className="text-muted-foreground">
                  Communicate with your team and clients
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Message
              </Button>
            </div>

            {/* Messages Interface */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 h-[calc(100vh-200px)]">
              {/* Conversations List */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Conversations</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-1 p-4">
                      {mockConversations.map((conversation, index) => (
                        <motion.div
                          key={conversation.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`
                            p-3 rounded-lg cursor-pointer transition-all duration-200
                            hover:bg-muted/50
                            ${selectedConversation.id === conversation.id ? 'bg-accent' : ''}
                          `}
                          onClick={() => setSelectedConversation(conversation)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar>
                                <AvatarFallback>{conversation.avatar}</AvatarFallback>
                              </Avatar>
                              {conversation.isOnline && (
                                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-success border-2 border-background rounded-full" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium truncate">{conversation.name}</h4>
                                <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-muted-foreground truncate">
                                  {conversation.lastMessage}
                                </p>
                                {conversation.unread > 0 && (
                                  <Badge className="bg-primary text-white text-xs">
                                    {conversation.unread}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Chat Interface */}
              <Card className="lg:col-span-2 flex flex-col">
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback>{selectedConversation.avatar}</AvatarFallback>
                        </Avatar>
                        {selectedConversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-success border-2 border-background rounded-full" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedConversation.isOnline ? "Online" : "Last seen 2h ago"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={handleCall}>
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleVideoCall}>
                        <Video className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={handleStar}>
                            <Star className="mr-2 h-4 w-4" />
                            Star Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={handleArchive}>
                            <Archive className="mr-2 h-4 w-4" />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {mockMessages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`
                            max-w-xs lg:max-w-md px-4 py-2 rounded-lg
                            ${message.isOwn 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground'
                            }
                          `}>
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="min-h-[60px] resize-none"
                      />
                    </div>
                    <Button variant="ghost" size="sm">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Messages