import { HTMLAttributes } from 'react'

export default function Section({ children, ...props }: HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center w-full h-full" {...props}>
      {children}
      <img src="/lvup4.png" alt="Card 4" className="absolute left-10 bottom-1 max-md:h-40 max-w-1/2" />
      <img src="/lvup3.png" alt="Card 3" className="absolute h-auto max-md:h-40 right-0 top-[10rem]" />
      <img src="/lvup2.png" alt="Card 2" className="absolute max-md:h-40 max-w-1/2 h-auto right-0 bottom-1" />
      <img src="/lvup1.png" alt="Card 1" className="absolute left-10 top-20 max-md:h-40 max-w-1/2" />
    </section>
  )

}
