import Section from "@/components/Section"
import { CardContent } from "@/components/ui/card"
import SpinGame from "@/components/SpinGame"


export default function Page() {
  return (
    <div className="[&_*]:text-[#FB7EC4]">

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
            <CardContent className="h-1/2 top-[40%] right-1/4 absolute translate-x-1/2">
              <h1 className='text-6xl max-md:text-2xl w-20 h-auto font-black text-center -rotate-[17deg]'>
                Participants
              </h1>
              <p className='text-3xl max-md:text-sm max-md:w-56 md:w-96 h-full font-black -rotate-[17deg] text-center pl-20'>
                Teams: 2 teams (e.g., Pink Team, Blue Team). Each team can have multiple players.
                Regulator: 1 person to manage the game and assist players.
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
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 right-1/4 translate-x-1/2 md:w-auto md:h-auto max-md:h-1/2 max-md:w-auto -rotate-[17deg]" />
            <CardContent className="h-1/2 top-[40%] right-1/4 absolute translate-x-1/2">
              <h1 className='text-2xl max-md:text-xl w-56 h-auto font-black text-center -rotate-[17deg]'>
                Levels 1 & 2
              </h1>
              <h1 className='text-2xl max-md:text-xl w-56 h-auto font-black text-center -rotate-[17deg]'>
                Start the Round
              </h1>
              <p className='text-xl max-md:text-sm max-md:w-80 md:w-[30rem] h-full font-black -rotate-[17deg] text-center pl-20 max-md:line-clamp-1'>
Draw 2 word cards (simple for Level 1, standard for Level 2) and place them in the center.
Teams decide who will play each round. Players put on blindfolds, and the regulator starts a 2-minute timer.
              Player Actions

The regulator distributes Braille letter cards to the blindfolded players.
Each player can:
Keep: Retain a card if needed (max. 10 cards).
Discard: Return an unwanted card to the discard pile.
Replace: Swap a card in hand for a new one if holding the maximum of 10 cards.

The regulator assists in managing the cards during the round.
End of Round
Players remove blindfolds and tally their points.
              </p>
            </CardContent>
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 left-1/4 -translate-x-1/2 md:h-auto max-md:h-1/4 w-auto rotate-[17deg]" />
            <CardContent className="h-1/2 max-md:top-[37%] md:top-1/2 left-1/4 md:left-1/4 absolute -translate-x-1/2">
              <h1 className='text-5xl max-md:text-lg w-80 h-auto font-black text-center rotate-[17deg] max-md:mb-2 md:mb-4'>
Setup
              </h1>
              <p className='max-md:ml-20 text-3xl max-md:text-sm w-80 max-md:w-32 h-auto font-black text-center rotate-[17deg]'>

The teams sit across from the regulator.

Place the Braille letter cards (Braille side up) in the center.
              </p>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="md:h-1/2 md:w-1/3 max-md:h-full max-md:w-full">
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 right-1/4 translate-x-1/2 md:w-auto md:h-auto max-md:h-1/3 max-md:w-auto -rotate-[17deg]" />
            <CardContent className="h-1/2 top-[40%] right-1/4 absolute translate-x-1/2">
              <h1 className='text-6xl max-md:text-2xl w-20 h-auto font-black text-center -rotate-[17deg]'>
                Participants
              </h1>
              <p className='text-3xl max-md:text-sm max-md:w-56 md:w-96 h-full font-black -rotate-[17deg] text-center pl-20'>
                Teams: 2 teams (e.g., Pink Team, Blue Team). Each team can have multiple players.
                Regulator: 1 person to manage the game and assist players.
              </p>
            </CardContent>
            <img src="/notebook.png" alt="NoteBook" className="absolute h-1/2 top-1/3 left-1/4 -translate-x-1/2 md:h-auto max-md:h-1/4 w-auto" />
            <CardContent className="h-1/2 max-md:top-[35%] md:top-[40%] left-1/4 md:left-1/4 absolute -translate-x-1/2">
              <h1 className='text-5xl max-md:text-lg w-72 max-md:w-32 h-auto font-black text-center'>
Level 3 (Theme-Based Words)
              </h1>
              <p className='text-2xl max-md:text-sm w-72 max-md:w-40 h-auto font-black text-center'>
              Instead of word cards, draw a theme card.

Players spell words related to the theme using the same rules as Levels 1 & 2.
              </p>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="h-1/2 w-3/4 md:w-1/2">
            <img src="/notebook.png" alt="NoteBook" className="h-full w-full" />
            <CardContent className="h-1/2 top-1/3 md:top-1/4 left-[55%] absolute max-md:-translate-x-[60%] md:-translate-x-[75%]">
              <h1 className='text-lg md:text-6xl w-20 md:w-60 h-full font-black text-center mb-0 pb-0'>
                Punishment 
              </h1>
              <p className="text-sm md:text-lg w-52 md:w-80 h-full font-black text-center max-md:-translate-y-[90%] md:-translate-y-[70%]">
                Level 1   1.	Sing a silly song for one minute.   2.	Do a funny dance for 30 seconds.   3.	Wear a goofy hat for the rest of the game night.    Level 2   4.	Tell a joke that you find funny.   5.	Do 10 jumping jacks in a row.   6.	Speak in an accent for the next 5 minutes.    Level 3   7.	Post an embarrassing photo on social media.   8.	Make a snack for everyone else.   9.	Imitate a celebrity for one minute.   
              </p>
            </CardContent>
        </div>
      </Section>
      <Section>
        <div className="h-4/5 w-3/4 md:h-3/4 md:w-1/2">
            <img src="/notebook.png" alt="NoteBook" className="h-full w-full" />
            <CardContent className="h-1/2 mt-[-360px] md:mt-[-850px] left-1/2 absolute -translate-x-1/2">
              <h1 className='text-sm md:text-5xl w-40 md:w-[500px] h-full font-black text-center'>
Choose your  theme here！
              </h1>
              <SpinGame></SpinGame>
            </CardContent>
        </div>
      </Section>

    </div>
  )
}
