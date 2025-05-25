import React from 'react'
import { Link } from 'react-router'

const navlist = [
    {
        title: "Home",
        to: "/"
    },
     {
        title: "About us",
        to: "/about"
    },
     {
        title: "Support",
        to: "/support"
    },
]

function Navbar() {
  return (
    <>
    <header className='header w-screen h-[60px] uppercase'>
    <nav className='flex absolute top-0 left-0 z-50 w-screen items-center h-[60px] font-bold'>
        <div className='flex flex-row justify-center items-center gap-15 w-screen'>
        <div className='logo flex flex-row justify-center items-center header-top-nav '>
           <img className='block h-[30px]' src='/src/assets/activision-logo.svg'></img>
        </div>
        <div className='flex flex-row justify-between items-center gap-9 w-250'>
        <ul className='text-[#a6a7a8] flex flex-row gap-9'>
          {navlist.map((item)=>(<>
           <Link to={item.to}>
            <li>{item.title}</li>
            </Link>
            </>
          ))}
        </ul>
        <div className='login w-90 flex flex-row items-center gap-3'>
         <a className='loginbtn font-bold'>Sign up</a>
         <a className='text-[#a6a7a8]'>login</a>
        </div>
        </div>
        </div>
    </nav>
    </header>
    </>
  )
}

export default Navbar