import React from 'react'
import Logo from "../assets/logo1.png"
import { FaWhatsapp } from "react-icons/fa";
import { PiHandCoins } from "react-icons/pi";
import WeAcept from "../assets/WeAccept.png"
import { GoArrowUpRight } from "react-icons/go";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";

export default function Footer() {
  return (
  <footer className='bg-purple-600'>
      <div className='flex justify-between w-10/12 mx-auto text-white pt-10 border-b border-purple-800'>
      <div>
        <img src={Logo} alt="Logo" className='w-35 mb-2 bg-white rounded-xl px-2 py-2 pr' />
        <p>Take full control of your inventory, billing, <br /> and POS without the hassle. Our system <br /> helps you track stock in real-time,<br /> automate orders, and avoid mistakes, <br /> making your business faster, smarter, and <br /> more efficient.</p>
        <p className='flex items-center gap-2 mt-5'><FaWhatsapp /><span>Free Consultation</span></p>
        <p className='flex items-center gap-2 mt-5'><PiHandCoins />We accept</p>
        <img src={WeAcept}alt="We Accept" className='w-100 rounded-xl mt-5 mb-20' />
      </div>



      <div className='space-y-4'>
        <h1 className='font-semibold mb-5'>Quick Links</h1>
        <p className='flex items-center gap-2'>Home <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Features <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Testimonials <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Contact <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Pricing <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Try Demo <GoArrowUpRight /></p>
      </div>



      <div className='space-y-4'>
      <h1 className='font-semibold mb-5'>Other Products</h1>
        <p className='flex items-center gap-2'>Restronp <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Zylux IT Solution <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Fenzora <GoArrowUpRight /></p>
      </div>



      <div className='space-y-4'>
      <h1 className='font-semibold mb-5'>Socials</h1>
        <p className='flex items-center gap-2'><LuFacebook />Facebook <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'><FaInstagram />Instagram <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'><FiTwitter />Twitter <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'><LuLinkedin />LinkedIn <GoArrowUpRight /></p>
      </div>


      <div className='space-y-4'>
      <h1 className='font-semibold mb-5'>Legal</h1>
        <p className='flex items-center gap-2'>Privacy Policy <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Terms of Service <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Cookies Policy <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Terms of Use <GoArrowUpRight /></p>
        <p className='flex items-center gap-2'>Refund Policy <GoArrowUpRight /></p>
      </div>
    </div>




    <div className='flex justify-between w-10/12 mx-auto text-white text-sm mt-10 pb-5'>
      <p>© 2025 stocknp. All rights reserved.</p>
      <p className='flex items-center gap-2'><RxLightningBolt />Powered by
      <span className='border-b'>Zylux IT Solution</span></p>
    </div>
  </footer>
  )
}
