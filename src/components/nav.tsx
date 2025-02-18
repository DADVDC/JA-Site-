import Link from "next/link"
import { FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Nav() {
  return (
    <div className="top-0 left-0 right-0 z-50 pt-10 min-h-16 inset-shadow-2xs md:px-[50px] bg-transparent drop-shadow-lg md:drop-shadow-xl flex flex-1 items-center justify-between 2xl:[&_*]:text-5xl md:text-3xl [&_*]:font-black pb-20">
      <Link href="/">Home</Link>
      <div className="hidden md:flex space-x-10 flex-1 ml-11">
        <Link href="/about">About us</Link>
        <Link href="/game">GAME PLAY</Link>
        <Link href="/lvup">Level-up Lounge</Link>
        <Link href="/story">Story Hub</Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link href="https://www.instagram.com/dot2dothk/">
          <FaInstagram className="text-3xl md:text-4xl" />
        </Link>
        <Link href="https://www.youtube.com/@dot2dothk">
          <FaYoutube className="text-3xl md:text-4xl" />
        </Link>
        <Link href="https://dot2dothk.com/#">
          <FaGoogle className="text-3xl md:text-4xl" />
        </Link>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                <CiMenuBurger className="text-3xl md:text-4xl" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 shadow-md rounded-md py-2 bg-transparent drop-shadow-lg md:drop-shadow-xl">
              <DropdownMenuItem><Link href="/about">About us</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/game">GAME PLAY</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/lvup">Level-up Lounge</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/story">Story Hub</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
