import { Button } from "@/components/ui/button"
import { PenLine, Wand2, Lightbulb, Images, FileText, Sparkles, Clock, Settings, HelpCircle } from "lucide-react"

const sidebarItems = [
  { icon: <PenLine className="w-4 h-4" />, label: "Post Generator" },
  { icon: <Lightbulb className="w-4 h-4" />, label: "Ideas Generator" },
  { icon: <Images className="w-4 h-4" />, label: "Carousel Maker" },
  { icon: <FileText className="w-4 h-4" />, label: "Posts" },
  { icon: <Sparkles className="w-4 h-4" />, label: "Content Inspiration" },
  { icon: <Clock className="w-4 h-4" />, label: "Posts for You" },
  { icon: <Clock className="w-4 h-4" />, label: "Schedule" },
]

const bottomItems = [
  { icon: <Settings className="w-4 h-4" />, label: "Preferences" },
  { icon: <HelpCircle className="w-4 h-4" />, label: "Feature Request" },
]

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-white p-4 flex flex-col h-full">
      <Button className="w-full mb-4" size="lg">
        <PenLine className="w-4 h-4 mr-2" />
        Write Post
      </Button>

      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <Button key={item.label} variant="ghost" className="w-full justify-start">
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </Button>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="p-4 border rounded-lg">
          <div className="text-sm text-muted-foreground mb-2">Words generated</div>
          <div className="flex items-center justify-between">
            <div className="font-medium">1.25k / 50k</div>
            <Button variant="outline" size="sm">
              Upgrade Plan
            </Button>
          </div>
          <div className="text-xs text-muted-foreground mt-2">Monthly usage resets in 29 days</div>
        </div>

        {bottomItems.map((item) => (
          <Button key={item.label} variant="ghost" className="w-full justify-start">
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

