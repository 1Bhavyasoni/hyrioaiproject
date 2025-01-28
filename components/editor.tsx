"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "./sidebar"
import { EditorToolbar } from "./editor-toolbar"
import { Preview } from "./preview"

export function Editor() {
  const [content, setContent] = useState("")
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [wordCount, setWordCount] = useState(0)

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.textContent || ""
    setContent(newContent)
    setWordCount(newContent.trim().split(/\s+/).length)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-1">
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b bg-white flex items-center justify-between">
            <h1 className="text-xl font-semibold">Write Post</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Check Score
              </Button>
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="flex-1 p-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <EditorToolbar />
              <div
                className="min-h-[200px] p-4 focus:outline-none"
                contentEditable
                onInput={handleContentChange}
                placeholder="What do you want to share?"
              />
            </div>
          </div>

          <div className="p-4 border-t bg-white flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Last saved at Oct 4, 2023, 10:34 AM • {wordCount} characters
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Save as Draft</Button>
              <Button variant="outline">Schedule</Button>
              <Button>Publish</Button>
            </div>
          </div>
        </div>

        <Preview content={content} device={device} onDeviceChange={setDevice} />
      </div>
    </div>
  )
}

