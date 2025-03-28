"use client"

import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import { Bell, Settings } from "lucide-react" 

interface AdminHeaderProps {
  onLogout: () => void
}

export default function AdminHeader({ onLogout }: AdminHeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <span className="ml-4 text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
              Admin Dashboard
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="border-l border-gray-200 dark:border-gray-700 h-6 mx-2"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">admin@noxmedia.in</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

