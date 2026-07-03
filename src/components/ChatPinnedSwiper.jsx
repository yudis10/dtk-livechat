import { useEffect, useRef, useState } from "react"
import { Pin } from "lucide-react"
import { register } from "swiper/element/bundle"

import { cn } from "@/lib/utils"

import ChatMessage from "./ChatMessage"

register()

const swiperMsg = [
  {
    author: "Master Yoda",
    msg: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. A Jedi uses the Force for knowledge and defense, never for attack.",
  },
  {
    author: "Obi-Wan Kenobi",
    msg: "The Force will be with you, always. Remember, a Jedi can feel the Force flowing through him. You must learn to let go of everything you fear to lose.",
  },
  {
    author: "Princess Leia",
    msg: "Help me, Obi-Wan Kenobi. You're my only hope. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers.",
  },
]

const ChatPinnedSwiper = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const swiperElRef = useRef(null)

  useEffect(() => {
    const SwiperContainer = swiperElRef.current

    const params = {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: true,
      pagination: true,
      speed: 600,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: #465fa8;
            color: #fff;
            box-sizing: border-box;     
            width: 20px;       
            height: 20px;       
            border-radius: 50%;
            padding:5px;
          }          
          .swiper-pagination {
            --swiper-pagination-bullet-size: 6px;
            --swiper-pagination-bottom: 0px;      
            --swiper-pagination-bullet-inactive-color: #fff;            
            --swiper-pagination-color: #dedede;      
          }
          .swiper-button-next, .swiper-button-prev {
            --swiper-navigation-sides-offset: 0px;
          }
      `,
      ],
    }

    Object.assign(SwiperContainer, params)
    SwiperContainer.initialize()
  }, [isExpanded])

  return (
    <div
      className={cn(
        "absolute inset-x-2 top-1.5 z-10 flex flex-col gap-2 rounded bg-livechat-blue px-2.5 pb-1 pt-2.5 text-white transition-all",
        isExpanded ? "" : "hide-pagination"
      )}
    >
      <div className="flex items-center gap-2.5 text-xs font-bold">
        <Pin className="h-4 w-4 -rotate-45" />
        Pinned Chat
        <span className="grid place-content-center rounded-sm bg-orange-600 px-1 text-[7px] leading-3 text-white">
          BARU
        </span>
        <button
          className="ml-auto text-xs font-normal underline underline-offset-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Sembunyikan" : "Tampilkan"}
        </button>
      </div>

      <swiper-container
        ref={swiperElRef}
        init={false}
        style={{ width: "100%", height: "auto" }}
      >
        {swiperMsg.map((msg, index) => (
          <swiper-slide
            key={index}
            style={{ padding: isExpanded ? "0px 26px 24px" : "0px 26px 6px" }}
          >
            <>
              <ChatMessage
                className="p-0 hocus:bg-transparent"
                msgClassName={cn("text-white")}
                timeClassName="text-gray-400"
                contentClassName={cn(
                  isExpanded ? "line-clamp-none" : "line-clamp-1"
                )}
                time="9:26 AM"
                name={msg.author}
                avatar="https://cdn.detik.net.id/20detik3/images/detiktv.jpg?v=2023121412197"
                message={msg.msg}
                hasAction={false}
                role="admin"
              />
            </>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

export default ChatPinnedSwiper
