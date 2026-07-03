import { Icons } from "./Icons"
import InfoQr from "./InfoQr"

const ClosedChat = () => {
  return (
    <div className="relative isolate z-0 flex h-full min-h-0 flex-col overflow-hidden">
      <InfoQr />

      <div className="relative isolate z-0 grid h-full min-h-0 place-content-center overflow-hidden bg-[#F0F0F0] dark:bg-black">
        <div className="flex w-80 flex-col items-center gap-2 text-black dark:text-white">
          <Icons.emptyChat className="h-auto w-28 text-black dark:fill-black dark:text-white sm:w-40" />
          <h1 className="mt-3 font-bold">Belum ada chat</h1>
          <p className="text-center text-xs font-medium">
            Anda dapat menambahkan chat di Aplikasi Detikcom
          </p>
        </div>
      </div>
    </div>
  )
}
export default ClosedChat
