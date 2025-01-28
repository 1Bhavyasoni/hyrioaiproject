import { Bold, Italic, Strikethrough, Smile, Wand2, Image, Link, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const aiActions = [
  "Complete",
  "Shorten",
  "Extend",
  "Rephrase",
  "Summarize",
  "tldr",
  "Simplify",
  "Spelling & Grammar",
  "Emojify",
  "Tone of Voice",
  "Translate",
]

export function EditorToolbar() {
  return (
    <div className="flex items-center justify-between border-b p-2">
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Strikethrough className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Smile className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <div className="absolute -top-1 -right-1 bg-primary text-[10px] text-white rounded-full px-1">AI</div>
          <Wand2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon">
          <Image className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Paperclip className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

