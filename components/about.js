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
    
    // Animate main content
    gsap.fromTo(section.querySelector('.about'),
      { opacity: 0, y: 0, scale: 0.8 },
      { 
        opacity: 1, 
        y: -45, 
        scale: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 65%',
          scrub: true,
        }
      }
    );

    // Animate social icons
    gsap.fromTo(section.querySelector('.social-icons'),
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          end: 'top 55%',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className='bg-gradient-to-b from-slate-900 to-slate-800 min-h-[50vh] flex items-center justify-center relative'
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-emerald-400/5 filter blur-3xl"></div>
      
      <div className='text-center relative z-10'>
        <div className='about'>
          <h1 className='text-5xl text-center font-mono text-emerald-400 tracking-tight mb-8 transform hover:scale-105 transition-transform duration-300'>
            About
          </h1>
          <div className='flex justify-center my-4'>
            <div className='relative group'>
              {/* Image glow effect */}
              <div className='absolute inset-0 bg-emerald-400/20 rounded-full filter blur-xl transform scale-110 animate-pulse'></div>
              <Image
                src={about}
                width={150}
                height={150}
                alt="Profile"
                className='rounded-full  transform group-hover:scale-105 transition-transform duration-300 relative z-10'
              />
            </div>
          </div>
        </div>
        
        <div className='social-icons flex justify-center space-x-8 my-8'>
          <a
            href='https://github.com/3011adi'
            target="_blank"
            rel="noopener noreferrer"
            className='text-emerald-400 hover:text-emerald-300 transform hover:scale-110 transition-all duration-300'
          >
            <Github size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/adi-naik-74752a338/'
            target="_blank"
            rel="noopener noreferrer"
            className='text-emerald-400 hover:text-emerald-300 transform hover:scale-110 transition-all duration-300'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='mailto:3011adinaik@gmail.com'
            className='text-emerald-400 hover:text-emerald-300 transform hover:scale-110 transition-all duration-300'
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;