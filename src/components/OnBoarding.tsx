import { useState } from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"

const OnBoarding = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <Dialog defaultOpen>
      <DialogContent className="max-w-xs rounded-md outline-none sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-left">Selamat Datang</DialogTitle>
        </DialogHeader>
        <div className="grid min-h-[140px] text-balance text-sm">
          {!isShow
            ? "Selamat datang di Live Chat! Ingatlah untuk berkata sopan dan tidak mengandung SARA. Sebagai media platform, kami akan memantau & bertindak tegas terhadap setiap chat yang melanggar etika atau bersifat spam."
            : "Demi kenyamanan bersama, Anda juga dapat membantu kami dengan menggunakan fitur “Laporkan” / “Blokir” jika Anda menemukan pengguna lain yang melanggar etika atau bersifat spam."}
        </div>
        <DialogFooter className="flex-col gap-2 sm:flex-col sm:space-x-0">
          {!isShow ? (
            <>
              <a
                href="#"
                className="text-center text-xs font-medium tracking-wide text-livechat-blue dark:text-black-light3"
              >
                Baca Selengkapnya
              </a>
              <Button
                type="button"
                onClick={() => setIsShow(true)}
                className="bg-livechat-blue hover:bg-livechat-blue focus-visible:ring-transparent dark:bg-white dark:text-black"
              >
                Selanjutnya
              </Button>
            </>
          ) : (
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-livechat-blue hover:bg-livechat-blue focus-visible:ring-transparent dark:text-white"
              >
                Baik, saya mengerti
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default OnBoarding
