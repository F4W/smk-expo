import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'
import { BsPhone } from 'react-icons/bs'

export default function Contact() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[100vh]">
      <p className="text-[var(--clr-text-1)] font-['Poppins'] text-3xl">Contact <span className="text-white">With Us</span></p>
        <div className="inline-flex text-4xl justify-between gap-10 p-20 flex-wrap text-[var(--clr-text-1)]">
           <a href="https://www.instagram.com/smknegeri69jakarta?igsh=MWI3dGw5bnludms4cg==" target="_blank"><AiFillInstagram className="hover:text- hover:scale-150 duration-200"/></a>
          <a href="https://m.youtube.com/@smkn69jakarta25" target="_blank"><BsYoutube className="hover:text- hover:scale-150 duration-200" /></a> 
          <a href="https://www.smkn69jkt.sch.id/" target="_blank"><BsGlobe className="hover:text- hover:scale-150 duration-200"/></a> 

        </div>
        <p className="text-[var(--clr-text-1)] font-['Poppins'] text-3xl"><BsPhone className='relative top-7 right-8'/>0838-1692-7804</p>
        
    </div>
  )
}
