'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import about from '@/assets/about.png'
import gsap from 'gsap'
import { Github, Linkedin, Mail } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    gsap.fromTo(section.querySelector('.about'), 
    { opacity: 0,y:0 ,scale: 0.8 }, 
    { opacity: 1, y:-45,scale: 1, duration: 1, scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      end: 'top 65%',
      scrub: true,
    }}
  );
}, []);

  return (
    <div 
    ref={sectionRef} 
    className='bg-black text-white h-[50vh] flex items-center justify-center'
  >
    <div className='text-center'>
      <div className='about'>
        <h1 className='text-5xl text-center font-serif'>About</h1>
        <div className='flex justify-center my-4'>
          <Image 
            src={about} 
            width={150} 
            height={150} 
            alt="Profile" 
            className='rounded-full'
          />
        </div>
      </div>
      
      <div className='flex justify-center space-x-8 my-4'>
        <a 
          href='https://github.com/3011adi' 
          target="_blank" 
          rel="noopener noreferrer" 
          className='hover:text-gray-300 transition-colors'
        >
          <Github size={24} />
        </a>
        <a 
          href='https://www.linkedin.com/in/adi-naik-74752a338/' 
          target="_blank" 
          rel="noopener noreferrer" 
          className='hover:text-gray-300 transition-colors'
        >
          <Linkedin size={24} />
        </a>
        <a 
          href='mailto:3011adinaik@gmail.com' 
          className='hover:text-gray-300 transition-colors'
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  </div>
  )
}

export default About