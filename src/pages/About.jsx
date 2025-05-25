import React from 'react'

const people = [
    {src: "/src/assets/rob-kostich.jpg",
     name: "Rob Kostich",
     position: "President"
    },
    {src: "/src/assets/josh-taub.jpg",
     name: "Josh Taub",
     position: "Chief Operating Officer"
    },
    {src: "/src/assets/suzie-carr.jpg",
     name: "Suzie Carr",
     position: "Chief People Officer"
    },
    {src: "/src/assets/terri-durham.jpg",
     name: "Terri Durham",
     position: "SVP & General Counsel"
    },
    {src: "/src/assets/dave-stohl.jpg",
     name: "David Stohl",
     position: "Head of Development, Call of Duty"
    },
    {src: "/src/assets/patt-kelly.jpg",
     name: "Pat Kelly",
     position: "Head of Creative, Call of Duty"
    },
]

const aboutgames = [
    { image: "/src/assets/aboutgame1.jpg",
     title: "Call of Duty Black Ops 6",
     rating: "Mature 17+"
    },
    {image: "/src/assets/aboutgame1.jpg",
     title: "Call of Duty Black Ops 6",
     rating: "Mature 17+"
    },
    {image: "/src/assets/aboutgame1.jpg",
     title: "Call of Duty Black Ops 6",
     rating: "Mature 17+"
    },
    {image: "/src/assets/aboutgame1.jpg",
     title: "Call of Duty Black Ops 6",
     rating: "Mature 17+"
    },
    {image: "/src/assets/aboutgame1.jpg",
     title: "Call of Duty Black Ops 6",
     rating: "Mature 17+"
    },
    {image: "/src/assets/aboutgame1.jpg",
     title: "Call of Duty Black Ops 6",
     rating: "Mature 17+"
    },
]
const teamsArray =[
  {team: "Game Design"},{team: "Art & Animation"}, {team: "Brand Management"}, {team: "Production"}, {team: "Quality Assurance"}, 
  {team: "Customer Support"}, {team: "Studio Operations"}, {team: "Programming"}, {team: "Finance & Accounting"}, {team: "Human Resources"}, 
]
function About() {
  return (
    <>
    <img src='/src/assets/about-hero.jpg'></img>
    <div className='bg-black text-white flex flex-col justify-center items-center text-[15px] py-10'>
         <h2 className='text-4xl font-extrabold mb-4 uppercase'>Our Mission</h2>
        <div className='aboutborder w-300 flex flex-col justify-center items-center'>
         <p className='w-250 font-extralight py-5 text-justify'>At Activision, we strive to create the most iconic brands in gaming and entertainment.
             We’re driven by our mission to deliver unrivaled gaming experiences for the world to enjoy,
              together.  Home to iconic franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ 
              Pro Skater™, we're a global leader in interactive entertainment. Our goal? Delight millions with 
              innovative, fun, and engaging games. With a legacy of success, we're pushing boundaries with cutting-edge
               technology and inclusive practices. Join us in delivering unforgettable entertainment and seize the chance to 
               level up your career.</p>
               </div>
              </div>
              <div className='bg-black text-white flex flex-col justify-center items-center text-[15px] py-10'>
               <h2 className='text-4xl font-extrabold mb-4 uppercase'>Activate Your Future</h2>
                <div className='aboutborder w-300 flex flex-col justify-center items-center'>
               <p className='w-250 font-extralight py-5 text-center'>We unite our global player community with epic entertainment, 
             focusing on three core pillars:
              <span><br></br>People - fostering talent and learning opportunities.</span>
              <span><br></br>Innovation - consistently pushing to iterate and evolve.</span>
              <span><br></br>Excellence - delivering high-quality games, consistently year in and year out.</span>
                <span>
                <br></br>
                Join us at Activision, where inclusivity thrives, and together we shape the future of entertainment for our players. Explore open roles now!    
              </span></p>
             </div>
                </div>

                <div className='bg-black text-white flex flex-col justify-center items-center text-[15px] py-10'>
               <h2 className='text-4xl font-extrabold mb-4 uppercase'>Our Values</h2>
                <div className='aboutborder w-300 flex flex-col justify-center items-center'>
                 <img src="/src/assets/about-values.png"></img>
             </div>
                </div>
                 <div className='bg-black text-white flex flex-col justify-center items-center text-[15px] py-10'>
               <h2 className='text-4xl font-extrabold mb-4 uppercase'>Our people</h2>
                <div className='aboutborder w-300 flex flex-row flex-wrap justify-center items-center gap-10'>
                {people.map((person)=>(
                    <div className='flex flex-col justify-center items-center w-75 h-70 mt-10'>
                    <img className='aboutimg' src={person.src}></img>
                    <p>{person.name}</p>
                    <p>{person.position}</p>
                 </div>
                ))}
             </div>
             </div>
            <div className='bg-black text-white flex flex-col justify-center items-center text-[15px] py-10'>
               <h2 className='text-4xl font-extrabold mb-4 uppercase'>Our games</h2>
                <div className='aboutborder w-300 flex flex-row flex-wrap justify-center items-center gap-5'>
                {aboutgames.map((game)=>(<>
                  <div className='gamecard flex flex-col justify-center items-center w-76 m-9'>
                  <div className='aboutgame' style={{  backgroundImage: `url(${game.image})`,backgroundSize: 'cover', backgroundPosition: 'center',
                        width: '300px', height: '400px',borderRadius: '8px'}}></div>
                         <p className='font-extrabold'>{game.title}</p>
                          <p className='text-[#b3b5b6]'>{game.rating}</p>
                  </div>
                  </>
                ))}
                </div>
             </div>
               <div className='flex flex-col'>
               <div className='background-img flex fle-row justify-between items-center border-t border-[#5A5B5C] h-70 text-white'>
                <div className='overlay-text pl-40 w-110 h-70 flex flex-col justify-center items-start'>
            <h2 className='text-6xl text-[#0768af] font-extrabold w-70 '>Have Fun</h2>
            <p className='text-xl'>Learn more about job opportunities</p>
            <br></br>
            <a className='uppercase border border-solid border-white p-3 rounded-3xl px-25'>Join Us</a>
          </div>
           <div className='flex flex-col justify-center overlay-text2  w-200'>
          <div className='flex flex-col justify-end items-end h-70'>
            <div className='w-100 flex flex-col justify-center h-70'>
            <h3>Our Teams</h3>
              <ul className='grid grid-cols-2 grid-row-5 gap-2'>
               {teamsArray.map((team)=>(
                <li>{team.team}</li>
               ))}
              </ul>
          </div>
          </div>
            </div>
        </div>
      </div>
           </>
  )
}

export default About