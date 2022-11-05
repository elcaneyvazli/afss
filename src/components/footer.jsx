import React from 'react'
import Logo from '../img/logo.jpg'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Slide  from "react-reveal/Slide";

const footer = () => {
  return (
    <div className='bg-primary py-[2rem]'>
        <Slide left>
           <div className='container mx-auto'>
            <div className='flex flex-row flex-wrap items-center justify-between'>
                <img src={Logo} alt="" />
                <p className='text-white text-[1.6rem] md:py-0 py-[5rem]'>© 2022 Upstart. Design by <a href="edc.az">EDC.az</a> </p>
                <div className='flex flex-row items-center gap-x-[2rem]'>
                    <AiFillFacebook className='text-white text-[3rem] hover:text-secondary transition-all duration-500'/>
                    <AiFillInstagram className='text-white text-[3rem] hover:text-secondary transition-all duration-500'/>
                    <AiOutlineTwitter className='text-white text-[3rem] hover:text-secondary transition-all duration-500'/>
                </div>
            </div>
        </div> 
        </Slide>
        
    </div>
  )
}

export default footer