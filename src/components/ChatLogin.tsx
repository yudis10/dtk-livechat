import { Link } from "react-router-dom"

import { Button } from "./ui/button"

const ChatLogin = () => {
  return (
    <div className="relative flex flex-col items-center gap-1.5 border-t border-black/10 bg-white px-6 py-4 dark:border-black-light2 dark:bg-black">
      <Button
        className="w-full border-2 border-livechat-blue bg-livechat-blue px-4 py-2 font-semibold hover:bg-livechat-blue"
        asChild
      >
        <Link to="/onboarding" className="dark:bg-white dark:text-black">
          Mulai Chat
        </Link>
      </Button>
      <p className="text-xs text-black-light1 dark:text-black-light3">
        Yuk, login MPC terlebih dahulu
      </p>
    </div>
  )
}
export default ChatLogin
