"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4"
          >
            <Card className="w-80 p-4 bg-black/90 backdrop-blur-lg border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">Chat with us</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-purple-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-64 mb-4 overflow-y-auto border border-white/10 rounded-lg p-2">
                <div className="text-gray-400 text-sm">How can we help you today?</div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="bg-black/50 border-white/10 text-white" />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Send</Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className="rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Chat with us
      </Button>
    </div>
  )
}

