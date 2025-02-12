import Link from "next/link"
import { FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 min-h-16 inset-shadow-2xs px-[50px] bg-transparent drop-shadow-lg flex flex-1 items-center justify-between bg-white 2xl:[&_*]:text-2xl">
      <Link className="text-black" href="/about">About us</Link>
      <Link className="text-black" href="/game">GAME PLAY</Link>
      <Link className="text-black" href="/lvup">Level-up Lounge</Link>
      <Link className="text-black" href="/story">Story Hub</Link>
      <Link className="text-black" href="https://www.instagram.com/dot2dothk/">
        <FaInstagram className="text-3xl md:text-4xl" />
      </Link>
      <Link href="https://www.youtube.com/@dot2dothk">
        <FaYoutube className="text-3xl md:text-4xl" />
      </Link>
      <Link href="https://dot2dothk.com/#">
        <FaGoogle className="text-3xl md:text-4xl" />
      </Link>
    </div>
  )
}
