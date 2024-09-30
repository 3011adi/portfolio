'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import about from '@/assets/about.png'
import gsap from 'gsap'
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
    <div ref={sectionRef}className='bg-black text-white h-[50vh] flex items-center justify-center'>
        
        <div>
            <div className='about'>      
        <h1 className='text-5xl text-center font-serif'>About</h1>
        <Image src={about} width={150} height={150} />
        </div > 
        <div className='flex items-center justify-center text-xl '>
        <a className='underline' href='https://github.com/3011adi'> github </a>
        </div>
        <h1 className='font-serif text-xl p-2 text-center'>9322985826</h1>
        </div>
    </div>
  )
}

export default About