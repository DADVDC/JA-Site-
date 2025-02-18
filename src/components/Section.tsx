import { HTMLAttributes } from 'react'
import Image from 'next/image'

export default function Section({ children, ...props }: HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center w-full h-full" {...props}>
      {children}
      <div className="absolute left-10 bottom-1">
        <Image src="/lvup4.png" alt="Card 4" width={0} height={0} sizes="150vw" className="w-full h-auto" />
      </div>
      <div className="absolute right-0 top-[10rem]">
        <Image src="/lvup3.png" alt="Card 3" width={0} height={0} sizes="150vw" className="w-full h-auto" />
      </div>
      <div className="absolute right-0 bottom-1">
        <Image src="/lvup2.png" alt="Card 2" width={0} height={0} sizes="150vw" className="w-full h-auto" />
      </div>
      <div className="absolute left-10 top-20">
        <Image src="/lvup1.png" alt="Card 1" width={0} height={0} sizes="150vw" className="w-full h-auto" />
      </div>
    </section>
  )

}
