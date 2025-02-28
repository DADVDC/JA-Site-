import Section from "@/components/Section"
import { CardContent } from "@/components/ui/card"
import SpinGame from "@/components/SpinGame"


export default function Page() {
  return (
    <div className="[&_*]:text-[#FB7EC4]">
      <SpinGame></SpinGame>

      <Section>
        <div className="md:h-1/2 md:w-1/3 max-md:h-full max-md:w-full [&_h1]:-rotate-[17deg]">
            <img src="/notebook.png" alt="NoteBook" className="md:w-full md:h-full max-md:w-full -rotate-[17deg]" />
            <CardContent className="h-1/2 top-1/3 left-1/2 absolute -translate-x-1/2">
              <h1 className='text-6xl w-20 h-auto font-black text-center'>
                Game Objective 
              </h1>
              <p className='text-3xl w-96 h-full font-black -rotate-[17deg] text-center pl-20'>
                Accumulate the most points over 5 rounds by spelling words using Braille cards.
              </p>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="md:h-1/2 md:w-1/3 max-md:h-full max-md:w-full">
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 right-1/4 translate-x-1/2 md:w-auto md:h-auto max-md:h-1/3 max-md:w-auto -rotate-[17deg]" />
            <CardContent className="h-1/2 top-1/2 right-1/4 absolute translate-x-1/2">
              <h1 className='text-6xl max-md:text-2xl w-20 h-auto font-black text-center -rotate-[17deg]'>
                Game Objective 
              </h1>
              <p className='text-3xl max-md:text-xl max-md:w-56 md:w-96 h-full font-black -rotate-[17deg] text-center pl-20'>
                Accumulate the most points over 5 rounds by spelling words using Braille cards.
              </p>
            </CardContent>
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 left-1/4 -translate-x-1/2 md:h-auto max-md:h-1/4 w-auto rotate-[17deg]" />
            <CardContent className="h-1/2 top-[43%] md:top-1/2 left-1/4 md:left-1/4 absolute -translate-x-1/2">
              <h1 className='text-6xl max-md:text-4xl w-20 h-auto font-black text-center rotate-[17deg]'>
                How 
                to 
                Play
              </h1>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="md:h-1/2 md:w-1/3 max-md:h-full max-md:w-full">
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 right-1/4 translate-x-1/2 md:w-auto md:h-auto max-md:h-1/3 max-md:w-auto -rotate-[17deg]" />
            <CardContent className="h-1/2 top-1/2 right-1/4 absolute translate-x-1/2">
              <h1 className='text-6xl max-md:text-2xl w-20 h-auto font-black text-center -rotate-[17deg]'>
                Levels 1 & 2

              </h1>
              <p className='text-3xl max-md:text-xl max-md:w-56 md:w-96 h-full font-black -rotate-[17deg] text-center pl-20'>
                Accumulate the most points over 5 rounds by spelling words using Braille cards.
              </p>
            </CardContent>
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 left-1/4 -translate-x-1/2 md:h-auto max-md:h-1/4 w-auto rotate-[17deg]" />
            <CardContent className="h-1/2 top-[43%] md:top-1/2 left-1/4 md:left-1/4 absolute -translate-x-1/2">
              <h1 className='text-6xl max-md:text-4xl w-20 h-auto font-black text-center rotate-[17deg]'>
                How 
                to 
                Play
              </h1>
            </CardContent>
        </div>
      </Section>
    </div>
  )
}
