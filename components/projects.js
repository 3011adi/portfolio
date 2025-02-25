'use client'
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import iphone from "@/assets/iphone.png";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_SITES = [
  { name: "Drag and drop website buildr", url: "https://www.webpagebuildr.com" },
  { name: "EcomStore", url: "https://ecomstore-six.vercel.app" },
  { name: "AI blogs", url: "https://thinkai-blog.vercel.app" },
  { name: "online compiler with gpt", url: "https://ad-compiler.vercel.app" },
  { name: "autum ", url: "https://aut-rho.vercel.app/" },
  
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentSiteIndex, setCurrentSiteIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(section.querySelector('.pro-text'),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 30%',
        scrub: true,
      }}
    );

    gsap.fromTo(section.querySelector('.show-text'),
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      }}
    );

    gsap.fromTo(section.querySelector('.iphone'),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'top 40%',
        scrub: true,
      }}
    );
  }, []);

  const changeWebsite = () => {
    setCurrentSiteIndex((prevIndex) => (prevIndex + 1) % SHOWCASE_SITES.length);
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className='flex items-center justify-center'>
        <div className='w-[80%] lg:w-[50%] pt-6'>
          <h1 className="pro-text font-mono text-6xl text-start pl-6 text-emerald-400 tracking-tight transform hover:scale-105 transition-transform duration-300">
            Projects
          </h1>
          <h1 className="show-text font-mono text-6xl text-end pr-6 text-emerald-400 tracking-tight transform hover:scale-105 transition-transform duration-300">
            Showcase
          </h1>
        </div>
      </div>
      <div className="iphone flex flex-col items-center pt-16 relative">
        <div className="relative w-[390px] h-[810px]">
          {/* Glow effect behind the iPhone */}
          <div className="absolute inset-0 bg-emerald-400/10 filter blur-2xl transform scale-110 animate-pulse"></div>
          
          <Image src={iphone} layout="fill" objectFit="contain" alt="iPhone frame" />
          <div 
            style={{ 
              position: 'absolute', 
              top: '3.5%', 
              left: '6%', 
              width: '88%', 
              height: '93%', 
              borderRadius: '2.5rem', 
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)' // Emerald glow
            }}
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <iframe
                src={SHOWCASE_SITES[currentSiteIndex].url}
                style={{ 
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title={SHOWCASE_SITES[currentSiteIndex].name}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-mono mb-4 text-emerald-400">
            Currently showing:
          </p>
          <p className="text-lg">
            <strong className="text-emerald-300">{SHOWCASE_SITES[currentSiteIndex].name}</strong>
            <br />
            <a 
              href={SHOWCASE_SITES[currentSiteIndex].url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {SHOWCASE_SITES[currentSiteIndex].url}
            </a>
          </p>
          <button 
            onClick={changeWebsite}
            className="px-6 py-3 bg-slate-800 mt-3 text-emerald-400 font-mono rounded-full font-bold 
                     hover:bg-slate-700 hover:text-emerald-300 transition-all duration-300
                     border border-emerald-400/30 hover:border-emerald-400
                     shadow-lg shadow-emerald-900/20"
          >
            Next Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;