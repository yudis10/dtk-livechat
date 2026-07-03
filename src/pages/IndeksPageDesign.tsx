import { Link } from "react-router-dom"

const IndeksPageDesign = () => {
  return (
    <div className="h-full p-4 dark:bg-black">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Indeks Page Design:
      </h2>
      <ul className="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
        <li>
          <Link to={"/"}>index</Link>
        </li>
        <li>
          <Link to={"/welcome"}>welcome popup</Link>
        </li>
        <li>
          <Link to={"/logout"}>logout user</Link>
        </li>
        <li>
          <Link to={"/restricted"}>Resticted user</Link>
        </li>
        <li>
          <Link to={"/closed"}>Closed Chat</Link>
        </li>
        <li>
          <Link to={"/empty"}>Empty Chat</Link>
        </li>
        <li>
          <Link to={"/androidtv"}>androidtv Chat</Link>
        </li>
        <li>
          <Link to={"/?theme=dark"}>index [theme=dark]</Link>
        </li>
        <li>
          <Link to={"/welcome?theme=dark"}>welcome popup [theme=dark]</Link>
        </li>
        <li>
          <Link to={"/logout?theme=dark"}>logout user [theme=dark]</Link>
        </li>
        <li>
          <Link to={"/restricted?theme=dark"}>Resticted user [theme=dark]</Link>
        </li>
        <li>
          <Link to={"/closed?theme=dark"}>Closed Chat [theme=dark]</Link>
        </li>
        <li>
          <Link to={"/empty?theme=dark"}>Empty Chat [theme=dark]</Link>
        </li>
        <li>
          <Link to={"/androidtv?theme=dark"}>androidtv Chat [theme=dark]</Link>
        </li>
      </ul>
    </div>
  )
}
export default IndeksPageDesign
