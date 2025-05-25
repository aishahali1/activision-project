import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { SiYoutubemusic } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaArrowCircleUp } from "react-icons/fa";






const socialmedia = [
    {icon: <CiFacebook></CiFacebook>},{icon: <TiSocialTwitterCircular></TiSocialTwitterCircular>},{icon: <SiYoutubemusic></SiYoutubemusic>},
    {icon: <TiSocialLinkedinCircular></TiSocialLinkedinCircular>},{icon: <TiSocialInstagram></TiSocialInstagram>},

]
const footergames=[
    {games: 'Call of Duty'},{games: 'Tony Hawk Pro Skater'},{games: 'Crash Bandicoot'},
    {games: 'Spyro'},{games: 'Sekiro'},

]

const company = [
    {info: "Press"},  {info: "Research"},  {info: "Activision Blizzard"},  {info: "Contact Us"},
]

const legal = [
    {res: "Terms of Use"},{res: "Privacy Policy"},{res: "Cookie Policy"},{res: "Cookie Settings"},
    {res: "Online Safety"},{res: "Applicant Privacy Policy"},{res: "Your Privacy Choices"},
]


function Footer() {
  return (
    <>
    <div className='footerbg text-white h-160'>
    <div className='h-60'>
        <div className='footerLinks flex flex-row justify-evenly items-center p-10 gap-40'>
         <div className='footer-col-1 text-3xl items-center h-60'>
            <h3 className='text-xl p-5 uppercase'>Follow Us</h3>
             <ul className='flex flex-row gap-3 px-2'>
               {socialmedia.map((media)=>(
                <li>{media.icon}</li>
               ))}
             </ul>
             <div className='py-30'>
            <ul className='flex flex-row gap-2 px-2'>
                <li>
                    <img className='w-20 ' src='/src/assets/esrb-rating.jpg'></img>
                </li>
                <li>
                    <img className='w-10' src='/src/assets/ESRB_updated.jpg'></img>
                </li>
            </ul>
        </div>
         </div>
          <div className='footer-col-2 items-center h-60'>
            <h3 className='text-xl py-3 uppercase'>Popular Games</h3>
             <ul className='flex flex-col text-[#b3b5b6] text-sm font-bold'>
               {footergames.map((games)=>(
                <li className='py-1'>{games.games}</li>
               ))}
             </ul>
         </div>
         <div className='footer-col-3 items-center h-60'>
            <h3 className='text-xl py-3 uppercase'>Company</h3>
             <ul className='flex flex-col text-[#b3b5b6] text-sm font-bold'>
               {company.map((item)=>(
                <li className='py-1'>{item.info}</li>
               ))}
             </ul>
         </div>
         <div className='footer-col-4 items-center h-60'>
            <h3 className='text-xl py-3 uppercase'>Legal</h3>
             <ul className='flex flex-col text-[#b3b5b6] text-sm font-bold'>
               {legal.map((item)=>(
                <li className='py-1'>{item.res}</li>
               ))}
             </ul>
         </div>
         <div>
          <a className='text-[#b3b5b6] snap-start'>
            <FaArrowCircleUp></FaArrowCircleUp>
            back to the top
          </a>
         </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-6 py-10' src='/src/assets/flag.png'></img>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src='/src/assets/activision-logo.svg'></img>
            <p>Copyright 2025 Activision Publishing, Inc.</p>
        </div>
        <img src='/src/assets/rainbow-lines.svg'></img>
    </div>
    </div>
    </>
  )
}

export default Footer