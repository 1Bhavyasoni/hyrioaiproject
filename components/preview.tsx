import { Smartphone, Tablet, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PreviewProps {
  content: string
  device: "mobile" | "tablet" | "desktop"
  onDeviceChange: (device: "mobile" | "tablet" | "desktop") => void
}

export function Preview({ content, device, onDeviceChange }: PreviewProps) {
  return (
    <div className="w-[400px] border-l bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Post Preview</h2>
        <div className="flex items-center gap-1">
          <Button
            variant={device === "mobile" ? "default" : "ghost"}
            size="icon"
            onClick={() => onDeviceChange("mobile")}
          >
            <Smartphone className="h-4 w-4" />
          </Button>
          <Button
            variant={device === "tablet" ? "default" : "ghost"}
            size="icon"
            onClick={() => onDeviceChange("tablet")}
          >
            <Tablet className="h-4 w-4" />
          </Button>
          <Button
            variant={device === "desktop" ? "default" : "ghost"}
            size="icon"
            onClick={() => onDeviceChange("desktop")}
          >
            <Laptop className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto bg-white rounded-lg shadow-sm border p-4 transition-all duration-200",
          device === "mobile" && "w-[320px]",
          device === "tablet" && "w-[600px]",
          device === "desktop" && "w-full",
        )}
      >
        <div className="flex items-start gap-3 mb-4">
          <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <div className="font-semibold">Cody Fisher</div>
            <div className="text-sm text-muted-foreground">
              UI/UX Design | Web & Mobile Design | Front-end | UI Developer
            </div>
            <div className="text-xs text-muted-foreground">Now • 🌎</div>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">{content || "Start typing to see your post preview..."}</div>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t">
          <Button variant="ghost" size="sm">
            Like
          </Button>
          <Button variant="ghost" size="sm">
            Comment
          </Button>
          <Button variant="ghost" size="sm">
            Share
          </Button>
          <Button variant="ghost" size="sm">
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

