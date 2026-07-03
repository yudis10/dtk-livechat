import { useState } from "react"
import useStore from "@/context/useStore"

import { cn } from "@/lib/utils"
import ChatArea from "@/components/ChatArea"
import ChatHeader from "@/components/ChatHeader"
import ChatInput from "@/components/ChatInput"
import ChatLogin from "@/components/ChatLogin"
import ChatNetworkStatus from "@/components/ChatNetworkStatus"
import ChatPinnedSwiper from "@/components/ChatPinnedSwiper"
import ChatUsers from "@/components/ChatUsers"
import ClosedChat from "@/components/ClosedChat"
import EmptyChat from "@/components/EmptyChat"
import InfoQr from "@/components/InfoQr"
import OnBoarding from "@/components/OnBoarding"
import RestrictedDialog from "@/components/RestrictedDialog"

type HomeProps = {
  status?:
    | "default"
    | "onboarding"
    | "restricted"
    | "closed"
    | "logout"
    | "empty"
    | "androidtv"
}

const Home = (props: HomeProps) => {
  const { status = "default" } = props

  const [showUsers, setShowUsers] = useState(false)
  const chatShow = useStore((state) => state.chatShow)
  // const { chatShow } = useStore()
  return (
    <>
      <div
        className={cn(
          "isolate mx-auto flex h-full w-full flex-col overflow-hidden rounded border border-neutral-200 bg-white/40 dark:border-neutral-900 dark:bg-black/40"
        )}
      >
        <ChatHeader showUsers={showUsers} setShowUsers={setShowUsers} />
        <div
          className={cn(
            "isolate flex h-full flex-col overflow-hidden transition-all ease-linear",
            !chatShow && "h-0 duration-300"
          )}
        >
          {status !== "closed" ? (
            status === "empty" ? (
              <EmptyChat />
            ) : status === "androidtv" ? (
              <div className="relative isolate z-0 flex h-full min-h-0 flex-col overflow-hidden">
                <InfoQr />
                <ChatArea />
                {showUsers && <ChatUsers />}
              </div>
            ) : (
              <>
                <div className="relative isolate z-0 flex h-full min-h-0 flex-col overflow-hidden">
                  <ChatPinnedSwiper />
                  <ChatArea />
                  {showUsers && <ChatUsers />}
                  {status === "default" && <ChatNetworkStatus />}
                </div>
                {status === "logout" ? <ChatLogin /> : <ChatInput />}
              </>
            )
          ) : (
            <ClosedChat />
          )}
        </div>
      </div>
      {status === "onboarding" && <OnBoarding />}
      {status === "restricted" && <RestrictedDialog modalOpen={true} />}
    </>
  )
}
export default Home
