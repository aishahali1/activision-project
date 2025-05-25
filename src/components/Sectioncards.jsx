import React from 'react'

const teamsArray =[
  {team: "Game Design"},{team: "Art & Animation"}, {team: "Brand Management"}, {team: "Production"}, {team: "Quality Assurance"}, 
  {team: "Customer Support"}, {team: "Studio Operations"}, {team: "Programming"}, {team: "Finance & Accounting"}, {team: "Human Resources"}, 
]

function Sectioncards() {
  return (
    <>
    <section className='flex flex-col text-white'>
      <div>
        <div className='flex flex-row justify-center items-center border-b border-[#5A5B5C] bg-black'>
          <div className='text pl-40 w-100 h-60 p-7'>
            <h3 className='text-4xl'>We're here to help!</h3>
            <p className='text-lg font-bold'>Get answers to frequently asked questions, check server status, and engage with a support expert</p>
            <br></br>
            <a className='uppercase border border-solid border-white p-4 rounded-3xl px-15'>Visit Support</a>
          </div>
          <div className=''>
            <img src='/assets/support-banner-v3.jpg' className='supportImg h-60 w-400'/>
          </div>
        </div>
      </div>
        <div className='flex flex-col'>
        <div className='background-img flex fle-row justify-between items-center border-t border-[#5A5B5C] h-70'>
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
    </section>
    </>
  )
}

export default Sectioncards