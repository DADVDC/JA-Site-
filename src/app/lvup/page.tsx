import {
  CardContent,
} from "@/components/ui/card"
import Section from "@/components/Section"


export default function Page() {
  return (
    <div className="[&_*]:text-[#FB7EC4]">
      <Section>
        <div className="h-1/2 w-1/3">
            <img src="/notebook.png" alt="NoteBook" className="h-full w-full" />
            <CardContent className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2">
              <h1 className='text-sm md:text-4xl w-full h-full font-black'>
                Braille Tutorial
              </h1>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="h-1/2 w-1/3">
            <img src="/notebook.png" alt="NoteBook" className="h-full w-full" />
            <CardContent className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2">
              <h1 className='text-2xl md:text-6xl w-full h-full font-black'>
                Flashcard
              </h1>
            </CardContent>
        </div>
      </Section>
      <Section>
        <iframe className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2" width="900" height="700" src="https://www.youtube.com/embed/8UfhIZfkWUA?si=TPszN-edRXBtWWvK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      </Section>
    </div>
  )
}


