import React from 'react'
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";
import Logo from "../assets/logo1.png"
import { MdLogin } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";

export default function NavBar() {
  return (
   <nav>
   <div className='bg-purple-600 text-white font-sans p-0.5'>
     <div className='w-11/12 flex justify-between mx-auto '>
      <div className='flex items-center gap-4'>
        <p className='flex items-center gap-2'><LuPhone />9769329984</p>
        <p className='flex items-center gap-2'><SlLocationPin />New Bansewor, Kathmandu</p>
      </div>


      <div className='flex items-center gap-4'>
        <p className='flex items-center gap-2'><FaWhatsapp />WhatsApp</p>
        <p className='flex items-center gap-2'><TiMessage />stocknp@gmail.com</p>
      </div>
    </div>
   </div>



    <div className='flex justify-between w-11/12 mx-auto text-purple-600  p-2'>
      <div>
        <img src={Logo} alt="logo" className='w-35' />
      </div>

      <div className='flex items-center gap-6 font-semibold font-xl'>
        <p>Home</p>
        <p>Features</p>
        <p>Testimonial</p>
        <p>Pricing</p>
        <p>Contact</p>
        <button className='rounded-full bg-orange-100 py-2 px-4 text-orange-400 '>Try Demo</button>
      </div>


      <div className='flex items-center gap-4'>
        <button className='flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-500 duration-500'><MdLogin />Login</button>
        <button className='flex items-center gap-2 text-purple-600 border-white px-4 py-2 rounded-xl shadow hover:text-black duration-500'><PiPhoneCallLight />Call Now</button>
      </div>
    </div>


   </nav>


    
  )
}
