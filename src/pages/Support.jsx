import React from 'react'

const supportcards= [
    {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
     {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
     {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
       {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
       {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
       {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
      {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
       {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    },
       {
        info: "CALL OF DUTY: BLACK OPS 6",
        src: "/assets/supportcard1.jpg",
    }
     
]

function Support() {
  return (
    <>
    <div className='w-screen'>
        <div className='bg-[#3e9fca] text-white  flex flex-row items-center text-xs gap-2 h-10 pl-20 w-screen'>
           <p> <span className='pr-1'>NEED HELP RECOVERING A HACKED ACTIVISION ACCOUNT?</span>
            <span className='font-extrabold underline'>LEARN MORE</span></p>
        </div>
    </div>
    <div className='supportHero w-screen h-[550px]'>
        <div className='supportoverlay w-screen h-[550px] flex flex-col justify-center items-start'>
           <img src='/assets/supportOverlay.png'></img>
           <div className='flex flex-col justify-start items-start text-white pl-10'>
            <div className='flex flex-row justify-start items-center mb-5'>
              <img src='/assets/icon_game.png'></img>
            <a className='pl-3'>
                CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED
            </a>
            </div>
            <div className='flex flex-row justify-start items-center'>
                <img src='/assets/icon_support.png'></img>
            <a className='pl-3'>
                Browse the support page
            </a>
            </div>
           </div>
        </div>
    </div>
    <section className='bg-[#2c2c2c] pb-10'>
    <div className='flex flex-row flex-wrap justify-center pt-5 gap-2'>
     {supportcards.map((game)=>(
       <>
       <div className='flex flex-col justify-center pt-5 text-white font-bold text-sm'>
        <p className='pl-4'>{game.info}</p>
      <div className='supportImg'>
        <img src={game.src}></img>
      </div>
      </div>
      </>
     ))}
     </div>
    </section>
    </>
  )
}

export default Support