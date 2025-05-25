import React from 'react'

const newsCard = [
    {
      src: '/assets/news-card-img1.jpg',
      date: 'MAY 20,2025',
      title: 'Stitch Returns in Season 04',
      info: `Following a daring jailbreak conducted by his former adversary, Stitch’s 
      clandestine resurrection is achieved and he returns to the fray with orders to crack the codes
       needed to uncover the Pantheon moles. Get the backstory on his intense 
      rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving 
      in the Season 04 Battle Pass.`
    },
     {
      src: '/assets/news-card-img2.jpg',
      date: 'MAY 20,2025',
      title: 'Stitch Returns in Season 04',
      info: `Following a daring jailbreak conducted by his former adversary, Stitch’s 
      clandestine resurrection is achieved and he returns to the fray with orders to crack the codes
       needed to uncover the Pantheon moles. Get the backstory on his intense 
      rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving 
      in the Season 04 Battle Pass.`
    },
     {
      src: '/assets/news-card-img3.jpg',
      date: 'MAY 20,2025',
      title: 'Stitch Returns in Season 04',
      info: `Following a daring jailbreak conducted by his former adversary, Stitch’s 
      clandestine resurrection is achieved and he returns to the fray with orders to crack the codes
       needed to uncover the Pantheon moles. Get the backstory on his intense 
      rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving 
      in the Season 04 Battle Pass.`
    },
     {
      src: '/assets/news-card-img4.webp',
      date: 'MAY 20,2025',
      title: 'Stitch Returns in Season 04',
      info: `Following a daring jailbreak conducted by his former adversary, Stitch’s 
      clandestine resurrection is achieved and he returns to the fray with orders to crack the codes
       needed to uncover the Pantheon moles. Get the backstory on his intense 
      rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving 
      in the Season 04 Battle Pass.`
    },
     {
      src: '/assets/news-card-img5.webp',
      date: 'MAY 20,2025',
      title: 'Stitch Returns in Season 04',
      info: `Following a daring jailbreak conducted by his former adversary, Stitch’s 
      clandestine resurrection is achieved and he returns to the fray with orders to crack the codes
       needed to uncover the Pantheon moles. Get the backstory on his intense 
      rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving 
      in the Season 04 Battle Pass.`
    },
     {
      src: '/assets/news-card-img6.webp',
      date: 'MAY 20,2025',
      title: 'Stitch Returns in Season 04',
      info: `Following a daring jailbreak conducted by his former adversary, Stitch’s 
      clandestine resurrection is achieved and he returns to the fray with orders to crack the codes
       needed to uncover the Pantheon moles. Get the backstory on his intense 
      rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving 
      in the Season 04 Battle Pass.`
    },
]

function HomeNewsCards() {
  return (
     <>
<section className="homeNews py-8">
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold text-white mb-6 uppercase">Latest News & Articles</h2>

    <div className="newsWrapper text-white w-300 flex justify-center items-center overflow-x-auto px-4">
      <div className="newsList flex flex-row justify-center items-center gap-6">
        <div className="Listitem group w-[137px] h-[70px] flex justify-center items-center text-[#b3b6b7] text-[20px] uppercase font-normal border-b-[0px] border-[#0768af] cursor-pointer transition-all duration-300 hover:text-white hover:font-bold hover:bg-[#0768af33] hover:border-b-[7px] hover:pb-[6px] text-center">
          <p>All news</p>
        </div>

        <div className="Listitem group w-[137px] h-[70px] flex justify-center items-center border-b-[0px] border-[#0768af] cursor-pointer transition-all duration-300 hover:bg-[#0768af33] hover:border-b-[7px] hover:pb-[6px]">
          <img src="/assets/activision-logo.svg" className="h-8" alt="Activision Logo" />
        </div>

        <div className="Listitem group w-[137px] h-[70px] flex justify-center items-center border-b-[0px] border-[#0768af] cursor-pointer transition-all duration-300 hover:bg-[#0768af33] hover:border-b-[7px] hover:pb-[6px]">
          <img src="/assets/cod-logo.svg" className="h-8" alt="CoD Logo" />
        </div>

        <div className="Listitem group w-[137px] h-[70px] flex justify-center items-center border-b-[0px] border-[#0768af] cursor-pointer transition-all duration-300 hover:bg-[#0768af33] hover:border-b-[7px] hover:pb-[6px]">
          <img src="/assets/THPS3+4_Logo.svg" className="h-8" alt="THPS Logo" />
        </div>

        <div className="Listitem group w-[137px] h-[70px] flex justify-center items-center border-b-[0px] border-[#0768af] cursor-pointer transition-all duration-300 hover:bg-[#0768af33] hover:border-b-[7px] hover:pb-[6px]">
          <img src="/assets/crash-bandicoot-logo.png" className="h-8" alt="Crash Logo" />
        </div>
      </div>
    </div>
  </div>
  <div className='blog-cards flex justify-center'>
  <div className='mt-5 w-300 flex flex-row justify-center items-center flex-wrap'>
    {newsCard.map((item)=>( <>
         <div className='newsCard text-white'>
            <img src={item.src}></img>
            <div className='p-4 h-90'>
           <small>{item.date}</small>
           <h6 className='title text-2xl'>{item.title}</h6>
          <div className=' divider-wrapper'> 
           <div className='divider'>
           </div>
          </div>
          <span>{item.info}</span><br></br>
          <a className='uppercase flex flex-row justify-start items-center gap-2 mt-2'>
            read more
            <img src='/assets/readmore-arrow.svg' className='h-3'></img>
          </a>
           </div>
         </div>
        </>
    ))}
    </div>
    </div>
</section>
    </>
  )
}

export default HomeNewsCards