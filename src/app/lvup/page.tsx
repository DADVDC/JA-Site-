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
              <h1 className='text-xl md:text-6xl w-20 md:w-60 h-full font-black text-center'>
                Braille Tutorial
              </h1>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="h-1/2 w-1/3">
            <img src="/notebook.png" alt="NoteBook" className="h-full w-full" />
            <CardContent className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2">
              <p>
                click to try it
              </p>

              <a className='text-2xl md:text-6xl w-full h-full font-black' href="https://quizlet.com/747915909/braille-flash-cards/?funnelUUID=ad824b45-15ed-46ca-b6fa-dbd973cf7e4a">
                Flashcard
              </a>
            </CardContent>
        </div>
      </Section>
      <Section>
        <iframe className="h-1/2 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2" width="900" height="700" src="https://www.youtube.com/embed/8UfhIZfkWUA?si=TPszN-edRXBtWWvK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      </Section>
    </div>
  )
}


