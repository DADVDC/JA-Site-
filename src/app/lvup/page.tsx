import Image from 'next/image'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function Section({ children, ...props }: { children: React.ReactNode, [key: string]: any }) {
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

export default function Page() {
  return (
    <div className="mt-[9rem]">
      <Section>
        <div className="h-1/2 w-1/3">
          <Card>
            <Image src="/notebook.png" alt="NoteBook" width={0} height={0} sizes="200vw" className="w-full h-auto" />
            <CardContent className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2">
              <h1 className='text-lg md:text-5xl w-full h-full font-black'>
                Braille Tutorial
              </h1>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section>
        <div className="h-1/2 w-1/3">
          <Card>
            <Image src="/notebook.png" alt="NoteBook" width={0} height={0} sizes="200vw" className="w-full h-auto" />
            <CardContent className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2">
              <h1 className='text-2xl md:text-6xl w-full h-full font-black'>
                Flashcard
              </h1>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section>
        <div className="h-1/2 w-1/3">
          <Card>
            <Image src="/notebook.png" alt="NoteBook" width={0} height={0} sizes="200vw" className="w-full h-auto" />
            <CardContent className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2">
              <h1 className='text-2xl md:text-6xl w-full h-full font-black'>
                Video 
              </h1>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
