import useStore from "@/context/useStore"
import { Outlet } from "react-router-dom"

import "@/styles/globals.css"

import { useEffect } from "react"

// import { ThemeToggle } from "@/components/ThemeToggle"

import { TailwindIndicator } from "../components/TailwindIndicator"
import { ThemeProvider } from "../context/ThemeProvider"

function MainLayout() {
  const chatShow = useStore((state) => state.chatShow)
  useEffect(() => {
    // Send message to parent when chatShow changes
    window.parent.postMessage(
      { type: "container-height-change", chatShow: chatShow },
      "*"
    )
  }, [chatShow])
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <div className="flex h-screen flex-col">
        <Outlet />
      </div>
      <TailwindIndicator />
      {/* <div className="fixed right-1/2 top-2 z-50">
        <ThemeToggle mode="swap" />
      </div> */}
    </ThemeProvider>
  )
}

export default MainLayout
