import { useState } from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

const InfoQr = () => {
  const [openQr, setOpenQr] = useState(false)
  return (
    <>
      <div className="grid w-full grid-cols-[1fr_80px] gap-2 bg-black-light5 px-5 py-2.5 dark:bg-[#222] sm:grid-cols-[1fr_144px] sm:gap-x-5 sm:px-8">
        <h1 className="basis-auto self-start justify-self-start text-balance text-sm font-semibold text-black dark:text-white sm:text-xl">
          Scan QR Code untuk masuk ke halaman komentar
        </h1>
        <img
          src={`${import.meta.env.BASE_URL}/images/qr-detikcom.webp`}
          className="row-span-2 size-20 self-center object-contain sm:size-36"
          alt="QR detikcom"
        />
        <button
          className="self-start justify-self-start rounded-lg border border-black px-4 py-1.5 text-xs font-bold dark:border-white sm:px-8 sm:py-2.5 sm:text-base"
          onClick={() => setOpenQr(true)}
          type="button"
        >
          Perbesar QR Code
        </button>
      </div>

      <Dialog open={openQr} onOpenChange={setOpenQr}>
        <DialogContent className="max-w-md rounded-md outline-none dark:bg-black sm:max-w-[425px]">
          <div className="grid h-auto place-content-center gap-5 p-4">
            <img
              src={`${import.meta.env.BASE_URL}/images/qr-detikcom.webp`}
              className="mx-auto size-80 object-contain"
              alt="QR detikcom"
            />
            <p className="text-balance text-center text-xl">
              Scan QR Code untuk masuk ke halaman komentar
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default InfoQr
